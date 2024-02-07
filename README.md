# Capstone Project for WD 201 - Learning Management System (LMS)
![the landing page](https://github.com/anonymousknight07/LMS/assets/95563805/2a83444f-4002-4d94-9891-c8edcc7db024)
This is my capstone project for WD 201, a comprehensive Learning Management System (LMS) that caters to both students and teachers. The project is built using Typescript, NextJS, PostGresSQL, Prisma, MUX, Stripe, Tailwind, and Clerk for authentication.

## Key Features

1. **Browse & Filter Courses:** Easily navigate through courses and filter them based on your preferences.
2. **Purchase Courses using Stripe:** Seamlessly make secure transactions for course purchases.
3. **Mark Chapters as Completed or Uncompleted:** Keep track of your progress by marking completed chapters.
4. **Progress Calculation of each Course:** Get insights into your overall progress for each enrolled course.
5. **Student Dashboard:** A personalized dashboard for students to manage their courses and track progress.
6. **Teacher Mode:** An exclusive mode for educators to manage courses, create chapters, and more.
7. **Create New Courses:** Teachers can create new courses and share knowledge with their students.
8. **Create New Chapters:** Easily add new chapters to existing courses.
9. **Reorder Chapters with Drag n’ Drop:** Intuitive chapter reordering for better organization.
10. **Upload Thumbnails, Attachments, and Videos:** Utilize UploadThing for seamless multimedia uploads.
11. **Video Processing using Mux:** Efficient video processing for high-quality content.
12. **HLS Video Player using Mux:** Enjoy a smooth video playback experience with Mux.
13. **Rich Text Editor for Chapter Descriptions:** Create engaging chapter descriptions using a rich text editor.
14. **Authentication using Clerk:** Secure user authentication with Clerk.
15. **ORM using Prisma:** An Object-Relational Mapping (ORM) solution for database interactions.

![studentmode](https://github.com/anonymousknight07/LMS/assets/95563805/c0b4a136-dfed-4e50-b618-18bd8c2e1871)

## Things to include in .env file

```env

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY= 

CLERK_SECRET_KEY= 

NEXT_PUBLIC_CLERK_SIGN_IN_URL= 

NEXT_PUBLIC_CLERK_SIGN_UP_URL=

NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL= 

NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=  

DATABASE_URL=  

UPLOADTHING_SECRET=

UPLOADTHING_APP_ID= 

MUX_TOKEN_ID= 

MUX_TOKEN_SECRET=  

STRIPE_API_KEY= 

NEXT_PUBLIC_APP_URL=http://localhost:3000 

STRIPE_WEBHOOK_SECRET=  

NEXT_PUBLIC_TEACHER_ID=

```

## How to Clone the Repository

1. **Clone the repository to your local machine.**

    ```bash
    git clone https://github.com/your-username/LMS.git
    
    ```
    
2. **Install the dependencies**
   ```bash
      npm i
   ```
   
3. **Include all the necessary details in the .env file.**
    
    - Fill in the provided template with the required credentials.
    
3. **Access Admin/Educator Mode**
    
    - Go to your Clerk dashboard, where you will find your user ID.
    - Place the ID after `NEXT_PUBLIC_TEACHER_ID` in the .env file.
    - For example, once you paste the ID, the .env file should look like `NEXT_PUBLIC_TEACHER_ID=yourclerkuserid`.

**Note:** The administrator/educator mode is secure to ensure proper access. Follow the steps above to access the educator mode.

## The Admin/Educator mode 
![educator](https://github.com/anonymousknight07/LMS/assets/95563805/e1f3d5d8-2d9f-405e-af97-5d76bb097669)

![educator2](https://github.com/anonymousknight07/LMS/assets/95563805/c94447e3-f26c-4ff0-a720-b64b65e84be6)



## The structure of the app
 ![image](https://github.com/anonymousknight07/LMS/assets/95563805/87e17962-8c2a-4e15-a57a-9b61571355d3)

## Community Involvement

This project is open to community contributions. If you have additional features to propose or find any issues, feel free to contribute and make this learning platform even better for everyone.

Happy learning! 🚀
