
"use client";
import React, { useState } from 'react';
import { Card } from 'react-bootstrap';

const ShowCode = ({
    title,
    nextjsCode,
    dataCode,
    customCardClass,
    customCardHeaderClass,
    customCardBodyClass,
    customCardFooterClass,
    children,
}) => {
    const [showCode, setShowCode] = useState(false);
    const [activeTab, setActiveTab] = useState(dataCode ? 'nextjs' : 'nextjs'); // Default to 'react' tab

    const toggleCode = () => {
        setShowCode(!showCode);
    };

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <Card className={`custom-card ${customCardClass}`}>
            <Card.Header className={`justify-content-between ${customCardHeaderClass}`}>
                <div className="card-title" dangerouslySetInnerHTML={{ __html: title }}></div>
                <div className="prism-toggle">
                    <button className="btn btn-sm btn-primary-light" onClick={toggleCode}>
                        {showCode ? 'Hide Code' : 'Show Code'}
						<i className={`${showCode ? "ri-eye-off-line" : "ri-eye-line "} ms-2 fs-14 align-middle d-inline-block`}></i>
                    </button>
                </div>
            </Card.Header>
            {showCode ? (
                <Card.Footer className={`border-top-0 ${customCardFooterClass}`}>
                    <div className="tabs">
                        <button
                            className={`tab-button text-default ${activeTab === 'nextjs' ? 'active' : ''}`}
                            onClick={() => handleTabChange('nextjs')}
                        >
                            Nextjs
                        </button>
                        {dataCode && (
                            <button
                                className={`tab-button text-default ${activeTab === 'data' ? 'active' : ''}`}
                                onClick={() => handleTabChange('data')}
                            >
                                Data
                            </button>
                        )}
                    </div>
                    <pre className="language-html">
                        <code className="language-html show-code">
                            {activeTab === 'nextjs' ? nextjsCode : dataCode}
                        </code>
                    </pre>
                </Card.Footer>
            ) : (
                <Card.Body className={`${customCardBodyClass}`}>
                    {children}
                </Card.Body>
            )}
        </Card>
    );
};

export default ShowCode;

