const firebaseConfig = {
    apiKey: "AIzaSyCiGr_X_0bB7-238gd25TyIHheiCPWLw88",
  authDomain: "accelerp-2c3ce.firebaseapp.com",
  databaseURL: "https://accelerp-2c3ce-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "accelerp-2c3ce",
  storageBucket: "accelerp-2c3ce.appspot.com",
  messagingSenderId: "829162797306",
  appId: "1:829162797306:web:336caf5e5e70d8c7e87143",
  measurementId: "G-4R2XWGTR2B"
};
  

  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth(); 
  const database = firebase.database(); 
  var database_ref = database.ref(); 
  const storage = firebase.storage();


  function fillprofile(){
    //Profile Information
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            var uid = user.uid;
            firebase.database().ref('user/'+uid).once('value').then(function(snapshot){
            let name=snapshot.val().name;
            console.log(name)
            let role=snapshot.val().role;
            let reg=snapshot.val().regno;
            let dob=snapshot.val().dob;
            let gender=snapshot.val().gender;
            let address=snapshot.val().address;
            let state=snapshot.val().state;
            let religion=snapshot.val().religion;
            let caste=snapshot.val().caste;
            let nationality=snapshot.val().nationality;
            let bloodgroup=snapshot.val().bloodgroup;
            let aadhar=snapshot.val().aadhar;
            let phone=snapshot.val().phone;
            let college=snapshot.val().college;
            let degree=snapshot.val().degree;
            let branch=snapshot.val().branch;
            let father=snapshot.val().father;
            let mother=snapshot.val().mother;
            let email=user.email;
            name = document.getElementById("fullname").value=name;
            email = document.getElementById("email").value=email;
            reg=document.getElementById("regno").value=reg;
            dob=document.getElementById("dob").value=dob;
            gender=document.getElementById("gender").value=gender;
            address=document.getElementById("address").value=address;
            state=document.getElementById("state").value=state;
            religion=document.getElementById("religion").value=religion;
            caste=document.getElementById("caste").value=caste;
            nationality=document.getElementById("nationality").value=nationality;
            bloodgroup=document.getElementById("bloodgroup").value=bloodgroup;
            aadhar=document.getElementById("adhar").value=aadhar;
            phone=document.getElementById("phone").value=phone;
            college=document.getElementById("college").value=college;
            degree=document.getElementById("degree").value=degree+'/'+branch;
            father=document.getElementById("father").value=father;
            mother=document.getElementById("mother").value=mother;
            let designation = document.getElementById("desig");
            if (role === "student")
            {
                designation.value = "Student";
            }
            else{
                designation.value = "Faculty";
            }
    })
        }})
    }

//STUDENT LOGIN
  function stulogin(){
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value

    auth.signInWithEmailAndPassword(username, password).then(()=>{
        var user=auth.currentUser;
        var uid=user.uid;

        firebase.database().ref('user/'+uid).once('value').then(function(snapshot){
            var name=snapshot.val().name;
            var role=snapshot.val().role;
            //var mobile=snapshot.val().mobile;

            if(role=="student"){
                window.location.href="/Info_IT/html/student/student-info/student.html"
                
            }
            else{
                alert("You are not a student");
            }
        })
    


       
    })
    .catch((error)=>{
        alert("Login failed!")
    })

}

//FACULTY LOGIN
function faclogin(){
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value

    auth.signInWithEmailAndPassword(username, password).then(()=>{
        var user=auth.currentUser;
        var uid=user.uid;

        firebase.database().ref('user/'+uid).once('value').then(function(snapshot){
            var name=snapshot.val().name;
            var role=snapshot.val().role;
            //var mobile=snapshot.val().mobile;

            if(role=="faculty"){
                window.location.href="/Info_IT/html/faculty/faculty-info/faculty.html"
            }
            else{
                alert("You are not a faculty");
            }
        })
    
    .catch((error)=>{
        alert("Login failed!")
    })

})
}

