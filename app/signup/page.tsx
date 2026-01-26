export default function SignupPage()
{
    return (
        <main className = "signup-page">
            {/*This section holds the page header and a short description*/}
            <section className = "signup-header">
                <h1>Email Signup</h1>
                <p>
                    Join the waitlist to get updates and early access info.
                </p>
            </section>

            {/*This section holds the email / waitlist form*/}
            <section className = "signup-form-section">
                <form className = "signup-form">
                    <label htmlFor = "email">
                        Email
                    </label>

                    <input
                        id = "email"
                        name = "email"
                        type = "email"
                        placeholder = "you@example.com"
                        autoComplete = "email"
                        required
                    />

                    <button type = "submit">
                        Sign up
                    </button>

                    <p className = "signup-helper-text">
                        We’ll only use your email for Runway-Ave updates.
                    </p>
                </form>
            </section>

            {/*This section holds a brief explanation of benefits for signing up*/}
            <section className = "signup-benefits">
                <h2>Why sign up?</h2>

                <ul>
                    <li>Get launch updates and feature announcements</li>
                    <li>Be first to know when the next version is available</li>
                    <li>Receive early-access opportunities (when offered)</li>
                </ul>
            </section>
        </main>
    );
}
