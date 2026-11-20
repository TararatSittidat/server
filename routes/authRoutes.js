const express = require("express");
const router = express.Router();

router.post("/register", register)
router.post("/login",login)
router.post("/current-user", currentUser)
router.post("/current-admin",currentAdmin)
router.post("/current-seller",currentSeller)
router.post("/logout",logout)
router.post("/forgot-password",forgotPassword)
router.post("/reset-password",resetPassword)