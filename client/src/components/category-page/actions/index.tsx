import { FC, useState } from 'react';

import { IconButton } from 'components/ui/icon-button';
import SvgAdjustmentsIconAccentXl from 'components/ui/icons/adjustments-icon-accent-xl';
import SvgCrossIconAccentXl from 'components/ui/icons/cross-icon-accent-xl';
import SvgGridIconAccentL from 'components/ui/icons/grid-icon-accent-l';
import SvgLinesIconAccentL from 'components/ui/icons/lines-icon-accent-l';

import { ViewType } from './types';

import { Container, Filter, View, Wrapper } from './styles';

export const Actions: FC = () => {
    const [isOpenFilter, setIsOpenFilter] = useState(false);
    const [view, setView] = useState<ViewType>('grid');

    const handleOpenFilterClick = () => {
        setIsOpenFilter(!isOpenFilter);
    };

    const handleViewChange = (value: ViewType) => {
        setView(value);
    };

    const FilterIcon = isOpenFilter
        ? SvgCrossIconAccentXl
        : SvgAdjustmentsIconAccentXl;

    return (
        <Wrapper>
            <Container>
                <Filter onClick={handleOpenFilterClick}>
                    <FilterIcon color='transparent' stroke='var(--dark)' />
                    <span>filter</span>
                </Filter>
                <View>
                    <IconButton
                        size='l'
                        outline='var(--dark)'
                        isActive={view === 'lines'}
                        onClick={() => handleViewChange('lines')}
                    >
                        <SvgLinesIconAccentL />
                    </IconButton>
                    <IconButton
                        size='l'
                        outline='var(--dark)'
                        isActive={view === 'grid'}
                        onClick={() => handleViewChange('grid')}
                    >
                        <SvgGridIconAccentL />
                    </IconButton>
                </View>
            </Container>
        </Wrapper>
    );
};
