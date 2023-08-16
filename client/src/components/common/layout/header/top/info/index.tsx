import { FC, Fragment } from 'react';

import SvgClockIconFilledS from 'components/ui/icons/clock-icon-filled-s';
import SvgLocationMarkerIconFilledS from 'components/ui/icons/location-marker-icon-filled-s';
import SvgPhoneIconFilledS from 'components/ui/icons/phone-icon-filled-s';

import { Item, Number, Text, Wrapper } from './styles';

const data = [
    { Icon: SvgPhoneIconFilledS, text: '+375 25 100 20 30' },
    { Icon: SvgLocationMarkerIconFilledS, text: 'Belarus, Mogilev, Kaluga 3' },
    { Icon: SvgClockIconFilledS, text: 'All week 24/7' },
];

export const Info: FC = () => (
    <Wrapper>
        {data.map(({ Icon, text }, index) => (
            <Item key={text}>
                {index === 0 ? (
                    <Number href='tel:+375291002030'>
                        <Icon color='var(--grey)' />
                        <Text>{text}</Text>
                    </Number>
                ) : (
                    <Fragment>
                        <Icon color='var(--grey)' />
                        <Text>{text}</Text>
                    </Fragment>
                )}
            </Item>
        ))}
    </Wrapper>
);
