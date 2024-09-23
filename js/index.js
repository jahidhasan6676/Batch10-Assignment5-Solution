// donation for noakhali--->

document.getElementById('donate-btn-noakhali').addEventListener('click', function(){
    const inputDonation = getInputFieldValueById('input-donation-noakhali');
    
    const donateBalance = getTextValueById('donation-amount-noakhali');
    const myBalance = getTextValueById('my-balance');

    // validation check
    if(isNaN(inputDonation) || inputDonation <= 0){
        return alert('Invalid Number');
    }
    if( myBalance <= inputDonation){
        return alert('Donation amount cannot exceed your main balance!')
    }

    const donationCollect = donateBalance + inputDonation;
    const myCurrentBalance = myBalance - inputDonation;
    
   

    document.getElementById('donation-amount-noakhali').innerText = donationCollect;
    document.getElementById('my-balance').innerText = myCurrentBalance;

     // history added
     const historyDocuments = document.createElement('div');
     historyDocuments.className = 'w-full border-2 border-gray-100 p-3 rounded-lg mt-5'
     historyDocuments.innerHTML = `<p class=" font-medium primary-color mb-2">${inputDonation} Taka is Donated for famine-2024 at Noakhali, Bangladesh</p>
     <p class="gray-color">Date: ${new Date().toLocaleString()}(Bangladesh Standard Times)`;
 
     const historyContainer = document.getElementById('history-container');
     historyContainer.insertBefore(historyDocuments, historyContainer.firstChild);
 
     

})

// donation for feni--->

document.getElementById('donate-btn-feni').addEventListener('click', function(){
    const inputDonation = getInputFieldValueById('input-donation-feni');
    
    const donateBalance = getTextValueById('donation-amount-feni');
    const myBalance = getTextValueById('my-balance');

    // validation check
    if(isNaN(inputDonation) || inputDonation <= 0){
        return alert('Invalid Number');
    }
    if( myBalance <= inputDonation){
        return alert('Donation amount cannot exceed your main balance!')
    }

    const donationCollect = donateBalance + inputDonation;
    const myCurrentBalance = myBalance - inputDonation;
    

    document.getElementById('donation-amount-feni').innerText = donationCollect;
    document.getElementById('my-balance').innerText = myCurrentBalance;

     // history added
     const historyDocuments = document.createElement('div');
     historyDocuments.className = 'w-full border-2 border-gray-100 p-3 rounded-lg mt-5'
     historyDocuments.innerHTML = `<p class=" font-medium primary-color mb-2">${inputDonation} Taka is Donated for Flood Relief in Feni,Bangladesh</p>
     <p class="gray-color">Date: ${new Date().toLocaleString()}(Bangladesh Standard Times)`;
 
     const historyContainer = document.getElementById('history-container');
     historyContainer.insertBefore(historyDocuments, historyContainer.firstChild);
 
})

// quota injured people donation--->

document.getElementById('donate-btn-quota').addEventListener('click', function(){
    const inputDonation = getInputFieldValueById('input-donation-quota');
    
    const donateBalance = getTextValueById('donation-amount-quota');
    const myBalance = getTextValueById('my-balance');

    // validation check
    if(isNaN(inputDonation) || inputDonation <= 0){
        return alert('Invalid Number');
    }
    if( myBalance <= inputDonation){
        return alert('Donation amount cannot exceed your main balance!')
    }

    const donationCollect = donateBalance + inputDonation;
    const myCurrentBalance = myBalance - inputDonation;
    

    document.getElementById('donation-amount-quota').innerText = donationCollect;
    document.getElementById('my-balance').innerText = myCurrentBalance;

    // history added
    const historyDocuments = document.createElement('div');
    historyDocuments.className = 'w-full border-2 border-gray-100 p-3 rounded-lg mt-5'
    historyDocuments.innerHTML = `<p class=" font-medium primary-color mb-2">${inputDonation} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</p>
    <p class="gray-color">Date: ${new Date().toLocaleString()}(Bangladesh Standard Times)`;

    const historyContainer = document.getElementById('history-container');
    historyContainer.insertBefore(historyDocuments, historyContainer.firstChild);
})

// history tab--->
document.getElementById('history-tab').addEventListener('click', function(){
    const historyTab = document.getElementById('history-tab');
    const donationTab = document.getElementById('donation-tab');
    
  
   historyTab.classList.add('bg-[#B4F461]');
   historyTab.classList.remove('bg-gray-100');
   donationTab.classList.remove('bg-[#B4F461]');
   donationTab.classList.add('bg-gray-100');

   document.getElementById('card-container').classList.add('hidden');
   document.getElementById('history-container').classList.remove('hidden');
    
})

// donation tab--->

document.getElementById('donation-tab').addEventListener('click', function(){
    const historyTab = document.getElementById('history-tab');
    const donationTab = document.getElementById('donation-tab');
    
   
   historyTab.classList.remove('bg-[#B4F461]');
   historyTab.classList.add('bg-gray-100');
   donationTab.classList.add('bg-[#B4F461]');
   donationTab.classList.remove('bg-gray-100');

   document.getElementById('card-container').classList.remove('hidden');
   document.getElementById('history-container').classList.add('hidden');
   
    
})

// blog clickable--->

document.getElementById('blog.btn').addEventListener('click', function(){
    window.location.href = "./blog.html"
})