//ADMIN LOGIN
function adlogin(){
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value

    auth.signInWithEmailAndPassword(username, password).then(()=>{
        var user=auth.currentUser;
        var uid=user.uid;

        firebase.database().ref('user/'+uid).once('value').then(function(snapshot){
            var name=snapshot.val().name;
            var role=snapshot.val().role;
            //var mobile=snapshot.val().mobile;

            if(role=="admin"){
                window.location.href="/Info_IT/html/admin/admin-info/admin-info.html"
            }
            else{
                alert("You are not an Admin");
            }
        })
    
    .catch((error)=>{
        alert("Login failed!")
    })

})
}
//Forget Password
function forget(){
    var email=document.getElementById("email").value;
    auth.sendPasswordResetEmail(email).then(()=>{
        alert("Password Reset Mail is Sent Successfully..! Check Your Email Including Spam Folder Also ")
    }).catch(function(error) {
        alert("error")
        console.error("Error sending password reset email:", error);
      });
}

//random id

const usedIds = new Set();

function generateUniqueRandomId(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let randomId = '';

  do {
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomId += characters.charAt(randomIndex);
    }
  } while (usedIds.has(randomId));

  usedIds.add(randomId);
  return randomId;
}


  


//INTERN SUBMIT

function submitintern(){
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
      
            // User is signed in
            console.log("User Signed In");
            var uid = user.uid;
    var event = document.getElementById("exampleEvent").value;
    var org = document.getElementById("exampleOrg").value;
    var duration = document.getElementById("exampleDuration").value;
    var date1 = document.getElementById("exampleDate").value;
    // console.log(date)
    let startdate=  date1.replace(/-/g, "");
    var enddate = document.getElementById("exampleDate2").value;
    var domain = document.getElementById("exampleDomain").value;
    var mode = document.getElementById("exampleMode").value;
    var certificate = document.getElementById("exampleFormControlFile1")
    var report = document.getElementById("exampleFormControlFile2").value;
    const randomId = generateUniqueRandomId(10);


    if(event=="" || org=="" || date1=="" || domain=="" || duration=="" || enddate=="" || mode=="")
    {
        document.getElementById("error").innerHTML="Fill all the details"
        document.getElementById("error").style.color="red"

    }
    else{
        const file = certificate.files[0];

        // Validate file type and size...
        // (same validation code as before)

        // Firebase Storage configuration
        const storage = firebase.storage();
        const storageRef = storage.ref();
        const filename = "stuintern/" + file.name;
        const progressBar = document.getElementById("progress-bar")
        // random id

        
        // Upload the file to Firebase Storage
        const uploadTask = storageRef.child(filename).put(file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                // You can track the upload progress here if needed
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                progressBar.style.width = `${progress}%`;
            },
            (error) => {
                console.error("Error uploading file:", error);
                alert("Error uploading file.");
            },
            async () => {
                // File uploaded successfully

                // Get the download URL of the uploaded image
                const downloadURL = await uploadTask.snapshot.ref.getDownloadURL();

                // Save the download URL to Firebase Realtime Database
                const newUserRef = database.ref("stucertify/"+uid+"/"+event+"/"+startdate+"/")
                newUserRef.set({
                  event: event,
                  organization: org,
                  duration:duration,
                  date: date1,
                  enddate:enddate,
                  domain: domain,
                  mode:mode,
                  certificate:downloadURL,
                  report:report,
                  id:randomId
                
                })
                alert("File uploaded successfully and URL saved to database!");
                window.location.href="/Info_IT/html/student/student-info/student.html"
            }
        );
        }

}
    })
}
//WORKSHOP    

