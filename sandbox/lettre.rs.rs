use lettre::transport::smtp::authentication::Credentials;
use lettre::{Message, SmtpTransport, Transport};

fn main() {
    let email = Message::builder()
        .from("Nitride <opeolluwa@nitride.tld>".parse().unwrap())
        .reply_to("Yuin <opeolluwa@gmail.com>".parse().unwrap())
        .to("Hei <adefemiadeoye@yahoo.com>".parse().unwrap())
        .subject("Happy new year")
        .body(String::from("Be happy!"))
        .unwrap();

    let creds = Credentials::new("".to_string(), "".to_string());

    // Open a remote connection to gmail
    let mailer = SmtpTransport::relay("smtp.gmail.com")
        .unwrap()
        .credentials(creds)
        .build();

    // Send the email
    match mailer.send(&email) {
        Ok(_) => println!("Email sent successfully!"),
        Err(e) => panic!("Could not send email: {:?}", e),
    }
}
