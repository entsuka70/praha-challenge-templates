// todo: ここに単体テストを書いてみましょう！

import { NameApiService } from "../nameApiService";

describe('Test nameApiService.ts', () => {
    test('get random firstname', async () => {
        const service = jest.mock('../nameApiService');
        const serviceMock = service.fn();
        const longName: string = 'JoyJoy';
        await serviceMock.mockImplementation(() => {
            return {
                getFirstName: ((longName: string) => {
                    return longName;
                })
            }
        });
        const realService = new NameApiService;
        return expect(realService.getFirstName(longName)).rejects.toThrow('firstName is too long!');
    });
    test('get random firstname', async () => {
        const service = jest.mock('../nameApiService');
        const serviceMock = service.fn();
        const shortName: string = 'Joy';
        await serviceMock.mockImplementation(() => {
            return {
                getFirstName: ((shortName: string) => {
                    return shortName;
                })
            }
        });
        const realService = new NameApiService;
        return expect(realService.getFirstName(shortName)).resolves.toMatch(shortName);
    });
});