export default async function POST(req, res) {
  if (req.method === "POST") {
    try {
      const body = await req.json();
      const { email, password } = body;
      if (email === "ptsinan8590@gmail.com" && password === "Fingers@8590") {
        res.status(200).json({ message: "Login successful" });
      } else {
        res.status(200).json({ message: "Invalid credentials" });
      }
    } catch (error) {
      console.error("Error parsing request body:", error);
      res.status(200).json({ message: "Invalid request body" });
    }
  } else {
    res.status(200).json(`Method ${req.method} Not Allowed`);
  }
}
