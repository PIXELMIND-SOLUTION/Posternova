import React from "react";

const PrivacyAndPolicy = () => {
    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-lg-10 col-md-11 col-12">
                    <h1 className="mb-4 text-center">Privacy Policy</h1>

                    <div className="mb-4">
                        <h4 className="mb-2">1. Information We Collect</h4>
                        <p><strong>Personal Data You Provide:</strong></p>
                        <ul>
                            <li>Name, Phone, email and  Date of Birth</li>
                            <li>Profile image (optional)</li>
                            <li>Uploaded images, designs, or content</li>
                            <li>Inquiries, or other communications</li>
                        </ul>

                        <p className="mt-3"><strong>Automatically Collected Data:</strong></p>
                        <ul>
                            <li>Device information (OS, model, unique ID)</li>
                            <li>Usage data (pages viewed, features used)</li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <h4 className="mb-2">2. How We Use Your Information</h4>
                        <ul>
                            <li>Provide access to app features and tools</li>
                            <li>Customize and save your poster designs</li>
                            <li>Improve the app and user experience</li>
                            <li>Respond to support or feedback</li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <h4 className="mb-2">3. How We Protect Your Data</h4>
                        <ul>
                            <li>Encryption of sensitive data</li>
                            <li>Secure cloud storage</li>
                            <li>Restricted access to personal information</li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <h4 className="mb-2">4. Sharing Your Data</h4>
                        <p>We do <strong>not sell</strong> your data. We may share it with:</p>
                        <ul>
                            <li>Cloud hosting and storage providers</li>
                            <li>Analytics and crash reporting services</li>
                            <li>Legal authorities (if required by law)</li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <h4 className="mb-2">5. Your Rights and Choices</h4>
                        <ul>
                            <li>Access and review your data</li>
                            <li>Update your Profile Image Anytime</li>
                            <li>Delete your account anytime</li>
                        </ul>
                        <p className="mt-2">
                            To request any of these, email:{" "}
                            <a
                                href="https://mail.google.com/mail/?view=cm&fs=1&to=businessbadavo@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                businessbadavo@gmail.com
                            </a>

                        </p>
                    </div>

                    <div className="mb-4">
                        <h4 className="mb-2">6. Data Retention</h4>
                        <p>
                            We retain your data only as long as necessary to provide services or comply with legal obligations.
                        </p>
                    </div>

                    <div className="mb-4">
                        <h4 className="mb-2">7. Children's Privacy</h4>
                        <p>
                            Our app is not intended for children under 13. We do not knowingly collect data from them.
                        </p>
                    </div>

                    <div className="mb-4">
                        <h4 className="mb-2">8. Changes to This Privacy Policy</h4>
                        <p>
                            We may update this Privacy Policy. Updates will be posted in-app or via email. Continued use means acceptance of the updated policy.
                        </p>
                    </div>

                    <div className="mb-4">
                        <h4 className="mb-2">9. Contact Us</h4>
                        <p>
                            If you have questions, contact us at:{" "}
                            <a
                                href="https://mail.google.com/mail/?view=cm&fs=1&to=businessbadavo@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                businessbadavo@gmail.com
                            </a>

                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyAndPolicy;
