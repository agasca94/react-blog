import React from 'react';
import { Tabs, Tab } from '@material-ui/core';
import PostListContainer from '../Blog/PostListContainer';

function UserPosts() {
    const [activeTab, setActiveTab] = React.useState(0);

    return (
        <React.Fragment>
            <Tabs
                value={activeTab}
                indicatorColor="secondary"
                textColor="secondary"
                onChange={(_, newValue) => setActiveTab(newValue)}
            >
                <Tab label="My posts" />
                <Tab label="Favorites" />
            </Tabs>
            {activeTab === 0 &&
                <PostListContainer source='ownedIds'/>
            }
            {activeTab === 1 &&
                <PostListContainer source='favoritesIds'/>
            }
        </React.Fragment>
    );
}

export default UserPosts;
