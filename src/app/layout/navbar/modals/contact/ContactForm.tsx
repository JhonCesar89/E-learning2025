import React from 'react'
import styles from '../../styles/ContactForm.module.css'

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  variant?: "faq" | "navbar";
}

const ContactForm: React.FC<ContactFormProps> = ({ isOpen, onClose, title, description, variant }) => {

    const [formData, setFormData] = React.useState({
      name: "",
      email: "",
      message: "",
    });
  
const [errors, setErrors] = React.useState<{
    name?: string;
    email?: string;
    message?: string;
}>({});
  
const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
};
  
const validateForm = () => {
    const newErrors: typeof errors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
};
  
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;
    console.log("Submitting form:", formData);
    onClose(); // cerrar modal
    setFormData({ name: "", email: "", message: "" }); // limpiar campos
    setErrors({});
};
  
if (!isOpen) return null;

console.log("variant", variant)

  return (
    <div className={styles.modalOverlay}>
        <div className={`${styles.modalContent} ${variant === "navbar" ? styles.navbarVariant : ""}`}>
            <form className={styles.contactForm} onSubmit={handleSubmit}>
                <h2 className={styles.title}>{title}</h2>
                {description && <p className={styles.description}>{description}</p>}

                <label htmlFor="name" className={styles.label}>Nombre</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="Your name"
                    required
                />
                {errors.name && <span className={styles.error}>{errors.name}</span>}

                <label htmlFor="email" className={styles.label}>Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="your@email.com"
                    required
                />
                {errors.email && <span className={styles.error}>{errors.email}</span>}

                <label htmlFor="message" className={styles.label}>Mensaje</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={styles.textarea}
                    placeholder="Your message..."
                    required
                />
                {errors.message && <span className={styles.error}>{errors.message}</span>}

                <div className={styles.buttons}>
                    <button type="submit" className="bg-blue-600  text-white py-2 px-4 rounded hover:bg-blue-800 transition">Enviar</button>
                    <button type="button" className="bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700 transition" onClick={onClose}>Cancelar</button>
                </div>
            </form>
        </div>
    </div>
  );
};

export default ContactForm;