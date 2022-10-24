import app  from "./app";
import './database'

const PORT = process.env.PORT || app.get('port')

app.listen(PORT)
console.log(`Server running on port ${PORT}`);
