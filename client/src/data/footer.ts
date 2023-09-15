import SvgClockIconFilledS from 'components/ui/icons/clock-icon-filled-s';
import SvgLocationMarkerIconFilledS from 'components/ui/icons/location-marker-icon-filled-s';
import SvgPhoneIconFilledS from 'components/ui/icons/phone-icon-filled-s';

export const categories = {
    title: 'Categories',
    data: [
        { link: 'men', text: 'Men' },
        { link: 'women', text: 'Women' },
        { link: '#!', text: 'Accessories' },
        { link: '#!', text: 'Beauty' },
    ],
};

export const information = {
    title: 'Information',
    data: [
        { link: '#!', text: 'About Us' },
        { link: '#!', text: 'Contact Us' },
        { link: '#!', text: 'Blog' },
        { link: '#!', text: 'FAQs' },
    ],
};

export const useful = {
    title: 'Useful links',
    data: [
        { link: '#!', text: 'Terms & Conditions' },
        { link: '#!', text: 'Returns & Exchanges' },
        { link: '#!', text: 'Shipping & Delivery' },
        { link: '#!', text: 'Privacy Policy' },
    ],
};

export const contacts = {
    title: 'Contact us',
    data: [
        {
            Icon: SvgLocationMarkerIconFilledS,
            text: 'Belarus, Mogilev, Kaluga 3',
        },
        { Icon: SvgPhoneIconFilledS, text: '+375 29 100 20 30' },
        { Icon: SvgClockIconFilledS, text: 'All week 24/7' },
    ],
};
