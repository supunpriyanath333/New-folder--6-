export default function Contact() {
    return (
      <div>
        <h1>Contact Us</h1>
        <p>If you have any questions or inquiries about Sri Lankan plantations, feel free to reach out!</p>
        <h4><form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <label>
            Email:
            <input type="email" name="email" />
          </label>
          <label>
            Text:
            <input type="text" ame="message"/>
          </label>
          <center><button type="submit">Send Message</button></center>
        </form>
        </h4>

      <h2>Get in Touch</h2>
      <p>
        <strong>Phone:</strong> +94 123 456 789
      </p>
      <p>
        <strong>Email:</strong> info@srilankaplantations.com
      </p>
      <p>
        <strong>Address:</strong> 123 Plantation Lane, Colombo, Sri Lanka
      </p>

      <h2>Follow Us</h2>
      <p>
        Stay connected with us on social media for the latest updates and news about Sri Lankan plantations!
      </p>
      <ul>
        <li><a href="https://facebook.com">Facebook</a></li>
        <li><a href="https://twitter.com">Twitter</a></li>
        <li><a href="https://instagram.com">Instagram</a></li>
      </ul>
      </div>
    );
  }
  