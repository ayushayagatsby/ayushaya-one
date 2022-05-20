import React from 'react'
import {css, jsx} from '@emotion/react'
import SingleOffer from './SingleOffer'
import IcRoutine from '../../assets/IcRoutine.svg'
import IcLifestyle from '../../assets/IcLifestyle.svg'
import IcNutrition from '../../assets/IcNutrition.svg'
import IcUnease from '../../assets/IcUnease.svg'
import IcActivity from '../../assets/IcActivity.svg'

export default function AllOffers({currentLanguage}) {
    return (
        <div css={css `display:flex; justify-content: space-between; position: absolute; bottom: -30%; width: 50vw;`}>

            <SingleOffer text={currentLanguage.routine}><IcRoutine css={css`width: 6vw; max-width: 160px; height: auto;`}/></SingleOffer>
            <SingleOffer margin="10% 0 0 0" text={currentLanguage.lifestyle}><IcLifestyle css={css`width: 6vw; max-width: 160px; height: auto;`}/></SingleOffer>
            <SingleOffer margin="15% 5% 2% 5%" text={currentLanguage.nutrition}><IcNutrition css={css`width: 6vw; max-width: 160px; height: auto;`}/></SingleOffer>
            <SingleOffer margin="10% 0 0 0" text={currentLanguage.unease}><IcUnease css={css`width: 6vw; max-width: 160px; height: auto;`}/></SingleOffer>
            <SingleOffer text={currentLanguage.activity}><IcActivity css={css`width: 6vw; max-width: 160px; height: auto;`}/></SingleOffer>

        </div>
    )
}