function submitworkshop(){

    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
      
            // User is signed in
            console.log("User Signed In");
            var uid = user.uid;

    var event = document.getElementById("exampleEvent").value;
    var org = document.getElementById("exampleOrg").value;
    var topic = document.getElementById("exampleTopic").value;
    var duration = document.getElementById("exampleDuration").value;
    var date1 = document.getElementById("exampleDate").value;
    // console.log(date)
    let startdate=  date1.replace(/-/g, "");
    var enddate = document.getElementById("exampleDate2").value;
   
    var mode = document.getElementById("exampleMode").value;
    var certificate = document.getElementById("exampleFormControlFile1")


    if(event=="" || org=="" || date1=="" || topic=="" || duration=="" || enddate=="" || mode=="")
    {
        document.getElementById("error").innerHTML="Fill all the details"
        document.getElementById("error").style.color="red"

    }
    else{
        const file = certificate.files[0];

        // Validate file type and size...
        // (same validation code as before)

        // Firebase Storage configuration
        const storage = firebase.storage();
        const storageRef = storage.ref();
        const filename = "stuworkshop/" + file.name;
        const progressBar = document.getElementById("progress-bar")

        // Upload the file to Firebase Storage
        const uploadTask = storageRef.child(filename).put(file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                // You can track the upload progress here if needed
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                progressBar.style.width = `${progress}%`;
            },
            (error) => {
                console.error("Error uploading file:", error);
                alert("Error uploading file.");
            },
            async () => {
                // File uploaded successfully

                // Get the download URL of the uploaded image
                const downloadURL = await uploadTask.snapshot.ref.getDownloadURL();

                // Save the download URL to Firebase Realtime Database
                const newUserRef = database.ref("stucertify/"+uid+"/"+event+"/"+startdate+"/")
                newUserRef.set({
                  event: event,
                  organization: org,
                  duration:duration,
                  startdate: startdate,
                  enddate:enddate,
                  topic: topic,
                  mode:mode,
                  certificate:downloadURL,
                
                })
                alert("File uploaded successfully and URL saved to database!");
                window.location.href="/Info_IT/html/student/student-info/student.html"
            }
        );
        }

}
    })
}

//Extra Courses
function submitextracourses(){
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
      
            // User is signed in
            console.log("User Signed In");
            var uid = user.uid;

    var event = document.getElementById("exampleEvent").value;
    var org = document.getElementById("exampleOrg").value;
    var coursename = document.getElementById("exampleCN").value;
    var duration = document.getElementById("exampleDuration").value;
    var date1 = document.getElementById("exampleDate").value;
    // console.log(date)
    let certificatedate=  date1.replace(/-/g, "");
   
    var mode = document.getElementById("exampleMode").value;
    var certificate = document.getElementById("exampleFormControlFile1")


    if(event=="" || org=="" || date1=="" || coursename=="" || duration=="" ||  mode=="")
    {
        document.getElementById("error").innerHTML="Fill all the details"
        document.getElementById("error").style.color="red"

    }
    else{
        const file = certificate.files[0];

        // Validate file type and size...
        // (same validation code as before)

        // Firebase Storage configuration
        const storage = firebase.storage();
        const storageRef = storage.ref();
        const filename = "stucourses/" + file.name;
        const progressBar = document.getElementById("progress-bar")

        // Upload the file to Firebase Storage
        const uploadTask = storageRef.child(filename).put(file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                // You can track the upload progress here if needed
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                progressBar.style.width = `${progress}%`;
            },
            (error) => {
                console.error("Error uploading file:", error);
                alert("Error uploading file.");
            },
            async () => {
                // File uploaded successfully

                // Get the download URL of the uploaded image
                const downloadURL = await uploadTask.snapshot.ref.getDownloadURL();

                // Save the download URL to Firebase Realtime Database
                const newUserRef = database.ref("stucertify/"+uid+"/"+event+"/"+certificatedate+"/")
                newUserRef.set({
                  event: event,
                  organization: org,
                  coursename:coursename,
                  duration:duration,
                  date: date1,
                  mode:mode,
                  certificate:downloadURL,
                
                })
                alert("File uploaded successfully and URL saved to database!");
                window.location.href="/Info_IT/html/student/student-info/student.html"
            }
        );
        }

}
    })
}

//PPT

