import PageBanner from "@/components/PageBanner";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for reaching out! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="vm_main_wrapper" id="contact_wrapper">
      <PageBanner title="Contact" />

      <section className="main_content py-10 md:py-14">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold font-saira mb-8">Get in Touch</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="font-bold text-lg mb-2">Alphamovil Digital Solutions LLP</h3>
                  <p className="text-foreground flex items-start gap-3">
                    <i className="fas fa-map-marker-alt text-vm-pink mt-1 flex-shrink-0"></i>
                    <span>Sector 54, Gurgaon, Haryana, 122011</span>
                  </p>
                </div>

                <div>
                  <p className="text-foreground font-semibold mb-4">Have an enquiry? Get in Touch!</p>
                  <div className="space-y-3">
                    <p className="text-foreground flex items-center gap-3">
                      <i className="fas fa-phone text-vm-pink flex-shrink-0"></i>
                      <a href="tel:+919667687077" className="hover:text-vm-pink transition-colors">
                        +91 9667687077
                      </a>
                    </p>
                    <p className="text-foreground flex items-center gap-3">
                      <i className="fas fa-envelope text-vm-pink flex-shrink-0"></i>
                      <a href="mailto:bd@alphamovil.com" className="hover:text-vm-pink transition-colors">
                        bd@alphamovil.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <a 
                    href="https://www.facebook.com/Alphamovil/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-vm-pink hover:text-vm-darkblue transition-colors text-2xl"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a 
                    href="https://www.linkedin.com/company/Alphamovil/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-vm-pink hover:text-vm-darkblue transition-colors text-2xl"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a 
                    href="https://www.youtube.com/channel/UCO2yU6IY73Qd_1dBDuHz-Pg/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-vm-pink hover:text-vm-darkblue transition-colors text-2xl"
                  >
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 p-6 md:p-8 rounded-lg">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-foreground">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-vm-pink"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-foreground">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-vm-pink"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-foreground">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-vm-pink"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-foreground">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-vm-pink"
                  ></textarea>
                </div>

                <button type="submit" className="btn-vm-pink w-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
