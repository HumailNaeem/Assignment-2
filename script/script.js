// document.addEventListener("DOMContentLoaded", function () {
//   // ==== Image Filtering ====
//   const tabs = document.querySelectorAll(".filtering__tabs .btn");
//   const imgs = document.querySelectorAll(".images__grid img");

//   tabs.forEach((tab) => {
//     tab.addEventListener("click", function () {
//       tabs.forEach((t) => t.classList.remove("active"));
//       this.classList.add("active");

//       const dataFilter = this.getAttribute("data-filter");
//       imgs.forEach((img) => {
//         const matchesFilter =
//           img.getAttribute("data-genre") === dataFilter || dataFilter === "all";
//         img.classList.toggle("active", matchesFilter);
//         img.classList.toggle("hide", !matchesFilter);
//       });
//     });
//   });

//   // ==== Premium Gate Logic ====
//   const loginBtn = document.getElementById("login-btn");
//   const premiumGate = document.getElementById("premium-gate");
//   const imagesGrid = document.getElementById("imgs__grid");

//   function initializePremiumGate() {
//     if (premiumGate && imagesGrid) {
//       const isLoggedIn = localStorage.getItem("isLoggedIn");
//       if (isLoggedIn) {
//         premiumGate.style.display = "none";
//         imagesGrid.classList.remove("blurred");
//       } else {
//         premiumGate.style.display = "flex";
//         imagesGrid.classList.add("blurred");
//       }
//     }
//   }

//   function handleLogin() {
//     const email = document.getElementById("login-email").value.trim();
//     const password = document.getElementById("login-password").value.trim();
//     const errorElement = document.getElementById("login-error");

//     if (email === "humailc188@gmail.com" && password === "1234") {
//       localStorage.setItem("isLoggedIn", "true");
//       if (premiumGate) premiumGate.remove();
//       imagesGrid.classList.remove("blurred");
//       if (errorElement) errorElement.classList.add("d-none");
//     } else {
//       if (errorElement) {
//         errorElement.textContent = "Invalid email or password";
//         errorElement.classList.remove("d-none");
//       }
//       document.getElementById("login-email").classList.add("is-invalid");
//       document.getElementById("login-password").classList.add("is-invalid");
//     }
//   }

//   if (loginBtn) {
//     loginBtn.addEventListener("click", handleLogin);
//   }

//   initializePremiumGate();

//   // ==== Chatbot Functionality ====
//   function getCurrentTime() {
//     const now = new Date();
//     let hours = now.getHours();
//     const minutes = now.getMinutes().toString().padStart(2, "0");
//     const ampm = hours >= 12 ? "PM" : "AM";
//     hours = hours % 12 || 12;
//     return `${hours}:${minutes} ${ampm}`;
//   }

//   // Check if jQuery is available
//   if (typeof jQuery !== "undefined") {
//     // jQuery version
//     $(function () {
//       const $chatbot = {
//         trigger: $("#chatbotTrigger"),
//         popup: $("#chatbotPopup"),
//         close: $("#closeChatbot"),
//         sendBtn: $("#sendMessage"),
//         input: $("#userMessage"),
//         messages: $("#chatbotMessages"),
//       };

//       if ($chatbot.trigger.length) {
//         $chatbot.trigger.on("click", () =>
//           $chatbot.popup.toggleClass("active")
//         );
//         $chatbot.close.on("click", () => $chatbot.popup.removeClass("active"));

//         const sendMessage = () => {
//           const text = $chatbot.input.val().trim();
//           if (text) {
//             $chatbot.messages.append(`
//                 <div class="chatbot-message chatbot-sent">
//                   <div class="message-content">${text}</div>
//                   <div class="message-time">${getCurrentTime()}</div>
//                 </div>
//               `);
//             $chatbot.input.val("");