function submitppt(){
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
      
            // User is signed in
            console.log("User Signed In");
            var uid = user.uid;

    var event = document.getElementById("exampleEvent").value;
    var org = document.getElementById("exampleOrg").value;
    var topic = document.getElementById("exampleTopic").value;
    var date1 = document.getElementById("exampleDate").value;
    // console.log(date)
    let certificatedate=  date1.replace(/-/g, "");
   
    var mode = document.getElementById("exampleMode").value;
    var certificate = document.getElementById("exampleFormControlFile1")


    if(event=="" || org=="" || date1=="" || topic=="" || mode=="")
    {
        document.getElementById("error").innerHTML="Fill all the details"
        document.getElementById("error").style.color="red"

    }
    else{
        const file = certificate.files[0];

        // Validate file type and size...
        // (same validation code as before)

        // Firebase Storage configuration
        const storage = firebase.storage();
        const storageRef = storage.ref();
        const filename = "stuppt/" + file.name;
        const progressBar = document.getElementById("progress-bar")

        // Upload the file to Firebase Storage
        const uploadTask = storageRef.child(filename).put(file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                // You can track the upload progress here if needed
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                progressBar.style.width = `${progress}%`;
            },
            (error) => {
                console.error("Error uploading file:", error);
                alert("Error uploading file.");
            },
            async () => {
                // File uploaded successfully

                // Get the download URL of the uploaded image
                const downloadURL = await uploadTask.snapshot.ref.getDownloadURL();

                // Save the download URL to Firebase Realtime Database
                const newUserRef = database.ref("stucertify/"+uid+"/"+event+"/"+certificatedate+"/")
                newUserRef.set({
                  event: event,
                  organization: org,
                  topic:topic,
                  date:date1,
                  mode:mode,
                  certificate:downloadURL,
                
                })
                alert("File uploaded successfully and URL saved to database!");
                window.location.href="/Info_IT/html/student/student-info/student.html"
            }
        );
        }

}
    })
}

//Project

function submitproject(){
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
      
            // User is signed in
            console.log("User Signed In");
            var uid = user.uid;

    var event = document.getElementById("exampleEvent").value;
    var title = document.getElementById("exampleTitle").value;
    var duration = document.getElementById("exampleDuration").value;
    var status = document.getElementById("exampleMode").value;
    var link = document.getElementById("basicurl").value;
    var date1 = document.getElementById("exampleDate").value;
    // console.log(date)
    let certificatedate=  date1.replace(/-/g, "");
    var certificate = document.getElementById("exampleFormControlFile1")


    if(event=="" || title=="" || date1=="" || duration=="" || status=="")
    {
        document.getElementById("error").innerHTML="Fill all the details"
        document.getElementById("error").style.color="red"

    }
    else{
        const file = certificate.files[0];

        // Validate file type and size...
        // (same validation code as before)

        // Firebase Storage configuration
        const storage = firebase.storage();
        const storageRef = storage.ref();
        const filename = "stuproject/" + file.name;
        const progressBar = document.getElementById("progress-bar")

        // Upload the file to Firebase Storage
        const uploadTask = storageRef.child(filename).put(file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                // You can track the upload progress here if needed
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                progressBar.style.width = `${progress}%`;
            },
            (error) => {
                console.error("Error uploading file:", error);
                alert("Error uploading file.");
            },
            async () => {
                // File uploaded successfully

                // Get the download URL of the uploaded image
                const downloadURL = await uploadTask.snapshot.ref.getDownloadURL();

                // Save the download URL to Firebase Realtime Database
                const newUserRef = database.ref("stucertify/"+uid+"/"+event+"/"+certificatedate+"/")
                newUserRef.set({
                  event: event,
                  title: title,
                  duration:duration,
                  status:status,
                  link:link,
                  date:date1,
                  certificate:downloadURL,
                
                })
                alert("File uploaded successfully and URL saved to database!");
                window.location.href="/Info_IT/html/student/student-info/student.html"
            }
        );
        }

}
    })
}

//Other 

