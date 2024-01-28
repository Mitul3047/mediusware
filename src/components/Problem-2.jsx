import React, { useState } from 'react';

const ContactModal = ({ title, color, contacts, onClose, onShowDetails, onSwitchModal, onSearch, onlyEvenChecked }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        onSearch(query);
    };

    return (
        <div className="modal fade show" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
            <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{title}</h5>
                        <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
                    </div>
                    <div className="modal-body">
                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search contacts..."
                                value={searchQuery}
                                onChange={handleSearch}
                            />
                        </div>
                        {/* <ul className="list-group">
                           
                            {contacts.map((contact) => (
                                <li
                                    key={contact.id}
                                    className="list-group-item"
                                    onClick={() => onShowDetails(contact)}
                                >
                                    {contact.name}
                                </li>
                            ))}
                        </ul> */}
                    </div>
                    <div className="modal-footer">
                        <div className="form-check form-switch ms-auto">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="onlyEvenCheckbox"
                                checked={onlyEvenChecked}
                                onChange={() => {}}
                            />
                            <label className="form-check-label" htmlFor="onlyEvenCheckbox">
                                Only even
                            </label>
                        </div>
                        <button type="button" className={`btn btn-secondary`} onClick={onSwitchModal}>
                            Switch to {title === 'All Contacts' ? 'US Contacts' : 'All Contacts'}
                        </button>
                        <button type="button" className={`btn btn-${color}`} onClick={onClose}>
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Problem2 = () => {
    const [modalA, setModalA] = useState(true);
    const [modalB, setModalB] = useState(false);
    const [modalC, setModalC] = useState(false);
    const [onlyEvenChecked, setOnlyEvenChecked] = useState(false);

    const closeModal = () => {
        setModalA(false);
        setModalB(false);
        setModalC(false);
    };

    const switchModal = () => {
        setModalA(!modalA);
        setModalB(!modalB);
    };

    const showDetails = (contact) => {
        // Implement logic to show details in Modal C
        console.log('Show details for contact:', contact);
        setModalC(true);
    };

    const searchContacts = (query) => {
        // Implement logic to filter contacts based on the search query
        console.log('Search query:', query);
    };

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>

                <div className="d-flex justify-content-center gap-3">
                    <button className="btn btn-lg btn-outline-primary" type="button" onClick={() => setModalA(true)}>
                        All Contacts
                    </button>
                    <button className="btn btn-lg btn-outline-warning" type="button" onClick={() => setModalB(true)}>
                        US Contacts
                    </button>
                </div>

                {modalA && (
                    <ContactModal
                        title="All Contacts"
                        color="primary"
                        // contacts={/* Fetch contacts for All Contacts */}
                        onClose={closeModal}
                        onSwitchModal={switchModal}
                        onShowDetails={showDetails}
                        onSearch={searchContacts}
                        onlyEvenChecked={onlyEvenChecked}
                    />
                )}

                {modalB && (
                    <ContactModal
                        title="US Contacts"
                        color="warning"
                        // contacts={/* Fetch contacts for US Contacts */}
                        onClose={closeModal}
                        onSwitchModal={switchModal}
                        onShowDetails={showDetails}
                        onSearch={searchContacts}
                        onlyEvenChecked={onlyEvenChecked}
                    />
                )}

                {modalC && (
                    /* Implement Modal C for contact details */
                    <div className="modal fade show" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
                        <div className="modal-dialog" role="document">
                            {/* Modal C content goes here */}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Problem2;
