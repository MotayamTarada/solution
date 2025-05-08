import React, { useState  } from 'react';
import { useNavigate } from 'react-router-dom';

const AddCardForm = () => {
    const [formData, setFormData] = useState({
        Titel: '',
        Description: '',
        companyName: ''
    });

    const [imageFile, setImageFile] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);
    const navigate = useNavigate(); // <-- ✅ Hook

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setImageFile(e.target.files[0]);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);
        setSuccessMessage(null); // Reset success message on each submission

        if (!imageFile) {
            setError('Please select an image file');
            setIsSubmitting(false);
            return;
        }

        const formDataToSend = new FormData();
        formDataToSend.append('Titel', formData.Titel);
        formDataToSend.append('Description', formData.Description);
        formDataToSend.append('companyName', formData.companyName);
        formDataToSend.append('ImageFile', imageFile);

        try {
            const response = await fetch('http://localhost:5200/api/card/AddCard', {
                method: 'POST',
                body: formDataToSend
            });

            if (response.ok) {
                try {
                    setSuccessMessage('Card added successfully!');
                    setTimeout(() => navigate('/'), 1500); // <-- ✅ Navigate

                } catch (jsonError) {
                    // If response is not JSON, keep default message
                }
                throw new Error();
            }

            const data = await response.json();
            // Successfully added the card, update success state

            // Reset form
            setFormData({
                Titel: '',
                Description: '',
                companyName: ''
            });
            setImageFile(null);
            document.querySelector('input[type="file"]').value = '';
        } catch (error) {
            console.error('Error:', error);
            setError(error.message || 'Failed to add card. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="container mt-4">
            <h2>Add New Card</h2>
            {successMessage && <div className="alert alert-success">{successMessage}</div>}
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="form-group mb-3">
                    <label>Title*</label>
                    <input
                        type="text"
                        name="Titel"
                        className="form-control"
                        value={formData.Titel}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group mb-3">
                    <label>Description*</label>
                    <input
                        type="text"
                        name="Description"
                        className="form-control"
                        value={formData.Description}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group mb-3">
                    <label>Company Name (optional)</label>
                    <input
                        type="text"
                        name="companyName"
                        className="form-control"
                        value={formData.companyName}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group mb-3">
                    <label>Upload Image*</label>
                    <input
                        type="file"
                        accept="image/*"
                        className="form-control"
                        onChange={handleImageChange}
                        required
                    />
                </div>
                <button
                    className="btn btn-primary mt-3"
                    type="submit"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Adding...' : 'Add Card'}
                </button>
            </form>
        </div>
    );
};

export default AddCardForm;
