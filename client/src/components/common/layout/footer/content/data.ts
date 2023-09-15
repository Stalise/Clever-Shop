import SvgClockIconFilledS from 'components/ui/icons/clock-icon-filled-s';
import SvgLocationMarkerIconFilledS from 'components/ui/icons/location-marker-icon-filled-s';
import SvgPhoneIconFilledS from 'components/ui/icons/phone-icon-filled-s';

export const categories = {
    title: 'Categories',
    data: [
        { path: 'men', text: 'Men' },
        { path: 'women', text: 'Women' },
        { path: '/', text: 'Accessories' },
        { path: '/', text: 'Beauty' },
    ],
};

export const information = {
    title: 'Information',
    data: [
        { path: '/', text: 'About Us' },
        { path: '/', text: 'Contact Us' },
        { path: '/', text: 'Blog' },
        { path: '/', text: 'FAQs' },
    ],
};

export const useful = {
    title: 'Useful links',
    data: [
        { path: '/', text: 'Terms & Conditions' },
        { path: '/', text: 'Returns & Exchanges' },
        { path: '/', text: 'Shipping & Delivery' },
        { path: '/', text: 'Privacy Policy' },
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