function submitother(){
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
      
            // User is signed in
            console.log("User Signed In");
            var uid = user.uid;

    var event = document.getElementById("exampleEvent").value;
    var org = document.getElementById("exampleOrg").value;
    var duration = document.getElementById("exampleDuration").value;
    var date1 = document.getElementById("exampleDate").value;
    // console.log(date)
    let startdate=  date1.replace(/-/g, "");
    var domain = document.getElementById("exampleDomain").value;
    var mode = document.getElementById("exampleMode").value;
    var certificate = document.getElementById("exampleFormControlFile1")


    if(event=="" || org=="" || date1=="" || domain=="" || duration=="" || mode=="")
    {
        document.getElementById("error").innerHTML="Fill all the details"
        document.getElementById("error").style.color="red"

    }
    else{
        const file = certificate.files[0];

        // Validate file type and size...
        // (same validation code as before)

        // Firebase Storage configuration
        const storage = firebase.storage();
        const storageRef = storage.ref();
        const filename = "stuothers/" + file.name;
        const progressBar = document.getElementById("progress-bar")

        // Upload the file to Firebase Storage
        const uploadTask = storageRef.child(filename).put(file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                // You can track the upload progress here if needed
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                progressBar.style.width = `${progress}%`;
            },
            (error) => {
                console.error("Error uploading file:", error);
                alert("Error uploading file.");
            },
            async () => {
                // File uploaded successfully

                // Get the download URL of the uploaded image
                const downloadURL = await uploadTask.snapshot.ref.getDownloadURL();

                // Save the download URL to Firebase Realtime Database
                const newUserRef = database.ref("stucertify/"+uid+"/"+event+"/"+startdate+"/")
                newUserRef.set({
                  event: event,
                  organization: org,
                  duration:duration,
                  date: date1,
                  domain: domain,
                  mode:mode,
                  certificate:downloadURL
                })
                alert("File uploaded successfully and URL saved to database!");
                window.location.href="/Info_IT/html/student/student-info/student.html"
            }
        );
        }

}
    })
}

//FACULTY COLUMN

//FDP

function submitfdp(){
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
      
            // User is signed in
            console.log("User Signed In");
            var uid = user.uid;

    var event = document.getElementById("exampleEvent").value;
    var org = document.getElementById("exampleOrg").value;
    var duration = document.getElementById("exampleDuration").value;
    var domain = document.getElementById("exampleDomain").value;
    var date1 = document.getElementById("exampleDate").value;
    // console.log(date)
    let startdate=  date1.replace(/-/g, "");
    var enddate = document.getElementById("exampleDate2").value;
   
    var mode = document.getElementById("exampleMode").value;
    var certificate = document.getElementById("exampleFormControlFile1")


    if(event=="" || org=="" || date1=="" || domain=="" || duration=="" || enddate=="" || mode=="")
    {
        document.getElementById("error").innerHTML="Fill all the details"
        document.getElementById("error").style.color="red"

    }
    else{
        const file = certificate.files[0];

        // Validate file type and size...
        // (same validation code as before)

        // Firebase Storage configuration
        const storage = firebase.storage();
        const storageRef = storage.ref();
        const filename = "fdp/" + file.name;
        const progressBar = document.getElementById("progress-bar")

        // Upload the file to Firebase Storage
        const uploadTask = storageRef.child(filename).put(file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                // You can track the upload progress here if needed
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                progressBar.style.width = `${progress}%`;
            },
            (error) => {
                console.error("Error uploading file:", error);
                alert("Error uploading file.");
            },
            async () => {
                // File uploaded successfully

                // Get the download URL of the uploaded image
                const downloadURL = await uploadTask.snapshot.ref.getDownloadURL();

                // Save the download URL to Firebase Realtime Database
                const newUserRef = database.ref("facultycertify/"+uid+"/"+event+"/"+startdate+"/")
                newUserRef.set({
                  event: event,
                  organization: org,
                  duration:duration,
                  date: date1,
                  enddate:enddate,
                  domain: domain,
                  mode:mode,
                  certificate:downloadURL,
                
                })
                alert("File uploaded successfully and URL saved to database!");
                window.location.href="/Info_IT/html/faculty/faculty-info/faculty.html"
            }
        );
        }

}
    })
}

