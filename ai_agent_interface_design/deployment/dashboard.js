// Enhanced functionality for the dashboard with resizable chat panel
document.addEventListener('DOMContentLoaded', function() {
    // Add loading overlay
    const loadingOverlay = document.createElement('div');
    loadingOverlay.className = 'loading-overlay';
    loadingOverlay.innerHTML = '<div class="loading-spinner"></div>';
    document.body.appendChild(loadingOverlay);
    
    // Remove loading overlay after simulated loading
    setTimeout(() => {
        loadingOverlay.classList.add('fade-out');
        setTimeout(() => {
            loadingOverlay.remove();
            showNotification('Dashboard loaded successfully', 'success');
        }, 500);
    }, 1500);
    
    // Chat panel expansion functionality
    const chatPanel = document.getElementById('chatPanel');
    const expandChat = document.getElementById('expandChat');
    
    if (expandChat && chatPanel) {
        expandChat.addEventListener('click', function() {
            chatPanel.classList.toggle('expanded');
            
            // Change icon based on state
            if (chatPanel.classList.contains('expanded')) {
                expandChat.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="4 14 10 14 10 20"></polyline>
                        <polyline points="20 10 14 10 14 4"></polyline>
                        <line x1="14" y1="10" x2="21" y2="3"></line>
                        <line x1="3" y1="21" x2="10" y2="14"></line>
                    </svg>
                `;
            } else {
                expandChat.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <polyline points="9 21 3 21 3 15"></polyline>
                        <line x1="21" y1="3" x2="14" y2="10"></line>
                        <line x1="3" y1="21" x2="10" y2="14"></line>
                    </svg>
                `;
            }
        });
    }
    
    // Add resizable functionality to chat panel
    if (chatPanel) {
        // Create and add resize handle
        const resizeHandle = document.createElement('div');
        resizeHandle.className = 'resize-handle';
        chatPanel.appendChild(resizeHandle);
        
        let startX, startWidth;
        
        // Mouse down event listener
        resizeHandle.addEventListener('mousedown', function(e) {
            startX = e.clientX;
            startWidth = parseInt(document.defaultView.getComputedStyle(chatPanel).width, 10);
            document.documentElement.classList.add('resizing');
            
            // Add event listeners for mouse move and mouse up
            document.addEventListener('mousemove', resizePanel);
            document.addEventListener('mouseup', stopResize);
            
            // Prevent text selection during resize
            e.preventDefault();
        });
        
        // Touch start event listener for mobile
        resizeHandle.addEventListener('touchstart', function(e) {
            startX = e.touches[0].clientX;
            startWidth = parseInt(document.defaultView.getComputedStyle(chatPanel).width, 10);
            document.documentElement.classList.add('resizing');
            
            // Add event listeners for touch move and touch end
            document.addEventListener('touchmove', resizePanelTouch);
            document.addEventListener('touchend', stopResizeTouch);
            
            // Prevent scrolling during resize
            e.preventDefault();
        });
        
        // Resize panel function for mouse
        function resizePanel(e) {
            // Calculate new width (negative because we're dragging from right to left)
            const newWidth = startWidth - (e.clientX - startX);
            
            // Set minimum and maximum width constraints
            if (newWidth > 280 && newWidth < 600) {
                chatPanel.style.width = newWidth + 'px';
            }
        }
        
        // Resize panel function for touch
        function resizePanelTouch(e) {
            // Calculate new width (negative because we're dragging from right to left)
            const newWidth = startWidth - (e.touches[0].clientX - startX);
            
            // Set minimum and maximum width constraints
            if (newWidth > 280 && newWidth < 600) {
                chatPanel.style.width = newWidth + 'px';
            }
        }
        
        // Stop resize function for mouse
        function stopResize() {
            document.documentElement.classList.remove('resizing');
            document.removeEventListener('mousemove', resizePanel);
            document.removeEventListener('mouseup', stopResize);
            
            // Show notification
            showNotification('Chat panel resized', 'info');
        }
        
        // Stop resize function for touch
        function stopResizeTouch() {
            document.documentElement.classList.remove('resizing');
            document.removeEventListener('touchmove', resizePanelTouch);
            document.removeEventListener('touchend', stopResizeTouch);
            
            // Show notification
            showNotification('Chat panel resized', 'info');
        }
    }
    
    // Add tooltips to all menu items
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        const text = item.querySelector('span')?.textContent || 'Navigate';
        item.setAttribute('data-tooltip', text);
        item.classList.add('tooltip');
    });
    
    // Add animation to cards
    const cards = document.querySelectorAll('.card, .metric-card');
    cards.forEach((card, index) => {
        card.classList.add('animate-in');
        card.style.animationDelay = `${index * 0.1}s`;
    });
    
    // Add functionality to quick actions
    const quickActions = document.querySelectorAll('.quick-action');
    quickActions.forEach(action => {
        action.addEventListener('click', function() {
            const text = this.textContent.trim();
            const chatInput = document.querySelector('.chat-input');
            if (chatInput) {
                chatInput.value = text;
                chatInput.focus();
                showNotification(`Quick action: ${text}`, 'info');
            }
        });
    });
    
    // Add send message functionality
    const chatSend = document.querySelector('.chat-send');
    const chatInput = document.querySelector('.chat-input');
    if (chatSend && chatInput) {
        chatSend.addEventListener('click', function() {
            sendMessage();
        });
        
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
            }
        });
    }
    
    // Function to send a message
    function sendMessage() {
        const chatInput = document.querySelector('.chat-input');
        const chatMessages = document.querySelector('.chat-messages');
        
        if (chatInput && chatMessages && chatInput.value.trim() !== '') {
            const messageText = chatInput.value.trim();
            
            // Create user message
            const userMessage = document.createElement('div');
            userMessage.className = 'message message-user';
            
            const messageContent = document.createElement('div');
            messageContent.textContent = messageText;
            
            const messageTime = document.createElement('div');
            messageTime.className = 'message-time';
            messageTime.textContent = getCurrentTime();
            
            userMessage.appendChild(messageContent);
            userMessage.appendChild(messageTime);
            chatMessages.appendChild(userMessage);
            
            // Clear input
            chatInput.value = '';
            
            // Scroll to bottom
            chatMessages.scrollTop = chatMessages.scrollHeight;
            
            // Simulate AI response after a delay
            setTimeout(() => {
                // Create AI message
                const aiMessage = document.createElement('div');
                aiMessage.className = 'message message-ai';
                
                const aiContent = document.createElement('div');
                aiContent.textContent = getAIResponse(messageText);
                
                const aiTime = document.createElement('div');
                aiTime.className = 'message-time';
                aiTime.textContent = getCurrentTime();
                
                aiMessage.appendChild(aiContent);
                aiMessage.appendChild(aiTime);
                chatMessages.appendChild(aiMessage);
                
                // Scroll to bottom
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }, 1000);
        }
    }
    
    // Get current time in format HH:MM AM/PM
    function getCurrentTime() {
        const now = new Date();
        let hours = now.getHours();
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // Convert 0 to 12
        return `${hours}:${minutes} ${ampm}`;
    }
    
    // Simple AI response function
    function getAIResponse(message) {
        message = message.toLowerCase();
        
        if (message.includes('analyze trends')) {
            return "Based on the current data, I'm seeing a significant upward trend in the Survival & Emergency niche, particularly with solar generators showing a 32% increase in conversion rates over the last 30 days. Would you like me to prepare a detailed analysis report?";
        } else if (message.includes('suggest content')) {
            return "For your Pinterest strategy, I recommend creating 5 new pins focusing on emergency preparedness comparisons. The data shows that comparison content is performing 43% better than standard product pins. Would you like me to draft some pin concepts?";
        } else if (message.includes('show report') || message.includes('report')) {
            return "I've prepared a performance report for the current period. Your overall revenue is up 7.9% compared to the previous period, with Pinterest driving the majority of conversions at a 5.8% conversion rate. The Emergency Food Kit remains your top performer. Would you like me to identify growth opportunities?";
        } else if (message.includes('optimize') || message.includes('campaign')) {
            return "Looking at your campaign performance, I recommend optimizing your TikTok strategy by creating more demonstration videos for AI tools. This content type has a 5.2% engagement rate, which is 40% higher than your average content. Shall I prepare an optimization plan?";
        } else if (message.includes('product') || message.includes('find')) {
            return "Based on current market trends and your audience interests, I've identified 3 potential new products that align with your top-performing niches: 1) Portable solar chargers, 2) Emergency medical kits, and 3) AI-powered content creation tools. Would you like more details on any of these?";
        } else {
            return "I understand you're interested in " + message + ". Based on your dashboard data, I can help you analyze this further. Would you like me to prepare some specific insights related to this topic?";
        }
    }
    
    // Notification system
    window.showNotification = function(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = 'notification';
        
        let icon = '';
        if (type === 'success') {
            icon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>';
        } else if (type === 'error') {
            icon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>';
        } else {
            icon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>';
        }
        
        notification.innerHTML = `
            <div class="notification-icon">${icon}</div>
            <div>${message}</div>
            <div class="notification-close">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        // Show notification
        setTimeout(() => {
            notification.classList.add('show');
        }, 10);
        
        // Add close functionality
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.remove();
            }, 300);
        });
        
        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (document.body.contains(notification)) {
                notification.classList.remove('show');
                setTimeout(() => {
                    if (document.body.contains(notification)) {
                        notification.remove();
                    }
                }, 300);
            }
        }, 5000);
    }
});
