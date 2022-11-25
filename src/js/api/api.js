import request from './request';

export function hello(data) {
    return request.get('/api/bigsun/hello', data);
}