//Technical Publication
function submitpublication(){
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
      
            // User is signed in
            console.log("User Signed In");
            var uid = user.uid;

    var event = document.getElementById("exampleEvent").value;
    var org = document.getElementById("exampleOrg").value;
    var name= document.getElementById("examplePublicationName").value;
    var date1 = document.getElementById("exampleDate").value;
    // console.log(date)
    let certificatedate=  date1.replace(/-/g, "");
    var publication = document.getElementById("exampleFormControlFile1")


    if(event=="" || org=="" || date1=="" || name=="")
    {
        document.getElementById("error").innerHTML="Fill all the details"
        document.getElementById("error").style.color="red"

    }
    else{
        const file = publication.files[0];

        // Validate file type and size...
        // (same validation code as before)

        // Firebase Storage configuration
        const storage = firebase.storage();
        const storageRef = storage.ref();
        const filename = "facpublication/" + file.name;
        const progressBar = document.getElementById("progress-bar")

        // Upload the file to Firebase Storage
        const uploadTask = storageRef.child(filename).put(file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                // You can track the upload progress here if needed
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                progressBar.style.width = `${progress}%`;
            },
            (error) => {
                console.error("Error uploading file:", error);
                alert("Error uploading file.");
            },
            async () => {
                // File uploaded successfully

                // Get the download URL of the uploaded image
                const downloadURL = await uploadTask.snapshot.ref.getDownloadURL();

                // Save the download URL to Firebase Realtime Database
                const newUserRef = database.ref("facultycertify/"+uid+"/"+event+"/"+certificatedate+"/")
                newUserRef.set({
                  event: event,
                  organization: org,
                  name:name,
                  date:date1,
                  publication:downloadURL,
                
                })
                alert("File uploaded successfully and URL saved to database!");
                window.location.href="/Info_IT/html/faculty/faculty-info/faculty.html"
            }
        );
        }

}
    })
}

//workshop
function submitfacworkshop(){
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
      
            // User is signed in
            console.log("User Signed In");
            var uid = user.uid;

    var event = document.getElementById("exampleEvent").value;
    var org = document.getElementById("exampleOrg").value;
    var topic = document.getElementById("exampleTopic").value;
    var duration = document.getElementById("exampleDuration").value;
    var date1 = document.getElementById("exampleDate").value;
    // console.log(date)
    let startdate=  date1.replace(/-/g, "");
    var enddate = document.getElementById("exampleDate2").value;
   
    var mode = document.getElementById("exampleMode").value;
    var certificate = document.getElementById("exampleFormControlFile1")


    if(event=="" || org=="" || date1=="" || topic=="" || duration=="" || enddate=="" || mode=="")
    {
        document.getElementById("error").innerHTML="Fill all the details"
        document.getElementById("error").style.color="red"

    }
    else{
        const file = certificate.files[0];

        // Validate file type and size...
        // (same validation code as before)

        // Firebase Storage configuration
        const storage = firebase.storage();
        const storageRef = storage.ref();
        const filename = "facworkshop/" + file.name;
        const progressBar = document.getElementById("progress-bar")

        // Upload the file to Firebase Storage
        const uploadTask = storageRef.child(filename).put(file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                // You can track the upload progress here if needed
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                progressBar.style.width = `${progress}%`;
            },
            (error) => {
                console.error("Error uploading file:", error);
                alert("Error uploading file.");
            },
            async () => {
                // File uploaded successfully

                // Get the download URL of the uploaded image
                const downloadURL = await uploadTask.snapshot.ref.getDownloadURL();

                // Save the download URL to Firebase Realtime Database
                const newUserRef = database.ref("facultycertify/"+uid+"/"+event+"/"+startdate+"/")
                newUserRef.set({
                  event: event,
                  organization: org,
                  duration:duration,
                  startdate: startdate,
                  enddate:enddate,
                  topic: topic,
                  mode:mode,
                  certificate:downloadURL,
                
                })
                alert("File uploaded successfully and URL saved to database!");
                window.location.href="/Info_IT/html/faculty/faculty-info/faculty.html"
            }
        );
        }

}
    })
}

//journal

