"use client";

import { useState } from 'react';
import { groups } from './data'; // Import your data
import styles from "page.module.css";

type Stack = {
  name: string;
  image: string;
};

type Group = {
  name: string;
  stacks: Stack[];
};

const GroupList = () => {
  const [expandedGroup, setExpandedGroup] = useState<string | null>(null);

  const handleGroupClick = (groupName: string) => {
    setExpandedGroup(expandedGroup === groupName ? null : groupName);
  };

  return (
    <div>
      {groups.map((group: Group) => (
        <div
          key={group.name}
          className={`group-container ${group.name.replace(/\s+/g, '-').toLowerCase()}`}
          style={{ marginBottom: '20px', padding: '10px', borderRadius: '5px' }}
        >
          <h2 onClick={() => handleGroupClick(group.name)} style={{ cursor: 'pointer', margin: '0' }}>
            {group.name}
          </h2>
          {expandedGroup === group.name && (
            <div>
              {group.stacks.map((stack) => (
                <div key={stack.name} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                  <img src={stack.image} alt={stack.name} style={{ width: '50px', height: '50px', marginRight: '10px' }} />
                  <span>{stack.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default GroupList;