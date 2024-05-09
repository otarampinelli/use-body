import { ServerResponse, IncomingMessage } from 'node:http';

interface RequestInterface extends IncomingMessage {
    body: any;
}
declare function useBody(req: RequestInterface, res: ServerResponse, next: () => {}, type?: string): void;

export { useBody as default };