function submitjournal(){
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
      
            // User is signed in
            console.log("User Signed In");
            var uid = user.uid;

    var event = document.getElementById("exampleEvent").value;
    var org = document.getElementById("exampleOrg").value;
    var topic = document.getElementById("exampleTopic").value;
    var date1 = document.getElementById("exampleDate").value;
    // console.log(date)
    let certificatedate=  date1.replace(/-/g, "");
   
    var certificate = document.getElementById("exampleFormControlFile1")


    if(event=="" || org=="" || date1=="" || topic=="")
    {
        document.getElementById("error").innerHTML="Fill all the details"
        document.getElementById("error").style.color="red"

    }
    else{
        const file = certificate.files[0];

        // Validate file type and size...
        // (same validation code as before)

        // Firebase Storage configuration
        const storage = firebase.storage();
        const storageRef = storage.ref();
        const filename = "facjournal/" + file.name;
        const progressBar = document.getElementById("progress-bar")

        // Upload the file to Firebase Storage
        const uploadTask = storageRef.child(filename).put(file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                // You can track the upload progress here if needed
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                progressBar.style.width = `${progress}%`;
            },
            (error) => {
                console.error("Error uploading file:", error);
                alert("Error uploading file.");
            },
            async () => {
                // File uploaded successfully

                // Get the download URL of the uploaded image
                const downloadURL = await uploadTask.snapshot.ref.getDownloadURL();

                // Save the download URL to Firebase Realtime Database
                const newUserRef = database.ref("facultycertify/"+uid+"/"+event+"/"+certificatedate+"/")
                newUserRef.set({
                  event: event,
                  organization: org,
                  topic:topic,
                  date:date1,
                  certificate:downloadURL,
                
                })
                alert("File uploaded successfully and URL saved to database!");
                window.location.href="/Info_IT/html/faculty/faculty-info/faculty.html"
            }
        );
        }

}
    })
}

//project

function submitfacproject(){
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
      
            // User is signed in
            console.log("User Signed In");
            var uid = user.uid;

    var event = document.getElementById("exampleEvent").value;
    var title = document.getElementById("exampleTitle").value;
    var duration = document.getElementById("exampleDuration").value;
    var status = document.getElementById("exampleMode").value;
    var link = document.getElementById("basicurl").value;
    var date1 = document.getElementById("exampleDate").value;
    // console.log(date)
    let certificatedate=  date1.replace(/-/g, "");
    var certificate = document.getElementById("exampleFormControlFile1")


    if(event=="" || title=="" || date1=="" || duration=="" || status=="")
    {
        document.getElementById("error").innerHTML="Fill all the details"
        document.getElementById("error").style.color="red"

    }
    else{
        const file = certificate.files[0];

        // Validate file type and size...
        // (same validation code as before)

        // Firebase Storage configuration
        const storage = firebase.storage();
        const storageRef = storage.ref();
        const filename = "facproject/" + file.name;
        const progressBar = document.getElementById("progress-bar")

        // Upload the file to Firebase Storage
        const uploadTask = storageRef.child(filename).put(file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                // You can track the upload progress here if needed
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                progressBar.style.width = `${progress}%`;
            },
            (error) => {
                console.error("Error uploading file:", error);
                alert("Error uploading file.");
            },
            async () => {
                // File uploaded successfully

                // Get the download URL of the uploaded image
                const downloadURL = await uploadTask.snapshot.ref.getDownloadURL();

                // Save the download URL to Firebase Realtime Database
                const newUserRef = database.ref("facultycertify/"+uid+"/"+event+"/"+certificatedate+"/")
                newUserRef.set({
                    event: event,
                    title: title,
                    duration:duration,
                    status:status,
                    link:link,
                    date:date1,
                    certificate:downloadURL,
                
                })
                alert("File uploaded successfully and URL saved to database!");
                window.location.href="/Info_IT/html/faculty/faculty-info/faculty.html "
            }
        );
        }

}
    })
}

