export function transformArguments(key: string, string: string): Array<string> {
    return ['FT.SUGDEL', key, string];
}

export { transformReplyBoolean as transformReply } from '@redis/client/dist/lib/commands/generic-transformers';
