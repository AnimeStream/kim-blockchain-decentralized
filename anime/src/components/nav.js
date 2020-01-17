import React, { useState, useEffect } from "react";
import { Input, Menu } from 'semantic-ui-react';
import { Dropdown, Icon } from 'semantic-ui-react'

const Nav = ({ signOut,user }) => {
    console.log(user.username)

    const trigger = (
        <span>
            <Icon name='user' /> Hello, {user.username.split('.')[0]}
        </span>
    )


    const options = [
        {
            key: 'user',
            text: (
                <span>
                    Signed in as <strong>{user.username.split('.')[0]}</strong>
                </span>
            ),
            disabled: true,
        },
        { key: 'profile', text: 'Your Profile' },
        { key: 'stars', text: 'Your Stars' },
        { key: 'explore', text: 'Explore' },
        { key: 'integrations', text: 'Integrations' },
        { key: 'help', text: 'Help' },
        { key: 'settings', text: 'Settings' },
        { key: 'sign-out', text: 'Sign Out' },
    ]


    return (
        <>
            <Menu secondary >
                <Menu.Item
                    name='Latest'
                // active={activeItem === 'home'}
                // onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='Anime List'
                // active={activeItem === 'messages'}
                // onClick={this.handleItemClick}
                />

                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Input icon='search' placeholder='Search...' />
                    </Menu.Item>

                    
                </Menu.Menu>
                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Dropdown trigger={trigger} options={options} />
                    </Menu.Item>
                   
                </Menu.Menu>

            </Menu>
        </>
    )
}

export default Nav;