//             setTimeout(() => {
//               const responses = [
//                 "I understand. Can you tell me more?",
//                 "Thanks for your message! How can I assist you further?",
//                 "I'll do my best to help with that.",
//                 "Let me check that for you.",
//                 "Is there anything else you'd like to know?",
//               ];
//               const response =
//                 responses[Math.floor(Math.random() * responses.length)];
//               $chatbot.messages.append(`
//                   <div class="chatbot-message chatbot-received">
//                     <div class="message-content">${response}</div>
//                     <div class="message-time">${getCurrentTime()}</div>
//                   </div>
//                 `);
//               $chatbot.messages.scrollTop($chatbot.messages[0].scrollHeight);
//             }, 1000);
//           }
//         };

//         $chatbot.sendBtn.on("click", sendMessage);
//         $chatbot.input.on(
//           "keypress",
//           (e) => e.key === "Enter" && sendMessage()
//         );
//       }
//     });
//   } else {
//     // Vanilla JS fallback
//     const chatbotTrigger = document.getElementById("chatbotTrigger");
//     const chatbotPopup = document.getElementById("chatbotPopup");
//     const closeChatbot = document.getElementById("closeChatbot");
//     const sendMessageBtn = document.getElementById("sendMessage");
//     const userMessageInput = document.getElementById("userMessage");
//     const chatbotMessages = document.getElementById("chatbotMessages");

//     if (
//       chatbotTrigger &&
//       chatbotPopup &&
//       closeChatbot &&
//       sendMessageBtn &&
//       userMessageInput &&
//       chatbotMessages
//     ) {
//       chatbotTrigger.addEventListener("click", () => {
//         chatbotPopup.classList.toggle("active");
//       });

//       closeChatbot.addEventListener("click", () => {
//         chatbotPopup.classList.remove("active");
//       });

//       function sendMessage() {
//         const message = userMessageInput.value.trim();
//         if (message) {
//           const messageDiv = document.createElement("div");
//           messageDiv.classList.add("chatbot-message", "chatbot-sent");

//           const contentDiv = document.createElement("div");
//           contentDiv.classList.add("message-content");
//           contentDiv.textContent = message;

//           const timeDiv = document.createElement("div");
//           timeDiv.classList.add("message-time");
//           timeDiv.textContent = getCurrentTime();

//           messageDiv.appendChild(contentDiv);
//           messageDiv.appendChild(timeDiv);
//           chatbotMessages.appendChild(messageDiv);
//           userMessageInput.value = "";

//           setTimeout(() => {
//             const responses = [
//               "I understand. Can you tell me more?",
//               "Thanks for your message! How can I assist you further?",
//               "I'll do my best to help with that.",
//               "Let me check that for you.",
//               "Is there anything else you'd like to know?",
//             ];
//             const randomResponse =
//               responses[Math.floor(Math.random() * responses.length)];

//             const responseDiv = document.createElement("div");
//             responseDiv.classList.add("chatbot-message", "chatbot-received");

//             const responseContent = document.createElement("div");
//             responseContent.classList.add("message-content");
//             responseContent.textContent = randomResponse;

//             const responseTime = document.createElement("div");
//             responseTime.classList.add("message-time");
//             responseTime.textContent = getCurrentTime();

//             responseDiv.appendChild(responseContent);
//             responseDiv.appendChild(responseTime);
//             chatbotMessages.appendChild(responseDiv);

//             chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
//           }, 1000);
//         }
//       }

//       sendMessageBtn.addEventListener("click", sendMessage);
//       userMessageInput.addEventListener("keypress", function (e) {
//         if (e.key === "Enter") {
//           sendMessage();
//         }
//       });
//     }
//   }
// });

