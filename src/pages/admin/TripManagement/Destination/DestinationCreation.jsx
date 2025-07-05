
import React, { useRef, useState } from "react";
import JoditEditor from "jodit-react";
// import "jodit/build/jodit.min.css";

const DestinationCreation = () => {
    const [faqs, setFaqs] = useState([{ question: "", answer: "" }]);

    console.log(faqs, "faqs")

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
    const editor = useRef(null);
    const [content, setContent] = useState("");
    const editor2 = useRef(null);
    const [content2, setContent2] = useState("");
    return (
        <div className='admin-parent-div'>
            <h3>Create Destination</h3>
            <div className='row'>
                <div className='col-lg-4'>
                    <div className='admin-input-div'>
                        <label>Destination Name</label>
                        <input type="text" />
                    </div>
                </div>
                <div className='col-lg-4'>
                    <div className='admin-input-div'>
                        <label>Offer Description</label>
                        <input type="text" />
                    </div>
                </div>
                <div className='col-lg-4'>
                    <div className='admin-input-div'>
                        <label>Starting Price</label>
                        <input type="text" />
                    </div>
                </div>
            </div>

            <div className='admin-input-div mt-5'>
                <label>About Tour Packages</label>

                <div className="mt-3">
                    <JoditEditor
                        ref={editor}
                        value={content}
                        config={{
                            readonly: false,
                            height: 300,
                            toolbarButtonSize: "middle"
                        }}
                        tabIndex={1}
                        onBlur={(newContent) => setContent(newContent)}
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
                        value={content2}
                        config={{
                            readonly: false,
                            height: 300,
                            toolbarButtonSize: "middle"
                        }}
                        tabIndex={1}
                        onBlur={(newContent) => setContent2(newContent)}
                    />
                </div>
            </div>

        </div>
    )
}

export default DestinationCreation
