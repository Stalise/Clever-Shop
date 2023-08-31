import { generateLinks } from '../generate-links';

describe('generateLinks', () => {
    it('should return correct result', () => {
        const result = [
            {
                text: 'Facebook',
                link: `https://www.facebook.com/sharer.php?u=url`,
            },
            {
                text: 'Вконтакте',
                link: `https://vkontakte.ru/share.php?url=url`,
            },
            {
                text: 'Одноклассники',
                link: `https://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1&st._surl=url`,
            },
            {
                text: 'Телеграм',
                link: `https://telegram.me/share/url?url=url`,
            },
            {
                text: 'Pinterest',
                link: `https://ru.pinterest.com/pin/create/button/?url=url`,
            },
            {
                text: 'LinkedIn',
                link: `https://www.linkedin.com/sharing/share-offsite/?url=url`,
            },
        ];

        expect(generateLinks('url')).toEqual(result);
    });
});
