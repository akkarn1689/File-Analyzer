# Content Analyzer

A modern web application for extracting and analyzing structured information from PDF documents and images using Google's Gemini-1.5-Flash API.

## 🔗 Important Links
- Backend Repository: [File-Analyzer-Backend](https://github.com/akkarn1689/File-Analyzer-Backend)
- Live Link: [Live Link](https://file-analyzer-6pnj.onrender.com/)

## Features

### 📑 Document Upload
- Intuitive drag-and-drop interface for file uploads
- Support for both PDF documents and image files
- Simple file picker alternative for traditional uploads

### 🔍 Text Extraction
- Powered by Google's **Gemini-1.5-Flash API**
- Automatic conversion of uploaded files to Base64 format
- Structured JSON output with comprehensive information extraction
- Intelligent parsing of documents for relevant data points

### 💻 User Experience
- Real-time loading states and progress indicators
- Graceful error handling for unsupported files
- Clear feedback for API processing status
- Responsive design for all device sizes

### 🛠️ Technical Stack

#### Backend ([Repository](https://github.com/akkarn1689/File-Analyzer-Backend))
- Node.js
- Express.js
- Gemini-1.5-Flash API integration
- Base64 file processing

#### Frontend
- React.js
- Material-UI components
- Responsive design principles
- Modern ES6+ JavaScript

## Installation

```bash
# Clone both repositories
git clone https://github.com/akkarn1689/File-Analyzer.git
git clone https://github.com/akkarn1689/File-Analyzer-Backend.git

# Setup Frontend
cd content-analyzer
npm install
npm run dev

# Setup Backend
cd ../File-Analyzer-Backend
npm install
npm start
```

## Usage

1. Start the backend server:
   ```bash
   cd File-Analyzer-Backend
   npm start
   ```

2. Start the frontend application:
   ```bash
   cd File-Analyzer
   npm run dev
   ```

3. Navigate to `http://localhost:5173` in your web browser
4. Upload a document using drag-and-drop or file picker
5. Wait for the extraction process to complete
6. View the structured data output in JSON format

## API Configuration

To use the Gemini API, you'll need to:

1. Obtain an API key from Google Cloud Console
2. Create a `.env` file in the backend directory
3. Add your API key:
   ```
   GOOGLE_AI_API_KEY=your_api_key_here
   ```

Project Links:
- Frontend: [https://github.com/akkarn1689/File-Analyzer](https://github.com/akkarn1689/File-Analyzer)
- Backend: [https://github.com/akkarn1689/File-Analyzer-Backend](https://github.com/akkarn1689/File-Analyzer-Backend)
