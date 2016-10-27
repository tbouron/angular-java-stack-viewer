import angular from 'angular';
import 'angular-mocks';

import stackViewer from './stack-viewer';

const { module, inject } = angular.mock;

describe('tb.stack-viewer directive', ()=> {
    let $compile, $scope, element;

    // eslint-disable-next-line no-undef
    beforeEach(module(stackViewer));
    // eslint-disable-next-line no-undef
    beforeEach(inject(['$compile', '$rootScope', (_$compile_, _$rootScope_)=> {
        $compile = _$compile_;
        $scope = _$rootScope_.$new();
    }]));

    describe('does not render anything', ()=> {
        describe('if trace', ()=> {
            it('is undefined', ()=> {
                element = $compile('<div tb-stack-viewer></div>')($scope);
                $scope.$digest();
                expect(element.isolateScope().stack).toBeDefined();
                expect(element.isolateScope().trace).toBeUndefined();
                expect(element.isolateScope().vendors).toBeUndefined();
                expect(Object.keys(element.children()).length).toBe(0);
            });
            it('is empty', ()=> {
                $scope.trace = '';
                element = $compile('<div tb-stack-viewer trace="trace"></div>')($scope);
                $scope.$digest();
                expect(element.isolateScope().stack).toBeDefined();
                expect(element.isolateScope().trace).toBe($scope.trace);
                expect(element.isolateScope().vendors).toBeUndefined();
                expect(Object.keys(element.children()).length).toBe(0);
            });
            it('is not a Java stack trace', ()=> {
                $scope.trace = 'Hello world';
                element = $compile('<div tb-stack-viewer trace="trace"></div>')($scope);
                $scope.$digest();
                expect(element.isolateScope().stack).toBeDefined();
                expect(element.isolateScope().trace).toBe($scope.trace);
                expect(element.isolateScope().vendors).toBeUndefined();
                expect(Object.keys(element.children()).length).toBe(0);
            });
        });
    });
    describe('renders stack', ()=> {
        let trace = [
            'java.net.SocketException: Connection reset',
            'at java.net.SocketInputStream.read(SocketInputStream.java:185)',
            'at sun.security.ssl.InputRecord.readFully(InputRecord.java:312)',
            'at sun.security.ssl.InputRecord.read(InputRecord.java:350)',
            'at org.apache.http.impl.io.AbstractSessionInputBuffer.fillBuffer(AbstractSessionInputBuffer.java:166)',
            'at org.apache.http.impl.conn.DefaultHttpResponseParser.parseHead(DefaultHttpResponseParser.java:92)',
            'at org.apache.http.protocol.HttpRequestExecutor.doReceiveResponse(HttpRequestExecutor.java:300)',
            'at org.apache.http.protocol.HttpRequestExecutor.execute(HttpRequestExecutor.java:127)',
            'at com.sparktale.bugtale.server.common.aws.S3Manager.doPutObject(S3Manager.java:247)',
            'at com.sparktale.bugtale.server.common.aws.S3Manager.putBytes(S3Manager.java:134)',
            'at com.sparktale.bugtale.server.common.util.S3IOInterface.putBytes(S3IOInterface.java:84)',
            'at com.sparktale.bugtale.server.common.util.IOUtil.putBytes(IOUtil.java:126)',
            'Caused by: org.hibernate.exception.ConstraintViolationException: could not insert: [com.example.myproject.MyEntity]',
            'at org.hibernate.exception.SQLStateConverter.convert(SQLStateConverter.java:96)',
            'at org.hibernate.id.insert.AbstractSelectingDelegate.performInsert(AbstractSelectingDelegate.java:64)',
            'at org.hibernate.persister.entity.AbstractEntityPersister.insert(AbstractEntityPersister.java:2329)',
            'at org.hibernate.persister.entity.AbstractEntityPersister.insert(AbstractEntityPersister.java:2822)',
            'at sun.reflect.GeneratedMethodAccessor5.invoke(Unknown Source)',
            'at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25)',
            'at $Proxy19.save(Unknown Source)',
            'at com.example.myproject.MyEntityService.save(MyEntityService.java:59) <-- relevant call (see notes below)',
            'at com.example.myproject.MyServlet.doPost(MyServlet.java:164)',
            '... 32 more',
            'Caused by: java.sql.SQLException: Violation of unique constraint MY_ENTITY_UK_1: duplicate value(s) for column(s) MY_COLUMN in statement [...]',
            'at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1110)',
            'at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:603)',
            'at java.lang.Thread.run(Thread.java:679)'
        ].join('\r\n');
        let vendors = {
            'Java/Sun/Oracle': ['java', 'javax', 'sun', 'sunw', 'com.sun', 'com.oracle'],
            'Apache': ['org.apache'],
            'Hibernate': ['org.hibernate']
        };

        it('without vendor grouping', ()=> {
            $scope.trace = trace;
            element = $compile('<div tb-stack-viewer trace="trace"></div>')($scope);
            $scope.$digest();
            expect(element.isolateScope().stack).toBeDefined();
            expect(element.isolateScope().trace).toBe($scope.trace);
            expect(element.isolateScope().vendors).toBeUndefined();
            expect(element.children().length).toBe(15);
            expect(element.children().eq(0).hasClass('has-exception')).toBeTruthy();
            expect(element.children().eq(7).hasClass('has-exception')).toBeTruthy();
            expect(element.children().eq(13).hasClass('has-exception')).toBeTruthy();
        });
        it('with vendor grouping', ()=> {
            $scope.trace = trace;
            $scope.vendors = vendors;
            element = $compile('<div tb-stack-viewer trace="trace" vendors="vendors"></div>')($scope);
            $scope.$digest();
            expect(element.isolateScope().stack).toBeDefined();
            expect(element.isolateScope().trace).toBe($scope.trace);
            expect(element.isolateScope().vendors).toBe($scope.vendors);
            expect(element.children().length).toBe(9);
            expect(element.children().eq(0).hasClass('has-exception')).toBeTruthy();
            expect(element.children().eq(4).hasClass('has-exception')).toBeTruthy();
            expect(element.children().eq(8).hasClass('has-exception')).toBeTruthy();
        });
        describe('and updates', ()=> {
            it('if trace changes', ()=> {
                $scope.trace = 'Hello world';
                element = $compile('<div tb-stack-viewer trace="trace"></div>')($scope);
                $scope.$digest();
                expect(element.isolateScope().stack).toBeDefined();
                expect(element.isolateScope().trace).toBe($scope.trace);
                expect(element.isolateScope().vendors).toBeUndefined();
                expect(element.children().length).toBe(0);

                $scope.trace = trace;
                $scope.$digest();
                expect(element.isolateScope().stack).toBeDefined();
                expect(element.isolateScope().trace).toBe($scope.trace);
                expect(element.isolateScope().vendors).toBeUndefined();
                expect(element.children().length).toBe(15);
            });
            it('if vendors changes', ()=> {
                $scope.trace = trace;
                $scope.vendors = {};
                element = $compile('<div tb-stack-viewer trace="trace" vendors="vendors"></div>')($scope);
                $scope.$digest();
                expect(element.isolateScope().stack).toBeDefined();
                expect(element.isolateScope().trace).toBe($scope.trace);
                expect(element.isolateScope().vendors).toBe($scope.vendors);
                expect(element.children().length).toBe(15);
                expect(element.children().eq(0).hasClass('has-exception')).toBeTruthy();
                expect(element.children().eq(7).hasClass('has-exception')).toBeTruthy();
                expect(element.children().eq(13).hasClass('has-exception')).toBeTruthy();

                $scope.vendors = vendors;
                $scope.$digest();
                expect(element.isolateScope().stack).toBeDefined();
                expect(element.isolateScope().trace).toBe($scope.trace);
                expect(element.isolateScope().vendors).toBe($scope.vendors);
                expect(element.children().length).toBe(9);
                expect(element.children().eq(0).hasClass('has-exception')).toBeTruthy();
                expect(element.children().eq(4).hasClass('has-exception')).toBeTruthy();
                expect(element.children().eq(8).hasClass('has-exception')).toBeTruthy();
            });
        });
        it('and set the main error properly', inject(['$timeout', ($timeout)=> {
            $scope.trace = trace;
            element = $compile('<div tb-stack-viewer trace="trace" vendors="vendors"></div>')($scope);
            $scope.$digest();
            $timeout.flush();
            expect(element.children().eq(0).find('li').hasClass('main-error')).toBeTruthy();

            $scope.vendors = vendors;
            $scope.$digest();
            $timeout.flush();
            expect(element.children().eq(0).find('li').hasClass('main-error')).toBeFalsy();
            expect(element.children().eq(2).find('li').hasClass('main-error')).toBeTruthy();
        }]));
    });
});
