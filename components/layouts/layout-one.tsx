import React, { Fragment, ReactNode } from 'react'
import { HeaderOne } from '../wrappers/header/header-one'
import { FooterOne } from '../wrappers/footer/footer-one'

export const LayoutOne = ({children}: {children: ReactNode}) => {
      return (
  <Fragment>
        <HeaderOne/>
        {children}
        {/* <FooterOne/> */}
    </Fragment>
  )
}
