
import React, { useRef, useState } from "react";
import JoditEditor from "jodit-react";
import { CreateDestination } from "../../../../common/api/ApiService";
// import "jodit/build/jodit.min.css";
import { useNavigate } from 'react-router-dom';

const DestinationCreation = () => {
    const navigate = useNavigate();

    const [createDestination, setCreateDestination] = useState({});

    const [faqs, setFaqs] = useState([{ question: "", answer: "" }]);

    const addFaq = () => {
        setFaqs([...faqs, { question: "", answer: "" }]);
    };

    const deleteFaq = (indexToRemove) => {
        if (indexToRemove !== 0) {
            const updatedFaqs = faqs.filter((_, index) => index !== indexToRemove);
            setFaqs(updatedFaqs);
        }
    };

    const updateFaq = (index, key, value) => {
        const updatedFaqs = [...faqs];
        updatedFaqs[index][key] = value;
        setFaqs(updatedFaqs);
    };

    const handleChange = (key, value) => {
        setCreateDestination({ ...createDestination, [key]: value })
    }

    const handleSubmit = async () => {
        createDestination.destination_faqs = faqs
        const response = await CreateDestination(createDestination)
        if (response?.status === 200) {
            navigate(-1)
            setCreateDestination({})
            setFaqs([{ question: "", answer: "" }])
        }
    }
    const editor = useRef(null);
    const editor2 = useRef(null);

    return (
        <div className='admin-content-main'>

            <div className='d-flex justify-content-between mb-5'>
                <h3 className='my-auto'>Create Destination</h3>
                <button className='admin-add-button mt-0' onClick={() => navigate(-1)}>Back</button>
            </div>

            <div className='row'>
                <div className='col-lg-4'>
                    <div className='admin-input-div'>
                        <label>Destination Name</label>
                        <input type="text" value={createDestination?.destination_name}
                            onChange={(e) => handleChange("destination_name", e.target.value)} />
                    </div>
                </div>
                <div className='col-lg-4'>
                    <div className='admin-input-div'>
                        <label>Offer Description</label>
                        <input type="text" value={createDestination?.offer_description}
                            onChange={(e) => handleChange("offer_description", e.target.value)} />
                    </div>
                </div>
                <div className='col-lg-4'>
                    <div className='admin-input-div'>
                        <label>Starting Price</label>
                        <input type="text" value={createDestination?.starting_price}
                            onChange={(e) => handleChange("starting_price", e.target.value)} />
                    </div>
                </div>
            </div>

            <div className='admin-input-div mt-5'>
                <label>About Tour Packages</label>

                <div className="mt-3">
                    <JoditEditor
                        ref={editor}
                        value={createDestination?.about_destination}
                        config={{
                            readonly: false,
                            height: 300,
                            toolbarButtonSize: "middle"
                        }}
                        tabIndex={1}
                        onBlur={(newContent) => handleChange("about_destination", newContent)}
                    />
                    <div className="mt-3">
                        {/* <h5>Output:</h5>
                        <div dangerouslySetInnerHTML={{ __html: content }} /> */}
                    </div>
                </div>
            </div>

            <div className='admin-input-div'>
                <label>Frequently Asked Questions</label>
            </div>


            <div className="mt-3 destination-faq">
                <div className="accordion" id="accordionExample">
                    {faqs.map((faq, index) => (
                        <div className='mt-4'>
                            <div className="accordion-item" key={index} >
                                <h2 className="accordion-header d-flex align-items-center justify-content-between">
                                    <button
                                        className="accordion-button flex-grow-1"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target={`#collapse${index}`}
                                        aria-expanded="true"
                                        aria-controls={`collapse${index}`}
                                    >
                                        FAQ {index + 1}
                                    </button>
                                    <div className="ms-3 d-flex gap-2">
                                        <button className="destination-faq-add" onClick={addFaq}>
                                            Add
                                        </button>
                                        <button
                                            className="destination-faq-add faq-delete me-4"
                                            onClick={() => deleteFaq(index)}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </h2>

                                <div
                                    id={`collapse${index}`}
                                    className="accordion-collapse collapse show"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">
                                        <div className="admin-input-div mb-3">
                                            <label>Faq Question</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={faq.question}
                                                onChange={(e) =>
                                                    updateFaq(index, "question", e.target.value)
                                                }
                                            />
                                        </div>

                                        <div className="admin-input-div admin-desti-faq">
                                            <label>Faq Answer</label>
                                            <textarea
                                                className="form-control"
                                                value={faq.answer}
                                                onChange={(e) =>
                                                    updateFaq(index, "answer", e.target.value)
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='admin-input-div mt-5'>
                <label>Travel Guidelines</label>

                <div className="mt-3">
                    <JoditEditor
                        ref={editor2}
                        value={createDestination?.guidance}
                        config={{
                            readonly: false,
                            height: 300,
                            toolbarButtonSize: "middle"
                        }}
                        tabIndex={1}
                        onBlur={(newContent) => handleChange("guidance", newContent)}
                    />
                </div>
            </div>

            <button className="create-common-btn" onClick={handleSubmit}>Create</button>

        </div>
    )
}

export default DestinationCreation
