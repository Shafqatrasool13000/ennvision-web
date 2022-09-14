import { Drawer } from 'antd';
import React, { useContext } from 'react';
import { DrawerStyledMain } from './style';

import {SidebarContext } from '../../App';

const Index = ({children}) => {
    const { showSidebar,setShowSidebar } = useContext(SidebarContext);
    const onClose = () => {
        setShowSidebar(false);
    };
    return (
        <DrawerStyledMain>
            <Drawer
              style={{
                marginTop:'66px'
              }}
                width={250}
                placement={'left'}
                closable={false}
                onClose={onClose}
                visible={showSidebar}
                key={'left'}
            >
               {children}
            </Drawer>
        </DrawerStyledMain>

    );
};

export default Index;