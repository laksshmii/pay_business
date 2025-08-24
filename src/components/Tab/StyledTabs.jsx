import React from 'react';
import { Tabs, Tab } from '@mui/material';
import PropTypes from 'prop-types';

const StyledTabs = ({ tabValue, handleTabChange, tabLabels }) => (
    <Tabs
    className='employee-tab'
        value={tabValue}
        onChange={handleTabChange}
        variant="fullWidth"
        sx={{
            borderRadius: '12px 12px 12px 12px',
            overflow: 'hidden',
        }}
    >
        {tabLabels.map((label, index) => (
            <Tab
                key={index}
                label={label}
                sx={{
                    flex: 1,
                    textTransform: 'none',
                    backgroundColor: tabValue === index ? '#EAF5EE' : 'transparent',
                    borderRadius: index === 0 ? '12px 12px 12px 12px' : index === tabLabels.length - 1 ? '12px 12px 12px 12px' : '0',
                    '&.Mui-selected': {
                        backgroundColor: '#EAF5EE',
                    },
                }}
            />
        ))}
    </Tabs>
);

StyledTabs.propTypes = {
    tabValue: PropTypes.number.isRequired,
    handleTabChange: PropTypes.func.isRequired,
    tabLabels: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default StyledTabs;