document.addEventListener("DOMContentLoaded", function () {
  // 1. Create AJAX request
  const xhr = new XMLHttpRequest();

  // 2. Configure the request
  xhr.open("GET", "images.json", true);
  xhr.setRequestHeader("Content-Type", "application/json");

  // 3. Define what happens on successful request
  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
      try {
        const data = JSON.parse(xhr.responseText);
        displayImages(data.images);
      } catch (e) {
        console.error("Error parsing JSON:", e);
        loadHardcodedImages();
      }
    } else {
      console.error("Request failed with status:", xhr.status);
      loadHardcodedImages();
    }
  };

  // 4. Define error handling
  xhr.onerror = function () {
    console.error("Request failed");
    loadHardcodedImages();
  };

  // 5. Send the request
  xhr.send();

  // Function to display images
  function displayImages(images) {
    const columns = [
      document.getElementById("column1"),
      document.getElementById("column2"),
      document.getElementById("column3"),
    ];

    // Clear existing content
    columns.forEach((col) => (col.innerHTML = ""));

    // Distribute images across columns
    images.forEach((img, index) => {
      const colIndex = index % 3;
      const marginClass = index > 2 ? "mt-3" : "";

      const imgElement = document.createElement("img");
      imgElement.src = img.src;
      imgElement.dataset.genre = img.genre;
      imgElement.className = `img-fluid rounded ${marginClass}`;
      imgElement.alt = `${img.genre} image`;

      // Add error handling
      imgElement.onerror = function () {
        this.src = "./styles/img/fallback.jpg";
      };

      columns[colIndex].appendChild(imgElement);
    });

    // Initialize filtering after images load
    initImageFiltering();
  }

  // Fallback function
  function loadHardcodedImages() {
    console.warn("Using hardcoded fallback images");
    const fallbackImages = [
      { src: "./styles/img/business13.jpeg", genre: "business" },
      { src: "./styles/img/business2.jpeg", genre: "business" },
      { src: "./styles/img/portrait7.jpeg", genre: "portrait" },
    ];
    displayImages(fallbackImages);
  }
  // ==== Image Filtering ====
  function initImageFiltering() {
    const tabs = document.querySelectorAll(".filtering__tabs .btn");

    tabs.forEach((tab) => {
      tab.addEventListener("click", function () {
        tabs.forEach((t) => t.classList.remove("active"));
        this.classList.add("active");

        const dataFilter = this.getAttribute("data-filter");
        const imgs = document.querySelectorAll(".images__grid img");

        imgs.forEach((img) => {
          const matchesFilter =
            img.getAttribute("data-genre") === dataFilter ||
            dataFilter === "all";
          img.classList.toggle("active", matchesFilter);
          img.classList.toggle("hide", !matchesFilter);
        });
      });
    });
  }

  // ==== Premium Gate Logic ====
  const loginBtn = document.getElementById("login-btn");
  const premiumGate = document.getElementById("premium-gate");
  const imagesGrid = document.getElementById("imgs__grid");

  function initializePremiumGate() {
    if (premiumGate && imagesGrid) {
      const isLoggedIn = localStorage.getItem("isLoggedIn");
      if (isLoggedIn) {
        premiumGate.style.display = "none";
        imagesGrid.classList.remove("blurred");
      } else {
        premiumGate.style.display = "flex";
        imagesGrid.classList.add("blurred");
      }
    }
  }

  function handleLogin() {
    const email = document.getElementById("login-email").value.trim();
    const password = document.getElementById("login-password").value.trim();
    const errorElement = document.getElementById("login-error");

    if (email === "humailc188@gmail.com" && password === "1234") {
      localStorage.setItem("isLoggedIn", "true");
      if (premiumGate) premiumGate.remove();
      imagesGrid.classList.remove("blurred");
      if (errorElement) errorElement.classList.add("d-none");
    } else {
      if (errorElement) {
        errorElement.textContent = "Invalid email or password";
        errorElement.classList.remove("d-none");
      }
      document.getElementById("login-email").classList.add("is-invalid");
      document.getElementById("login-password").classList.add("is-invalid");
    }
  }

  if (loginBtn) {
    loginBtn.addEventListener("click", handleLogin);
  }

  initializePremiumGate();

  // ==== Chatbot Functionality ====
  function getCurrentTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    return `${hours}:${minutes} ${ampm}`;
  }

  // Check if jQuery is available
  if (typeof jQuery !== "undefined") {
    // jQuery version
    $(function () {
      const $chatbot = {
        trigger: $("#chatbotTrigger"),
        popup: $("#chatbotPopup"),
        close: $("#closeChatbot"),
        sendBtn: $("#sendMessage"),
        input: $("#userMessage"),
        messages: $("#chatbotMessages"),
      };

      if ($chatbot.trigger.length) {
        $chatbot.trigger.on("click", () =>
          $chatbot.popup.toggleClass("active")
        );
        $chatbot.close.on("click", () => $chatbot.popup.removeClass("active"));

        const sendMessage = () => {
          const text = $chatbot.input.val().trim();
          if (text) {
            $chatbot.messages.append(`
                <div class="chatbot-message chatbot-sent">
                  <div class="message-content">${text}</div>
                  <div class="message-time">${getCurrentTime()}</div>
                </div>
              `);
            $chatbot.input.val("");

            setTimeout(() => {
              const responses = [
                "I understand. Can you tell me more?",
                "Thanks for your message! How can I assist you further?",
                "I'll do my best to help with that.",
                "Let me check that for you.",
                "Is there anything else you'd like to know?",
              ];
              const response =
                responses[Math.floor(Math.random() * responses.length)];
              $chatbot.messages.append(`
                  <div class="chatbot-message chatbot-received">
                    <div class="message-content">${response}</div>
                    <div class="message-time">${getCurrentTime()}</div>
                  </div>
                `);
              $chatbot.messages.scrollTop($chatbot.messages[0].scrollHeight);
            }, 1000);
          }
        };

        $chatbot.sendBtn.on("click", sendMessage);
        $chatbot.input.on(
          "keypress",
          (e) => e.key === "Enter" && sendMessage()
        );
      }
    });
  } else {
    // Vanilla JS fallback
    const chatbotTrigger = document.getElementById("chatbotTrigger");
    const chatbotPopup = document.getElementById("chatbotPopup");
    const closeChatbot = document.getElementById("closeChatbot");
    const sendMessageBtn = document.getElementById("sendMessage");
    const userMessageInput = document.getElementById("userMessage");
    const chatbotMessages = document.getElementById("chatbotMessages");

    if (
      chatbotTrigger &&
      chatbotPopup &&
      closeChatbot &&
      sendMessageBtn &&
      userMessageInput &&
      chatbotMessages
    ) {
      chatbotTrigger.addEventListener("click", () => {
        chatbotPopup.classList.toggle("active");
      });

      closeChatbot.addEventListener("click", () => {
        chatbotPopup.classList.remove("active");
      });

      function sendMessage() {
        const message = userMessageInput.value.trim();
        if (message) {
          const messageDiv = document.createElement("div");
          messageDiv.classList.add("chatbot-message", "chatbot-sent");

          const contentDiv = document.createElement("div");
          contentDiv.classList.add("message-content");
          contentDiv.textContent = message;

          const timeDiv = document.createElement("div");
          timeDiv.classList.add("message-time");
          timeDiv.textContent = getCurrentTime();

          messageDiv.appendChild(contentDiv);
          messageDiv.appendChild(timeDiv);
          chatbotMessages.appendChild(messageDiv);
          userMessageInput.value = "";

          setTimeout(() => {
            const responses = [
              "I understand. Can you tell me more?",
              "Thanks for your message! How can I assist you further?",
              "I'll do my best to help with that.",
              "Let me check that for you.",
              "Is there anything else you'd like to know?",
            ];
            const randomResponse =
              responses[Math.floor(Math.random() * responses.length)];

            const responseDiv = document.createElement("div");
            responseDiv.classList.add("chatbot-message", "chatbot-received");

            const responseContent = document.createElement("div");
            responseContent.classList.add("message-content");
            responseContent.textContent = randomResponse;

            const responseTime = document.createElement("div");
            responseTime.classList.add("message-time");
            responseTime.textContent = getCurrentTime();

            responseDiv.appendChild(responseContent);
            responseDiv.appendChild(responseTime);
            chatbotMessages.appendChild(responseDiv);

            chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
          }, 1000);
        }
      }

      sendMessageBtn.addEventListener("click", sendMessage);
      userMessageInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
          sendMessage();
        }
      });
    }
  }

  // Start loading images
  loadImages();
});