//Other
function submitfacother(){
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
      
            // User is signed in
            console.log("User Signed In");
            var uid = user.uid;

    var event = document.getElementById("exampleEvent").value;
    var org = document.getElementById("exampleOrg").value;
    var duration = document.getElementById("exampleDuration").value;
    var date1 = document.getElementById("exampleDate").value;
    // console.log(date)
    let startdate=  date1.replace(/-/g, "");
    var domain = document.getElementById("exampleDomain").value;
    var mode = document.getElementById("exampleMode").value;
    var certificate = document.getElementById("exampleFormControlFile1")


    if(event=="" || org=="" || date1=="" || domain=="" || duration=="" || mode=="")
    {
        document.getElementById("error").innerHTML="Fill all the details"
        document.getElementById("error").style.color="red"

    }
    else{
        const file = certificate.files[0];

        // Validate file type and size...
        // (same validation code as before)

        // Firebase Storage configuration
        const storage = firebase.storage();
        const storageRef = storage.ref();
        const filename = "facothers/" + file.name;
        const progressBar = document.getElementById("progress-bar")

        // Upload the file to Firebase Storage
        const uploadTask = storageRef.child(filename).put(file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                // You can track the upload progress here if needed
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                progressBar.style.width = `${progress}%`;
            },
            (error) => {
                console.error("Error uploading file:", error);
                alert("Error uploading file.");
            },
            async () => {
                // File uploaded successfully

                // Get the download URL of the uploaded image
                const downloadURL = await uploadTask.snapshot.ref.getDownloadURL();

                // Save the download URL to Firebase Realtime Database
                const newUserRef = database.ref("facultycertify/"+uid+"/"+event+"/"+startdate+"/")
                newUserRef.set({
                  event: event,
                  organization: org,
                  duration:duration,
                  date: date1,
                  domain: domain,
                  mode:mode,
                  certificate:downloadURL
                })
                alert("File uploaded successfully and URL saved to database!");
                window.location.href="/Info_IT/html/faculty/faculty-info/faculty.html"
            }
        );
        }

}
    })

}

function filltable() {
    const tableBody = document.getElementById("tableBody");

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const uid = user.uid;

        // Function to retrieve and populate data
        database.ref("stucertify/" + uid).on("value", (snapshot) => {
          tableBody.innerHTML = ""; // Clear the table before populating
          var sno=1
          snapshot.forEach((userSnapshot) => {
            userSnapshot.forEach((eventSnapshot) => {
                
              const eventDetails = eventSnapshot.val();
              const eventName = eventDetails.event;
              const eventDate = eventDetails.date;
              const organization = eventDetails.organization;
              const formid = eventDetails.id;
              console.log(formid)

              const row = document.createElement("tr");
              row.innerHTML = `
              <td>${sno}</td>
                <td>${eventName}</td>
                <td>${organization}</td>
                <td>${eventDate}</td>
                <td><button onclick="copyid(formid)" class="btn">Edit</button></td>
              `;

              tableBody.appendChild(row);
              sno+=1
            });
          });
        });
      }
    });
  }

function copyid(formid){
    console.log("in fucntion" +formid)

    localStorage.setItem("id", formid) 
window.location.href = "edit.html"   
}




  function editform(){
    var a = localStorage.getItem("id")

    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          const uid = user.uid;

          const ref = database.ref('stucertify');

  ref.once('value')
    .then(snapshot => {
      snapshot.forEach(userSnapshot => {
        userSnapshot.forEach(eventSnapshot => {
          eventSnapshot.forEach(dateSnapshot => {
            dateSnapshot.forEach(detailsSnapshot => {
              const details = detailsSnapshot.val();
              if (details.id === id) {
                // Display the details in your UI
                console.log(details);
              }
            });
          });
        });
      });
    })
    .catch(error => {
      console.error('Error retrieving data:', error);
    });
          
          
        }
    })


  }







firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        var uid = user.uid;
        firebase.database().ref('user/'+uid).once('value').then(function(snapshot){
        let name=snapshot.val().name;
        console.log(name)
        name = document.getElementById("profile-name").textContent=name;

            })
    }
})

