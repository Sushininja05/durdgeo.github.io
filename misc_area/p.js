    function checkPswd() {
        var confirmPassword = "the_great_vault";
        var confirmPassword2 = "infernal";
        var confirmPassword3 = "bman_ark";
		
        var password = document.getElementById("pswd").value;
        if (password == confirmPassword) {
             window.location="superextradoubletriplefripplesecretpage.html";
        }
        if (password == confirmPassword2) {
             window.location="infernal_area/index.html";
        }
        if (password == confirmPassword3) {
             window.location="bman archive.html";
        }
    }