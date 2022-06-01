import React, { useTransition } from 'react'
import { useTranslation } from 'react-i18next'

import './Portfolio.css'
import PortfolioVG from './PortfolioVG'
import PortfolioWEB from './PortfolioWEB'
export default function Portfolio() {

  const [t, i18n] = useTranslation("global")

  return (
    <div className='portfolio'><h2>{t("portfolio.checkout")}</h2>
    <PortfolioVG />
    <PortfolioWEB /></div>
  )
}
