const allStoriesData = {
    // ... (your existing allStoriesData object - KEEP IT AS IS) ...
        // Digital Adventure
        "story_flutter_get_started": {
            id: "story_flutter_get_started",
            title: "Choose your development platform to get started",
            category: "digital_adventure",
            description: "12 Mar 2025 — <strong>Install Flutter and get started.</strong> Downloads available for Windows, macOS, Linux, and ChromeOS operating systems.",
            favicon: "https://docs.flutter.dev/favicon.ico",
            urlText: "https://docs.flutter.dev › get-started › install",
            sourceName: "Flutter Docs",
            scenes: [ {text: "<p>Welcome to Flutter! This story will guide you through choosing your development platform and getting started with your first Flutter project. Let's begin by understanding your needs.</p>", image: "https://via.placeholder.com/400x250/4285F4/FFFFFF?text=Flutter+Welcome"} ]
        },
        "story_flutter_archive": {
            id: "story_flutter_archive",
            title: "Flutter SDK archive",
            category: "digital_adventure",
            description: "The Flutter SDK archive is a collection of all previous versions of the Flutter SDK. This archive is useful for developers who need to use an older version of ...",
            favicon: "https://docs.flutter.dev/favicon.ico",
            urlText: "https://docs.flutter.dev › install › archive",
            sourceName: "Flutter Docs",
            scenes: [ {text: "<p>Delving into the Flutter SDK archive can be a journey through time. Here, you'll find past versions, each with its own set of features and compatibilities. This is crucial for maintaining older projects or specific development environments.</p>", image: "https://via.placeholder.com/400x250/34A853/FFFFFF?text=SDK+Archive"} ]
        },
        "story_flutter_windows": {
            id: "story_flutter_windows",
            title: "Windows",
            category: "digital_adventure",
            description: "12 Mar 2025 — Your choice informs which parts of Flutter tooling you configure to run your first Flutter app. You can set up additional platforms later.",
            favicon: "https://docs.flutter.dev/favicon.ico",
            urlText: "https://docs.flutter.dev › get-started › install",
            sourceName: "Flutter Docs",
            scenes: [ {text: "<p>Setting up Flutter for Windows development opens up a world of possibilities for desktop applications. This guide will walk you through the specific configurations needed.</p>", image: "https://via.placeholder.com/400x250/EA4335/FFFFFF?text=Flutter+on+Windows"} ]
        },

        // Fantasy Quest
        "story1": { // Existing "The Lost Chronicle of Eldoria"
            id: "story1",
            title: "The Lost Chronicle of Eldoria",
            category: "fantasy_quest",
            description: "A brave adventurer sets out to find the legendary Lost Chronicle, said to hold the secrets of an ancient civilization. Dangers lurk in every shadow, and allies are found in the most unexpected places.",
            favicon: "https://cdn-icons-png.flaticon.com/512/2918/2918244.png",
            urlText: "mystories.com/fantasy/eldoria",
            sourceName: "My Story Collection",
            scenes: [
                { text: "<p><span class='char-main'>Lyra</span> stood before the village council, the weight of Oakhaven's fading light heavy on her young shoulders. The blight was spreading, and hope was a dying ember.</p>", image: "assist/images/_how-storybee-ai-works-1.png"},
                { text: "<p>The ancient Elder, his voice a dry whisper, spoke of the Dragon's Ember. \"Only its fire can cleanse this land, child.\" <span class='char-sidekick'>Roric</span> the wizard grumbled his reluctant agreement to guide her.</p>", image: "assist/images/_how-storybee-ai-works-2.png"},
                { text: "<p>Their ascent of Whisperwind Peak was fraught with peril. Jagged rocks, howling winds, and creatures of shadow tested their resolve at every turn. \"Keep up, girl!\" <span class='char-sidekick'>Roric</span> barked, though a hint of concern was in his eyes.</p>", image: "assist/images/_how-storybee-ai-works-3.png"},
                { text: "<p>A magnificent Griffin, its feathers like polished gold, blocked their path. It was a trial of courage and wit, and only <span class='char-main'>Lyra</span>'s pure heart and Roric's ancient lore allowed them to pass.</p>", image: "assist/images/_how-storybee-ai-works-4.png"},
                { text: "<p>At the peak, they found <span class='char-villain'>Vorlag</span>, his form wreathed in shadow, attempting to corrupt the Ember. \"This power will be mine!\" he cackled, dark tendrils lashing out.</p>", image: "assist/images/_how-storybee-ai-works-1.png"},
                { text: "<p><span class='char-main'>Lyra</span>, channeling the faith of her village, and <span class='char-sidekick'>Roric</span>, unleashing a torrent of forgotten magic, battled <span class='char-villain'>Vorlag</span>. The Dragon's Ember flared to life, banishing the darkness and healing the land.</p>", image: "assist/images/_how-storybee-ai-works-2.png"}
            ]
        },
        "story_fq_2": {
            id: "story_fq_2",
            title: "The Orb of Whispering Woods",
            category: "fantasy_quest",
            description: "An ancient orb, hidden deep within the Whispering Woods, promises great power or great peril to whoever finds it.",
            favicon: "https://www.google.com/s2/favicons?domain=story.example.com",
            urlText: "eldritch.tales/fantasy/orb-woods",
            sourceName: "Eldritch Tales",
            scenes: [
                { text: "<p><span class='char-main'>Elara</span>, a nimble ranger, seeks the Orb to save her dying forest. The woods are treacherous, filled with illusions and guardians.</p>", image: "https://via.placeholder.com/400x250/8E44AD/FFFFFF?text=Whispering+Woods"},
                { text: "<p>She encounters <span class='char-neutral'>Fenrir</span>, a wise old wolf, who tests her spirit before guiding her further. The path is fraught with moral choices.</p>", image: "https://via.placeholder.com/400x250/8E44AD/FFFFFF?text=Ancient+Wolf"}
            ]
        },
        "story_fq_3": {
            id: "story_fq_3",
            title: "Siren's Song of the Sunken Kingdom",
            category: "fantasy_quest",
            description: "A haunting melody draws explorers to the ruins of a Sunken Kingdom, where untold treasures and forgotten magic await.",
            favicon: "https://www.google.com/s2/favicons?domain=story.example.com",
            urlText: "abyssal.stories/fantasy/sunken-kingdom",
            sourceName: "Abyssal Stories",
            scenes: [
                { text: "<p><span class='char-main'>Captain Kael</span> and his crew are lured by the Siren's Song, hoping to find the lost Trident of Aquaria.</p>", image: "https://via.placeholder.com/400x250/8E44AD/FFFFFF?text=Sunken+Ruins"},
                { text: "<p><span class='char-villain'>The Siren Queen</span> protects her domain fiercely, using illusions and monstrous krakens to deter intruders.</p>", image: "https://via.placeholder.com/400x250/8E44AD/FFFFFF?text=Siren+Queen"}
            ]
        },

        // Sci-Fi Mystery
        "story_sfm_1": {
            id: "story_sfm_1",
            title: "Echoes from Kepler-186f",
            category: "sci_fi_mystery",
            description: "A faint, repeating signal from the habitable exoplanet Kepler-186f baffles scientists. Is it a natural phenomenon, or something more?",
            favicon: "https://www.google.com/s2/favicons?domain=story.example.com",
            urlText: "cosmic.mysteries/scifi/kepler-echoes",
            sourceName: "Cosmic Mysteries",
            scenes: [
                { text: "<p>Dr. <span class='char-main'>Aris Thorne</span>, a brilliant but disgraced astrophysicist, is brought in to decipher the alien signal.</p>", image: "https://via.placeholder.com/400x250/2980B9/FFFFFF?text=Alien+Signal"},
                { text: "<p>The signal appears to be a distress call, but a shadowy organization, <span class='char-villain'>Orion Corp</span>, tries to suppress the discovery.</p>", image: "https://via.placeholder.com/400x250/2980B9/FFFFFF?text=Shadowy+Corp"}
            ]
        },
        "story_sfm_2": {
            id: "story_sfm_2",
            title: "The Chronos Anomaly",
            category: "sci_fi_mystery",
            description: "Objects and people start disappearing and reappearing at different points in time around a research station. A time-traveling detective must solve the anomaly.",
            favicon: "https://www.google.com/s2/favicons?domain=story.example.com",
            urlText: "temporal.investigations/scifi/chronos",
            sourceName: "Temporal Investigations",
            scenes: [
                { text: "<p><span class='char-main'>Agent Paradox</span>, a temporal regulator, arrives at Station Chronos to investigate the bizarre occurrences.</p>", image: "https://via.placeholder.com/400x250/2980B9/FFFFFF?text=Time+Anomaly"},
                { text: "<p>He discovers the station's lead scientist, <span class='char-neutral'>Dr. Eva Rostova</span>, may have accidentally created the anomaly while experimenting with temporal mechanics.</p>", image: "https://via.placeholder.com/400x250/2980B9/FFFFFF?text=Temporal+Experiment"}
            ]
        },

        // Historical Fiction
        "story_hf_1": {
            id: "story_hf_1",
            title: "The Silk Weaver of Samarkand",
            category: "historical_fiction",
            description: "In the heart of the Silk Road, a young weaver's extraordinary talent catches the eye of a powerful Khan, embroiling her in courtly intrigue and a fight for her art.",
            favicon: "https://www.google.com/s2/favicons?domain=story.example.com",
            urlText: "ancient.threads/historical/samarkand",
            sourceName: "Ancient Threads",
            scenes: [
                { text: "<p><span class='char-main'>Layla</span>'s silks are renowned for their beauty, but her unique patterns hold secrets from a forgotten dynasty.</p>", image: "https://via.placeholder.com/400x250/C0392B/FFFFFF?text=Samarkand+Market"},
                { text: "<p><span class='char-villain'>Vizier Jafar</span> covets Layla's secrets for his own ambitions, threatening her family and her craft.</p>", image: "https://via.placeholder.com/400x250/C0392B/FFFFFF?text=Courtly+Intrigue"}
            ]
        },
        "story_hf_2": {
            id: "story_hf_2",
            title: "Secrets of the Nile Pharaoh",
            category: "historical_fiction",
            description: "During the reign of a young Pharaoh, a clever scribe uncovers a conspiracy that threatens to topple the entire kingdom.",
            favicon: "https://www.google.com/s2/favicons?domain=story.example.com",
            urlText: "egyptian.sagas/historical/nile-secrets",
            sourceName: "Egyptian Sagas",
            scenes: [
                { text: "<p><span class='char-main'>Ameni</span>, a humble scribe, accidentally deciphers a coded message revealing a plot against Pharaoh <span class='char-neutral'>Tutankhamun</span>.</p>", image: "https://via.placeholder.com/400x250/C0392B/FFFFFF?text=Ancient+Egypt"},
                { text: "<p>He must navigate the treacherous royal court, unsure who to trust, as <span class='char-villain'>High Priest Ankh-haf</span> pulls the strings from the shadows.</p>", image: "https://via.placeholder.com/400x250/C0392B/FFFFFF?text=Pharaoh's+Court"}
            ]
        },

        // Superhero Origin
        "story_sho_1": {
            id: "story_sho_1",
            title: "The Comet's Gift: Aurora Knight",
            category: "superhero_origin",
            description: "A passing comet imbues an ordinary astronomer with incredible powers, forcing her to become the protector of her city.",
            favicon: "https://www.google.com/s2/favicons?domain=story.example.com",
            urlText: "heroic.origins/superhero/aurora-knight",
            sourceName: "Heroic Origins",
            scenes: [
                { text: "<p>Dr. <span class='char-main'>Lena Hanson</span> gains the ability to manipulate light after observing a rare comet. She becomes Aurora Knight!</p>", image: "https://via.placeholder.com/400x250/F39C12/FFFFFF?text=Comet+Impact"},
                { text: "<p>Her first nemesis, <span class='char-villain'>Nocturne</span>, who thrives in darkness, challenges her control over her newfound powers.</p>", image: "https://via.placeholder.com/400x250/F39C12/FFFFFF?text=City+Protector"}
            ]
        },
        "story_sho_2": {
            id: "story_sho_2",
            title: "Project Chimera: The Urban Legend",
            category: "superhero_origin",
            description: "A failed military experiment escapes, developing animalistic abilities and becoming an urban legend while trying to find his humanity.",
            favicon: "https://www.google.com/s2/favicons?domain=story.example.com",
            urlText: "covert.chronicles/superhero/chimera",
            sourceName: "Covert Chronicles",
            scenes: [
                { text: "<p><span class='char-main'>Subject X</span>, later known as 'The Chimera', escapes a secret lab, displaying enhanced senses and strength.</p>", image: "https://via.placeholder.com/400x250/F39C12/FFFFFF?text=Lab+Escape"},
                { text: "<p>Hunted by his creator, <span class='char-villain'>General Rexford</span>, The Chimera must decide whether to be a monster or a hero.</p>", image: "https://via.placeholder.com/400x250/F39C12/FFFFFF?text=Urban+Shadows"}
            ]
        },

        // Children's Tale
        "story_ct_1": {
            id: "story_ct_1",
            title: "Barnaby Bear's Big Adventure",
            category: "childrens_tale",
            description: "Barnaby Bear, a curious little cub, wanders off from his family and discovers a magical, hidden part of the forest.",
            favicon: "https://www.google.com/s2/favicons?domain=story.example.com",
            urlText: "tiny.tales/children/barnaby-bear",
            sourceName: "Tiny Tales",
            scenes: [
                { text: "<p><span class='char-main'>Barnaby Bear</span> follows a sparkling butterfly deep into the woods, farther than he's ever gone before.</p>", image: "https://via.placeholder.com/400x250/2ECC71/FFFFFF?text=Curious+Bear"},
                { text: "<p>He meets friendly talking animals like <span class='char-sidekick'>Squeaky Squirrel</span> and <span class='char-neutral'>Professor Hoot</span> the owl, who help him find his way back after a fun-filled day.</p>", image: "https://via.placeholder.com/400x250/2ECC71/FFFFFF?text=Forest+Friends"}
            ]
        },
        "story_ct_2": {
            id: "story_ct_2",
            title: "The Little Cloud Who Couldn't Rain",
            category: "childrens_tale",
            description: "A small, fluffy cloud named Nimbus wants to help the thirsty flowers below, but he just can't seem to make it rain!",
            favicon: "https://www.google.com/s2/favicons?domain=story.example.com",
            urlText: "sky.stories/children/nimbus-cloud",
            sourceName: "Sky Stories",
            scenes: [
                { text: "<p><span class='char-main'>Nimbus</span> tries everything to rain – huffing, puffing, even jumping up and down – but only tiny drizzles appear.</p>", image: "https://via.placeholder.com/400x250/2ECC71/FFFFFF?text=Sad+Cloud"},
                { text: "<p>With the help of the <span class='char-neutral'>Wise Old Wind</span> and by believing in himself, Nimbus finally learns how to make a beautiful, gentle shower for the happy flowers.</p>", image: "https://via.placeholder.com/400x250/2ECC71/FFFFFF?text=Happy+Rain"}
            ]
        },

        // Horror Survival
        "story_hs_1": {
            id: "story_hs_1",
            title: "The Last Broadcast from Station Epsilon",
            category: "horror_survival",
            description: "A remote Arctic research station goes silent. A rescue team arrives to find chilling evidence of what happened and must survive the same fate.",
            favicon: "https://www.google.com/s2/favicons?domain=story.example.com",
            urlText: "chilling.accounts/horror/epsilon-station",
            sourceName: "Chilling Accounts",
            scenes: [
                { text: "<p>The rescue team, led by <span class='char-main'>Captain Eva Rostova</span>, finds Station Epsilon deserted, with unsettling signs of a struggle and a strange, alien biomass.</p>", image: "https://via.placeholder.com/400x250/7F8C8D/FFFFFF?text=Arctic+Station"},
                { text: "<p>One by one, team members fall prey to an unseen <span class='char-villain'>creature</span> that mimics its victims, sowing paranoia and terror.</p>", image: "https://via.placeholder.com/400x250/7F8C8D/FFFFFF?text=Unseen+Horror"}
            ]
        },
        "story_hs_2": {
            id: "story_hs_2",
            title: "Beneath the Crimson Moor",
            category: "horror_survival",
            description: "Travelers who stray onto the mist-shrouded Crimson Moor are said to never return, their souls trapped by an ancient curse.",
            favicon: "https://www.google.com/s2/favicons?domain=story.example.com",
            urlText: "cursed.lands/horror/crimson-moor",
            sourceName: "Cursed Lands",
            scenes: [
                { text: "<p>A group of hikers, including <span class='char-main'>Liam</span> and his sister <span class='char-sidekick'>Chloe</span>, get lost and find themselves on the dreaded Crimson Moor as night falls.</p>", image: "https://via.placeholder.com/400x250/7F8C8D/FFFFFF?text=Misty+Moor"},
                { text: "<p>They are stalked by <span class='char-villain'>spectral figures</span>, the spirits of those previously lost, and must find the moor's ancient warding stone to escape before dawn.</p>", image: "https://via.placeholder.com/400x250/7F8C8D/FFFFFF?text=Spectral+Figures"}
            ]
        },

        // Romantic Comedy
        "story_rc_1": {
            id: "story_rc_1",
            title: "Latte, Love, and Lost Luggage",
            category: "romantic_comedy",
            description: "Two strangers with identical suitcases accidentally swap bags at the airport, leading to a chaotic and hilarious series of encounters as they try to retrieve their belongings.",
            favicon: "https://www.google.com/s2/favicons?domain=story.example.com",
            urlText: "charming.mixups/romcom/lost-luggage",
            sourceName: "Charming Mixups",
            scenes: [
                { text: "<p><span class='char-main'>Ava</span>, a meticulous planner, is horrified to find her suitcase full of men's clothes, while <span class='char-sidekick'>Leo</span>, a free-spirited artist, is bewildered by her power suits.</p>", image: "https://via.placeholder.com/400x250/FF69B4/FFFFFF?text=Airport+Mixup"},
                { text: "<p>Their attempts to meet and exchange bags are thwarted by a series of comical misunderstandings, but they start to find each other surprisingly charming.</p>", image: "https://via.placeholder.com/400x250/FF69B4/FFFFFF?text=Coffee+Date"}
            ]
        },
        "story_rc_2": {
            id: "story_rc_2",
            title: "My Accidental Book Club Fiancé",
            category: "romantic_comedy",
            description: "To impress her literary-minded boss, a woman claims to be engaged to a man she just met at a book club. Now they have to keep up the charade.",
            favicon: "https://www.google.com/s2/favicons?domain=story.example.com",
            urlText: "quirky.engagements/romcom/book-club-fiance",
            sourceName: "Quirky Engagements",
            scenes: [
                { text: "<p><span class='char-main'>Chloe</span> blurts out she's engaged to <span class='char-neutral'>Ethan</span>, a quiet academic, after he makes an insightful comment at book club.</p>", image: "https://via.placeholder.com/400x250/FF69B4/FFFFFF?text=Book+Club+Meeting"},
                { text: "<p>As they navigate fake dates and family dinners, their pretend romance starts to feel surprisingly real, much to their confusion and delight.</p>", image: "https://via.placeholder.com/400x250/FF69B4/FFFFFF?text=Awkward+Dinner"}
            ]
        },

        // Western Frontier
        "story_wf_1": {
            id: "story_wf_1",
            title: "Dust Devil's Gold",
            category: "western_frontier",
            description: "A grizzled prospector, a determined schoolteacher, and a cunning outlaw all seek a legendary lost gold mine in the treacherous Arizona desert.",
            favicon: "https://www.google.com/s2/favicons?domain=story.example.com",
            urlText: "wild.west.legends/western/dust-devil-gold",
            sourceName: "Wild West Legends",
            scenes: [
                { text: "<p><span class='char-main'>Jedediah 'Dusty' Miller</span> believes he's finally found the map to the mythical 'Oro Perdido'.</p>", image: "https://via.placeholder.com/400x250/D2691E/FFFFFF?text=Desert+Prospector"},
                { text: "<p>He's pursued by the ruthless <span class='char-villain'>Black Bart</span> and his gang, but finds an unlikely ally in <span class='char-sidekick'>Miss Abigail</span>, who has her own reasons for finding the mine.</p>", image: "https://via.placeholder.com/400x250/D2691E/FFFFFF?text=Outlaw+Chase"}
            ]
        },
        "story_wf_2": {
            id: "story_wf_2",
            title: "The Sheriff of Redemption Gulch",
            category: "western_frontier",
            description: "A former gunslinger, trying to live a peaceful life, is forced to pin on the sheriff's badge when a ruthless cattle baron threatens his newfound home.",
            favicon: "https://www.google.com/s2/favicons?domain=story.example.com",
            urlText: "frontier.justice/western/redemption-gulch",
            sourceName: "Frontier Justice",
            scenes: [
                { text: "<p><span class='char-main'>Silas ' शांत Hand' Kane</span> wants to leave his violent past behind in the quiet town of Redemption Gulch.</p>", image: "https://via.placeholder.com/400x250/D2691E/FFFFFF?text=Old+West+Town"},
                { text: "<p>But when <span class='char-villain'>Baron von Steuben</span> and his hired guns try to seize the town's water rights, Silas must become the lawman he never wanted to be.</p>", image: "https://via.placeholder.com/400x250/D2691E/FFFFFF?text=Showdown+Time"}
            ]
        },

        // Mythological Epic
        "story_me_1": {
            id: "story_me_1",
            title: "The Trials of Enkidu's Heir",
            category: "mythological_epic",
            description: "Generations after Gilgamesh, the descendant of Enkidu must undertake twelve impossible trials to appease restless gods and save humanity from a divine plague.",
            favicon: "https://www.google.com/s2/favicons?domain=story.example.com",
            urlText: "epic.myths/mythology/enkidu-heir",
            sourceName: "Epic Myths",
            scenes: [
                { text: "<p><span class='char-main'>Shamhat</span>, bearing the wild spirit of Enkidu, is chosen by the Fates to face the divine trials set by the angered god <span class='char-villain'>Anu</span>.</p>", image: "https://via.placeholder.com/400x250/16A085/FFFFFF?text=Ancient+Mesopotamia"},
                { text: "<p>Guided by visions from the goddess <span class='char-neutral'>Ishtar</span>, Shamhat battles mythical beasts and outwits cunning deities in her quest.</p>", image: "https://via.placeholder.com/400x250/16A085/FFFFFF?text=Divine+Trials"}
            ]
        },
        "story_me_2": {
            id: "story_me_2",
            title: "Valkyrie's Choice: Ragnarok's Dawn",
            category: "mythological_epic",
            description: "As Ragnarok approaches, a young Valkyrie must choose between her loyalty to Odin and a forbidden love that could alter the fate of the Nine Realms.",
            favicon: "https://www.google.com/s2/favicons?domain=story.example.com",
            urlText: "norse.sagas/mythology/valkyrie-choice",
            sourceName: "Norse Sagas",
            scenes: [
                { text: "<p><span class='char-main'>Brynhildr</span>, a fierce Valkyrie, questions Odin's decrees as she witnesses the signs of the world's end.</p>", image: "https://via.placeholder.com/400x250/16A085/FFFFFF?text=Asgardian+Warrior"},
                { text: "<p>Her love for the mortal hero <span class='char-sidekick'>Sigurd</span> puts her at odds with <span class='char-villain'>Loki</span>, who seeks to hasten Ragnarok for his own chaotic purposes.</p>", image: "https://via.placeholder.com/400x250/16A085/FFFFFF?text=Ragnarok+Looms"}
            ]
        }
};

document.addEventListener('DOMContentLoaded', () => {
    const pageLoader = document.getElementById('page-loader');
    const overlaySelectors = '.modal.visible, .feedback-popup.show, .story-history-panel.open, .prompt-library-panel.open';

    // --- Show loader at the beginning of page load ---
    if (pageLoader) pageLoader.classList.add('show');

    // --- Helper to get current page identifier ---
    function getCurrentPageName() {
        const path = window.location.pathname;
        const pageName = path.substring(path.lastIndexOf('/') + 1).replace('.html', '');
        if (pageName === '' || pageName === 'index') return 'idea-page';
        if (pageName === 'story') return 'story-page';
        if (pageName === 'privacy_policy') return 'privacy-policy-page';
        if (pageName === 'terms_of_service') return 'terms-of-service-page';
        if (pageName === 'contact_us') return 'contact-us-page';
        if (pageName === 'profile') return 'profile-page';
        return pageName; // Fallback
    }
    const currentPageId = getCurrentPageName();

    // --- Global Header Elements (should exist on all pages via _header.html) ---
    const storyAILogo = document.querySelector('header.storyai-header .logo');
    const appsIconBtn = document.getElementById('apps-icon-btn');
    const appsGrid = document.getElementById('apps-grid');
    const profileAvatarBtn = document.getElementById('profile-avatar-btn');
    const profileDropdown = document.getElementById('profile-dropdown');
    const closeProfileDropdownButton = profileDropdown ? profileDropdown.querySelector('.close-profile-dropdown-btn') : null;
    const storyProgressAppBtn = document.getElementById('story-progress-app-btn');
    const storyHistoryAppBtn = document.getElementById('story-history-app-btn');
    const promptLibraryAppGridBtn = document.getElementById('prompt-library-app-grid-btn');
    const mainStoryAIHeader = document.querySelector('header.storyai-header');
    const breadcrumbsElement = document.querySelector('.breadcrumbs');
    const profileGreetingHeader = profileDropdown ? profileDropdown.querySelector('.profile-greeting') : null; // For updating name
    const profilePicLargeInDropdown = profileDropdown ? profileDropdown.querySelector('.profile-pic-large') : null; // For updating avatar

    // --- Page specific elements (check for existence before use) ---
    const ideaPage = document.getElementById('idea-page');
    const storyPage = document.getElementById('story-page');
    // privacyPolicyPage, termsPage, contactPage are mostly static content containers.
    const profilePage = document.getElementById('profile-page');

    const aiStoryInsightInput = document.getElementById('ai-story-insight-input');
    const storyCategorySelect = document.getElementById('story-category');

    const storyMainTitleText = document.getElementById('story-main-title-text');
    const breadcrumbCurrentStory = document.getElementById('breadcrumb-current-story');
    const storyOutput = document.getElementById('story-output');
    const downloadStoryBtn = document.getElementById('download-story-btn');

    const storyProgressModal = document.getElementById('story-progress-modal');
    const closeStoryProgressModalBtn = document.getElementById('close-story-progress-modal-btn');
    // ... (other storyProgressModal sub-elements will be checked before use)

    const aiInputAnimatedBorder = document.querySelector('#idea-page .ai-input-animated-border');
    const ideaPageInputArea = document.querySelector('#idea-page .idea-input-area');


    let currentSearchQuery = ""; // Potentially manage via localStorage if needed across sessions for specific flows
    let currentSearchCategory = "all";
    let userSearchHistory = []; // Loaded from localStorage

    // Contact Form & Popup Elements (in footer, so should exist)
    const contactForm = document.getElementById('contact-form');
    const feedbackSuccessPopup = document.getElementById('feedback-success-popup');
    const feedbackPopupCloseBtn = feedbackSuccessPopup ? feedbackSuccessPopup.querySelector('.feedback-popup-close-btn') : null;
    const openFeedbackFormBtn = document.getElementById('open-feedback-form-btn'); // Only on contact_us.html
    const feedbackFormModal = document.getElementById('feedback-form-modal');
    const closeFeedbackFormModalBtn = document.getElementById('close-feedback-form-modal-btn');
    let feedbackPopupTimeout;

    const downloadSuccessPopup = document.getElementById('download-success-popup');
    const downloadSuccessPopupCloseBtn = document.getElementById('download-success-popup-close-btn');
    let downloadPopupTimeout;

    const historyClearedPopup = document.getElementById('history-cleared-popup');
    const historyClearedPopupCloseBtn = historyClearedPopup ? historyClearedPopup.querySelector('.feedback-popup-close-btn') : null;
    let historyClearedPopupTimeout;

    const profileUpdatedPopup = document.getElementById('profile-updated-popup');
    const profileUpdatedPopupCloseBtn = profileUpdatedPopup ? profileUpdatedPopup.querySelector('.feedback-popup-close-btn') : null;
    let profileUpdatedPopupTimeout;

    const changePasswordBtn = document.getElementById('change-password-btn'); // Only on profile.html
    const changePasswordOtpModal = document.getElementById('change-password-otp-modal');
    const closeChangePasswordOtpModalBtn = document.getElementById('close-change-password-otp-modal-btn');
    const changePasswordModalTitle = document.getElementById('change-password-modal-title');
    const otpEntrySection = document.getElementById('otp-entry-section');
    const otpInputEl = document.getElementById('otp-input');
    const otpErrorEl = document.getElementById('otp-error');
    const verifyOtpBtn = document.getElementById('verify-otp-btn');
    const newPasswordSection = document.getElementById('new-password-section');
    const newPasswordInputEl = document.getElementById('new-password-input');
    const newPasswordErrorEl = document.getElementById('new-password-error');
    const confirmPasswordInputEl = document.getElementById('confirm-password-input');
    const confirmPasswordErrorEl = document.getElementById('confirm-password-error');
    const updatePasswordBtn = document.getElementById('update-password-btn');
    let mockOtp = "";

    const accountSecuredPopup = document.getElementById('account-secured-popup');
    const accountSecuredPopupCloseBtn = accountSecuredPopup ? accountSecuredPopup.querySelector('.feedback-popup-close-btn') : null;
    let accountSecuredPopupTimeout;

    const signOutLink = document.getElementById('sign-out-link');
    const signOutConfirmPopup = document.getElementById('sign-out-confirm-popup');
    const cancelSignOutBtn = document.getElementById('cancel-sign-out-btn');
    const confirmSignOutBtn = document.getElementById('confirm-sign-out-btn');

    const noStoryFoundImageURL = "assist/images/Animation - 1748261685039.gif";

    const deleteDataModal = document.getElementById('delete-data-modal');
    const openDeleteHistoryModalBtn = document.getElementById('open-delete-history-modal-btn');
    const closeDeleteDataModalBtn = document.getElementById('close-delete-data-modal-btn');
    const deleteDataTabBtns = document.querySelectorAll('.delete-data-tab-btn');
    const deleteDataTabContents = document.querySelectorAll('.delete-data-tab-content');
    const cancelDeleteDataBtn = document.getElementById('cancel-delete-data-btn');
    const confirmDeleteDataBtn = document.getElementById('confirm-delete-data-btn');

    // Profile Page specific elements
    const profilePageAvatarDisplay = document.getElementById('profile-page-avatar-display');
    const profileImageUpload = document.getElementById('profile-image-upload');
    const changeProfilePicProfilePageBtn = document.getElementById('change-profile-pic-profile-page-btn');
    const profileNameInputEl = document.getElementById('profile-name-input');
    const profileEmailInputEl = document.getElementById('profile-email-input');
    const saveProfileChangesBtn = document.getElementById('save-profile-changes-btn');
    const changeProfilePicBtnInDropdown = profileDropdown ? profileDropdown.querySelector('.change-profile-pic-btn') : null;


    function getRandomPastelColor() {
        const hue = Math.floor(Math.random() * 360);
        const saturation = Math.floor(Math.random() * 25) + 60; // 60-85%
        const lightness = Math.floor(Math.random() * 15) + 80; // 80-95%
        return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    }

    // --- Speech Recognition (Global, but button/input specific to idea-page) ---
    let activeSpeechRecognition = null;
    function setupSpeechRecognition(micButtonElement, inputElement, defaultPlaceholder) {
        // ... (speech recognition code remains the same, ensure it's only called if elements exist)
        if (!micButtonElement || !inputElement) return;
        const SpeechRecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognitionAPI) {
            console.warn('Speech API not supported.');
            micButtonElement.style.display = 'none';
            micButtonElement.title = "Voice input not available";
            return;
        }
        const recognition = new SpeechRecognitionAPI();
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = 'en-US';
        let isListening = false;
        let textInInputWhenMicStarted = '';
        recognition.onstart = () => { isListening = true; micButtonElement.classList.add('mic-active'); textInInputWhenMicStarted = inputElement.value.trim(); inputElement.placeholder = "Listening..."; inputElement.focus(); if (activeSpeechRecognition && activeSpeechRecognition !== recognition) activeSpeechRecognition.stop(); activeSpeechRecognition = recognition; };
        recognition.onresult = (event) => { let interim_transcript = ''; let final_transcript = ''; for (let i = event.resultIndex; i < event.results.length; ++i) { if (event.results[i].isFinal) final_transcript += event.results[i][0].transcript; else interim_transcript += event.results[i][0].transcript; } let spokenText = (final_transcript + interim_transcript).trim(); if (textInInputWhenMicStarted && spokenText) inputElement.value = textInInputWhenMicStarted + ' ' + spokenText; else if (spokenText) inputElement.value = spokenText; else inputElement.value = textInInputWhenMicStarted; inputElement.dispatchEvent(new Event('input', { bubbles: true, cancelable: true })); };
        recognition.onerror = (event) => { console.error('Speech recognition error:', event.error, 'Mic:', micButtonElement.id || 'N/A'); if (event.error === 'no-speech') console.log('No speech detected.'); else if (event.error === 'audio-capture') alert('Microphone not found or not accessible.'); else if (event.error === 'not-allowed') alert('Microphone access denied.'); if (isListening) { micButtonElement.classList.remove('mic-active'); inputElement.placeholder = defaultPlaceholder; isListening = false; } if (activeSpeechRecognition === recognition) activeSpeechRecognition = null; };
        recognition.onend = () => { micButtonElement.classList.remove('mic-active'); inputElement.placeholder = defaultPlaceholder; isListening = false; if (activeSpeechRecognition === recognition) activeSpeechRecognition = null; };
        micButtonElement.addEventListener('click', (e) => { e.stopPropagation(); if (isListening) { recognition.stop(); } else { if (activeSpeechRecognition && activeSpeechRecognition !== recognition) activeSpeechRecognition.stop(); try { navigator.mediaDevices.getUserMedia({ audio: true }).then(() => recognition.start()).catch(err => { console.error("Mic permission error:", err); if (err.name === "NotAllowedError" || err.name === "PermissionDeniedError") alert('Mic access denied.'); else if (err.name === "NotFoundError" || err.name === "DevicesNotFoundError") alert('No mic found.'); else alert('Could not access mic: ' + err.message); micButtonElement.classList.remove('mic-active'); inputElement.placeholder = defaultPlaceholder; isListening = false; }); } catch (ex) { console.error("Error starting speech recognition:", ex); alert("Could not start voice recognition."); micButtonElement.classList.remove('mic-active'); inputElement.placeholder = defaultPlaceholder; isListening = false; } } });
        micButtonElement.title = "Search by voice";
    }

    if (currentPageId === 'idea-page') {
        const ideaPageMicBtn = document.querySelector('#idea-page .mic-icon-google');
        const ideaPageInput = document.getElementById('ai-story-insight-input');
        if (ideaPageMicBtn && ideaPageInput) {
            setupSpeechRecognition(ideaPageMicBtn, ideaPageInput, "Describe your story idea here...");
        }
    }


    // --- Page UI Initialization ---
    function initializePageUI(pageId) {
        if (breadcrumbsElement) {
            breadcrumbsElement.classList.toggle('hidden', pageId !== 'story-page');
        }
        if (mainStoryAIHeader) {
            mainStoryAIHeader.classList.toggle('header-idea-page', pageId === 'idea-page');
            mainStoryAIHeader.style.display = 'flex'; // Always show header
        }

        if (pageId === 'idea-page' && aiInputAnimatedBorder && ideaPageInputArea) {
            if (aiInputAnimatedBorder.parentNode !== ideaPageInputArea) {
                if(aiInputAnimatedBorder.parentNode) aiInputAnimatedBorder.parentNode.removeChild(aiInputAnimatedBorder);
                ideaPageInputArea.appendChild(aiInputAnimatedBorder);
            }
            aiInputAnimatedBorder.style.display = 'flex';
        } else if (aiInputAnimatedBorder) {
            aiInputAnimatedBorder.style.display = 'none';
        }

        const isMainAppPageForProgressBtn = ['idea-page', 'story-page'].includes(pageId);
        if (storyProgressAppBtn && storyProgressAppBtn.closest('.app-item')) {
            storyProgressAppBtn.closest('.app-item').classList.toggle('hidden', !isMainAppPageForProgressBtn || pageId === 'idea-page');
        }

        if (pageId === 'story-page' && storyPage) {
            storyPage.style.backgroundColor = getRandomPastelColor();
        } else if (storyPage) {
            storyPage.style.backgroundColor = ''; // Reset for other pages if storyPage element is found somehow
        }
        window.scrollTo(0, 0);
    }
    initializePageUI(currentPageId);


    // --- Search and Story Navigation Logic ---
    function handleSearchOrHistoryNavigation(query, category) {
        query = query ? query.trim() : "";
        category = category || "all";

        if (query || (category && category !== "all")) {
            addSearchToHistory(query, category);
        }

        const directMatch = Object.values(allStoriesData).find(s =>
            s.title.toLowerCase() === query.toLowerCase() &&
            (category === "all" || s.category === category)
        );

        if (directMatch) {
            window.location.href = `story.html?storyId=${directMatch.id}`;
        } else {
            window.location.href = `story.html?notFound=true&query=${encodeURIComponent(query)}&category=${encodeURIComponent(category)}`;
        }
    }

    if (currentPageId === 'idea-page' && aiStoryInsightInput) {
        aiStoryInsightInput.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                event.preventDefault();
                const ideaQuery = aiStoryInsightInput.value.trim();
                if (ideaQuery) {
                    const selectedCat = storyCategorySelect ? storyCategorySelect.value : "all";
                    handleSearchOrHistoryNavigation(ideaQuery, selectedCat);
                }
            }
        });
        const ideaPageSearchIcon = document.querySelector('#idea-page .search-icon-google');
        if (ideaPageSearchIcon) {
            ideaPageSearchIcon.addEventListener('click', () => {
                const ideaQuery = aiStoryInsightInput.value.trim();
                if (ideaQuery) {
                    const selectedCat = storyCategorySelect ? storyCategorySelect.value : "all";
                    handleSearchOrHistoryNavigation(ideaQuery, selectedCat);
                }
            });
        }
    }

    // --- Story Page Specific Logic ---
    function displayStoryContent(title, scenes) {
        if (storyMainTitleText) storyMainTitleText.textContent = title;
        if (breadcrumbCurrentStory) breadcrumbCurrentStory.textContent = title;
        if (storyOutput) {
            storyOutput.innerHTML = ''; // Clear previous content
            if (!scenes || scenes.length === 0) {
                storyOutput.innerHTML = `<div class="no-story-found-message"><img src="${noStoryFoundImageURL}" alt="No story content found"><span>Story content is not found for "${title}".</span></div>`;
                return;
            }
            for (let i = 0; i < scenes.length; i++) {
                const scene = scenes[i];
                const sceneContainer = document.createElement('div');
                sceneContainer.classList.add('story-scene');
                const imageContainer = document.createElement('div');
                imageContainer.classList.add('scene-image-container');
                const imgElement = document.createElement('img');
                imgElement.src = scene.image || `https://via.placeholder.com/400x250/eef2f2/2A6252?text=Scene+${i + 1}`;
                imgElement.alt = `Scene ${i + 1} from ${title}`;
                imgElement.onerror = function() { this.src = `https://via.placeholder.com/400x250/FF0000/FFFFFF?text=Image+Error`; this.alt = `Error loading image for scene ${i + 1}`; };
                imageContainer.appendChild(imgElement);
                const textContainer = document.createElement('div');
                textContainer.classList.add('scene-text-container');
                textContainer.innerHTML = scene.text || "<p>No text provided for this scene.</p>";
                sceneContainer.appendChild(imageContainer);
                sceneContainer.appendChild(textContainer);
                storyOutput.appendChild(sceneContainer);
            }
        }
    }

    if (currentPageId === 'story-page') {
        const urlParams = new URLSearchParams(window.location.search);
        const storyId = urlParams.get('storyId');
        const notFound = urlParams.get('notFound');
        const query = urlParams.get('query');
        // const category = urlParams.get('category'); // If needed for display

        if (storyId) {
            const storyData = allStoriesData[storyId];
            if (storyData) {
                displayStoryContent(storyData.title, storyData.scenes);
            } else {
                if (storyMainTitleText) storyMainTitleText.textContent = "Story Not Found";
                if (storyOutput) storyOutput.innerHTML = `<div class="no-story-found-message"><img src="${noStoryFoundImageURL}" alt="No story content found"><span>Story with ID "${storyId}" was not found.</span></div>`;
                if (breadcrumbCurrentStory) breadcrumbCurrentStory.textContent = "Not Found";
            }
        } else if (notFound === 'true') {
            if (storyMainTitleText) storyMainTitleText.textContent = "Story Not Found";
            if (storyOutput) storyOutput.innerHTML = `<div class="no-story-found-message"><img src="${noStoryFoundImageURL}" alt="No story content found"><span>No story found for "${decodeURIComponent(query || '')}". Try a different idea.</span></div>`;
            if (breadcrumbCurrentStory) breadcrumbCurrentStory.textContent = "Not Found";
        } else {
            // No relevant parameters, maybe redirect or show a generic message
            if (storyMainTitleText) storyMainTitleText.textContent = "No Story Selected";
            if (storyOutput) storyOutput.innerHTML = `<div class="no-story-found-message"><img src="${noStoryFoundImageURL}" alt="No story content found"><span>Please start by searching for a story idea.</span> <br><br> <a href="index.html" class="btn btn-primary">Go to Story Ideas</a></div>`;
            if (breadcrumbCurrentStory) breadcrumbCurrentStory.textContent = "No Story";
        }
    }


    // --- Story Progress Modal ---
    function resetStoryProgressModal() { /* ... same as before, ensure elements exist ... */
        const plotListUl = storyProgressModal ? storyProgressModal.querySelector('#plot-list') : null;
        const castListUl = storyProgressModal ? storyProgressModal.querySelector('#cast-list') : null;
        const ideaOverallIcon = storyProgressModal ? storyProgressModal.querySelector('#idea-overall-icon') : null;
        const ideaStatus = storyProgressModal ? storyProgressModal.querySelector('#idea-status') : null;
        const detailIdeaEntered = storyProgressModal ? storyProgressModal.querySelector('#detail-idea-entered') : null;
        const detailStoryElements = storyProgressModal ? storyProgressModal.querySelector('#detail-story-elements') : null;
        const detailCoverImage = storyProgressModal ? storyProgressModal.querySelector('#detail-cover-image') : null;
        const storyWritingOverallIcon = storyProgressModal ? storyProgressModal.querySelector('#story-writing-overall-icon') : null;
        const storyWritingStatus = storyProgressModal ? storyProgressModal.querySelector('#story-writing-status') : null;

        [detailIdeaEntered, detailStoryElements, detailCoverImage].forEach(el => { if (el && el.id) { const originalText = el.id.replace('detail-', '').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()); el.innerHTML = `<i class="far fa-circle"></i> ${originalText}`; el.classList.remove('completed');} });
        if (ideaStatus) ideaStatus.textContent = "Your idea is transformed";
        if (ideaOverallIcon) ideaOverallIcon.className = 'icon fas fa-check-circle completed';
        if (storyWritingStatus) storyWritingStatus.textContent = "Your story is being written...";
        if (storyWritingOverallIcon) storyWritingOverallIcon.className = 'icon far fa-circle pending';
        if (plotListUl) plotListUl.innerHTML = '';
        if (castListUl) castListUl.innerHTML = '';
        if (storyOutput && currentPageId === 'story-page') storyOutput.innerHTML = ''; // Only clear if on story page
    }

    if (storyProgressModal) {
        const modalCollapsibleHeaders = storyProgressModal.querySelectorAll('.collapsible-header');
        modalCollapsibleHeaders.forEach(header => {
            header.addEventListener('click', () => {
                header.classList.toggle('active');
                const content = header.nextElementSibling;
                if (content && content.classList.contains('collapsible-content')) {
                    content.classList.toggle('open');
                }
            });
        });
    }
    function openStoryProgressModal() { /* ... same as before ... */
        if (!storyProgressModal) return; storyProgressModal.classList.remove('hiding'); storyProgressModal.style.display = 'flex'; requestAnimationFrame(() => storyProgressModal.classList.add('visible')); document.body.style.overflow = 'hidden';
    }
    function closeStoryProgressModal() { /* ... same as before ... */
        if (!storyProgressModal || !storyProgressModal.classList.contains('visible')) return;
        storyProgressModal.classList.remove('visible');
        storyProgressModal.classList.add('hiding');
        const onHidingAnimationEnd = (event) => {
            if (event.target === storyProgressModal && storyProgressModal.classList.contains('hiding')) {
                storyProgressModal.style.display = 'none';
                storyProgressModal.classList.remove('hiding');
                storyProgressModal.removeEventListener('animationend', onHidingAnimationEnd);
                const isAnotherOverlayOpen = Array.from(document.querySelectorAll(overlaySelectors))
                    .filter(el => el.id !== storyProgressModal.id)
                    .some(el => !el.classList.contains('hiding') && (el.classList.contains('visible') || el.classList.contains('show') || el.classList.contains('open')));
                if (!isAnotherOverlayOpen) document.body.style.overflow = '';
            }
        };
        storyProgressModal.removeEventListener('animationend', onHidingAnimationEnd);
        storyProgressModal.addEventListener('animationend', onHidingAnimationEnd);
    }
    if (storyProgressAppBtn) {
        storyProgressAppBtn.addEventListener('click', (e) => {
            e.preventDefault(); e.stopPropagation();
            closeAllGoogleDropdowns();
            openStoryProgressModal();
        });
    }
    if (closeStoryProgressModalBtn) closeStoryProgressModalBtn.addEventListener('click', closeStoryProgressModal);
    window.addEventListener('click', (e) => { if (storyProgressModal && e.target === storyProgressModal && storyProgressModal.classList.contains('visible')) closeStoryProgressModal(); });


    // --- Prompt Library (Global) ---
    const promptLibraryPanel = document.getElementById('prompt-library-panel');
    const closePromptLibraryBtn = document.getElementById('close-prompt-library-btn');
    const createNewPromptBtnHeader = document.getElementById('create-new-prompt-btn-header');
    const createNewPromptBtnMobile = document.getElementById('create-new-prompt-btn-mobile');
    const promptModal = document.getElementById('prompt-modal');
    const promptModalTitle = document.getElementById('prompt-modal-title');
    const closePromptModalBtn = document.getElementById('close-prompt-modal-btn');
    const cancelPromptModalBtn = document.getElementById('cancel-prompt-modal-btn');
    const savePromptBtn = document.getElementById('save-prompt-btn');
    const promptIdInput = document.getElementById('prompt-id-input');
    const promptNameInput = document.getElementById('prompt-name');
    const promptDescriptionInput = document.getElementById('prompt-description');
    const promptTextInput = document.getElementById('prompt-text');
    const searchPromptsInput = document.getElementById('search-prompts-input');
    const recommendedPromptsContainer = document.querySelector('#recommended-prompts-section');
    const myPromptsContainer = document.querySelector('#my-prompts-section');
    // const quickPromptSelect = document.getElementById('quick-prompt-select'); // This element was not in the HTML
    let promptLibraryBackdrop; let myPrompts = []; let nextPromptId = 1;
    const staticExamplePromptData = { id: 'static-example-1', name: 'Example: My Awesome Story Idea', creator: 'You (Static Example)', description: 'This is a static description of an example prompt. It helps kickstart the creative process for writing a thrilling space opera with complex characters and a universe-shattering plot twist.', prompt: 'A thrilling space opera with complex characters and a universe-shattering plot twist involving ancient alien technology and a rogue AI.' };
    const recommendedPromptsData = [ { id: 'rec-1', name: 'Quick summary', creator: 'Storytell', description: 'Based on the content I\'ve shared, provide a quick summary.', prompt: 'Based on the content I\'ve shared, provide a quick summary.' }, { id: 'rec-2', name: 'Meeting Summary + AIs', creator: 'Storytell', description: 'Summarize this meeting transcript and list key action items.', prompt: 'Summarize this meeting transcript and list key action items.' }, { id: 'rec-3', name: 'SWOT analysis', creator: 'Storytell', description: 'Perform a SWOT analysis on the following business idea: [Your Idea Here]', prompt: 'Perform a SWOT analysis on the following business idea: ' } ];
    function createBackdrop(className, onClickHandler) { let backdrop = document.querySelector(`.${className}`); if (!backdrop) { backdrop = document.createElement('div'); backdrop.className = className; document.body.appendChild(backdrop); backdrop.addEventListener('click', onClickHandler); } return backdrop; }
    function openPromptLibraryPanel() { if (promptLibraryPanel) { promptLibraryBackdrop = createBackdrop('prompt-library-backdrop', closePromptLibraryPanel); if(storyHistoryPanel) storyHistoryPanel.classList.remove('open'); if (storyHistoryBackdropElement) storyHistoryBackdropElement.classList.remove('show'); promptLibraryPanel.classList.add('open'); if(promptLibraryBackdrop) promptLibraryBackdrop.classList.add('show'); document.body.style.overflow = 'hidden'; renderPrompts(); toggleMobileCreateButton(); closeStoryProgressModal(); } }
    function closePromptLibraryPanel() {
        if (promptLibraryPanel) {
            promptLibraryPanel.classList.remove('open');
            if(promptLibraryBackdrop) promptLibraryBackdrop.classList.remove('show');
            const isAnotherOverlayOpen = Array.from(document.querySelectorAll(overlaySelectors))
                .filter(el => el.id !== promptLibraryPanel.id && (!promptLibraryBackdrop || el !== promptLibraryBackdrop))
                .some(el => !el.classList.contains('hiding') && (el.classList.contains('visible') || el.classList.contains('show') || el.classList.contains('open')));
            if (!isAnotherOverlayOpen) document.body.style.overflow = '';
            document.querySelectorAll('.prompt-item-options-menu.show').forEach(menu => menu.classList.remove('show'));
        }
    }
    function toggleMobileCreateButton() { if(!createNewPromptBtnMobile || !createNewPromptBtnHeader) return; const desktopButtonContainer = createNewPromptBtnHeader.closest('.prompt-library-actions'); if (window.innerWidth <= 480) { createNewPromptBtnMobile.classList.remove('hidden'); if(desktopButtonContainer) desktopButtonContainer.classList.add('hidden'); } else { createNewPromptBtnMobile.classList.add('hidden'); if(desktopButtonContainer) desktopButtonContainer.classList.remove('hidden'); } }
    window.addEventListener('resize', toggleMobileCreateButton);
    function openPromptModal(mode = 'create', promptData = null) { if (promptModal) { promptIdInput.value = ''; promptNameInput.value = ''; promptDescriptionInput.value = ''; promptTextInput.value = ''; if (mode === 'edit' && promptData) { promptModalTitle.textContent = 'Edit prompt'; promptIdInput.value = promptData.id; promptNameInput.value = promptData.name; promptDescriptionInput.value = promptData.description; promptTextInput.value = promptData.prompt; } else { promptModalTitle.textContent = 'Save to Prompt Library'; } promptModal.classList.remove('hiding'); promptModal.style.display = 'flex'; requestAnimationFrame(() => promptModal.classList.add('visible')); document.body.style.overflow = 'hidden';} }
    function closePromptModal() {
        if (!promptModal || !promptModal.classList.contains('visible')) return;
        promptModal.classList.remove('visible');
        promptModal.classList.add('hiding');
        const onHidingAnimationEnd = (event) => {
            if (event.target === promptModal && promptModal.classList.contains('hiding')) {
                promptModal.style.display = 'none';
                promptModal.classList.remove('hiding');
                promptModal.removeEventListener('animationend', onHidingAnimationEnd);
                const isAnotherOverlayOpen = Array.from(document.querySelectorAll(overlaySelectors))
                    .filter(el => el.id !== promptModal.id)
                    .some(el => !el.classList.contains('hiding') && (el.classList.contains('visible') || el.classList.contains('show') || el.classList.contains('open')));
                if (!isAnotherOverlayOpen) document.body.style.overflow = '';
            }
        };
        promptModal.removeEventListener('animationend', onHidingAnimationEnd);
        promptModal.addEventListener('animationend', onHidingAnimationEnd);
    }
    function savePromptsToLocalStorage() { localStorage.setItem('storyAiUserPrompts', JSON.stringify(myPrompts)); }
    function loadPromptsFromLocalStorage() { const storedPrompts = localStorage.getItem('storyAiUserPrompts'); if (storedPrompts) { myPrompts = JSON.parse(storedPrompts); const maxId = myPrompts.reduce((max, p) => { if (p.id && typeof p.id === 'string' && p.id.startsWith('user-')) { const num = parseInt(p.id.split('-')[1]); return num > max ? num : max; } return max; }, 0); nextPromptId = maxId + 1; } }
    function renderPromptItem(prompt, isRecommended = false) { const item = document.createElement('div'); item.classList.add('prompt-item'); item.dataset.promptId = prompt.id; item.innerHTML = `<div class="prompt-item-details"><div class="prompt-item-title">${prompt.name}</div><div class="prompt-item-creator">Created by ${prompt.creator}</div><p class="prompt-item-description">${prompt.description}</p></div><div class="prompt-item-controls"><i class="fas fa-arrow-right prompt-item-use-icon" title="Use prompt"></i>${!isRecommended ? `<button class="prompt-item-actions-trigger" aria-label="More options"><i class="fas fa-ellipsis-v"></i></button>` : ''}</div>${!isRecommended ? `<div class="prompt-item-options-menu"><button class="use-prompt-menu-btn"><i class="fas fa-arrow-right"></i> Use prompt</button><button class="copy-prompt-btn"><i class="fas fa-copy"></i> Copy prompt</button><button class="edit-prompt-btn"><i class="fas fa-edit"></i> Edit prompt</button><button class="delete-prompt-btn"><i class="fas fa-trash-alt"></i> Delete prompt</button></div>` : ''}`; const detailsArea = item.querySelector('.prompt-item-details'); if (detailsArea) { detailsArea.addEventListener('click', (e) => { e.stopPropagation(); if (aiStoryInsightInput) { aiStoryInsightInput.value = prompt.prompt; aiStoryInsightInput.focus(); closePromptLibraryPanel(); } else { alert("Please navigate to the main page to use prompts."); } }); } const useIcon = item.querySelector('.prompt-item-use-icon'); if (useIcon) { useIcon.addEventListener('click', (e) => { e.stopPropagation(); if (aiStoryInsightInput) { aiStoryInsightInput.value = prompt.prompt; aiStoryInsightInput.focus(); closePromptLibraryPanel(); } else { alert("Please navigate to the main page to use prompts."); } }); } if (!isRecommended) { const useMenuBtn = item.querySelector('.use-prompt-menu-btn'); if(useMenuBtn) { useMenuBtn.addEventListener('click', (e) => { e.stopPropagation(); if (aiStoryInsightInput) { aiStoryInsightInput.value = prompt.prompt; aiStoryInsightInput.focus(); closePromptLibraryPanel(); } else { alert("Please navigate to the main page to use prompts."); } const menu = item.querySelector('.prompt-item-options-menu'); if (menu) menu.classList.remove('show'); }); } const optionsTrigger = item.querySelector('.prompt-item-actions-trigger'); const optionsMenu = item.querySelector('.prompt-item-options-menu'); if (optionsTrigger && optionsMenu) { optionsTrigger.addEventListener('click', (e) => { e.stopPropagation(); document.querySelectorAll('.prompt-item-options-menu.show').forEach(menu => { if (menu !== optionsMenu) menu.classList.remove('show'); }); optionsMenu.classList.toggle('show'); }); const editBtn = optionsMenu.querySelector('.edit-prompt-btn'); if (editBtn) { editBtn.addEventListener('click', (e) => { e.stopPropagation(); const targetPrompt = myPrompts.find(p => p.id === prompt.id); if (targetPrompt) openPromptModal('edit', targetPrompt); optionsMenu.classList.remove('show'); }); } const deleteBtn = optionsMenu.querySelector('.delete-prompt-btn'); if (deleteBtn) { deleteBtn.addEventListener('click', (e) => { e.stopPropagation(); if (confirm(`Are you sure you want to delete "${prompt.name}"?`)) { myPrompts = myPrompts.filter(p => p.id !== prompt.id); savePromptsToLocalStorage(); renderPrompts(searchPromptsInput ? searchPromptsInput.value : ''); } optionsMenu.classList.remove('show'); }); } const copyBtn = optionsMenu.querySelector('.copy-prompt-btn'); if(copyBtn){ copyBtn.addEventListener('click', e => { e.stopPropagation(); navigator.clipboard.writeText(prompt.prompt).then(() => {}).catch(err => console.error('Copy failed: ', err)); optionsMenu.classList.remove('show'); });}} } return item; }
    function renderPrompts(searchTerm = '') { const term = searchTerm.toLowerCase(); if (myPromptsContainer) { const h3 = myPromptsContainer.querySelector('h3'); myPromptsContainer.innerHTML = ''; if (h3) myPromptsContainer.appendChild(h3); const filteredMyPrompts = myPrompts.filter(p => p.name.toLowerCase().includes(term) || p.description.toLowerCase().includes(term)); if (filteredMyPrompts.length === 0 ) { myPromptsContainer.insertAdjacentHTML('beforeend', `<p style="color:var(--text-muted);font-style:italic;padding:10px 0;">${searchTerm ? 'No personal prompts match.' : 'No prompts saved yet. Create one!'}</p>`); } filteredMyPrompts.forEach(prompt => myPromptsContainer.appendChild(renderPromptItem(prompt, false))); } if (recommendedPromptsContainer) { const h3 = recommendedPromptsContainer.querySelector('h3'); recommendedPromptsContainer.innerHTML = ''; if (h3) recommendedPromptsContainer.appendChild(h3); const filteredRecommended = recommendedPromptsData.filter(p => p.name.toLowerCase().includes(term) || p.description.toLowerCase().includes(term)); if (filteredRecommended.length === 0 && searchTerm) { recommendedPromptsContainer.insertAdjacentHTML('beforeend', `<p style="color:var(--text-muted);font-style:italic;padding:10px 0;">No recommended prompts match.</p>`); } filteredRecommended.forEach(prompt => recommendedPromptsContainer.appendChild(renderPromptItem(prompt, true))); } }
    // function populateQuickPromptSelect() { /* ... removed as element not in HTML ... */ }
    function handleSavePrompt() { const id = promptIdInput.value; const name = promptNameInput.value.trim(); const description = promptDescriptionInput.value.trim(); const text = promptTextInput.value.trim(); if (!name || !text) { alert('Name and Prompt Text are required.'); return; } if (id) { const index = myPrompts.findIndex(p => p.id === id); if (index > -1) { myPrompts[index] = { ...myPrompts[index], name, description, prompt: text }; } else if (id === staticExamplePromptData.id) { const newPrompt = { id: `user-${nextPromptId++}`, name, description, prompt: text, creator: 'You' }; myPrompts = myPrompts.filter(p => p.id !== staticExamplePromptData.id); myPrompts.unshift(newPrompt); } } else { const newPrompt = { id: `user-${nextPromptId++}`, name, description, prompt: text, creator: 'You' }; myPrompts = myPrompts.filter(p => p.id !== staticExamplePromptData.id); myPrompts.unshift(newPrompt); } savePromptsToLocalStorage(); renderPrompts(searchPromptsInput ? searchPromptsInput.value : ''); closePromptModal(); }
    if (promptLibraryAppGridBtn) { promptLibraryAppGridBtn.addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); openPromptLibraryPanel(); closeAllGoogleDropdowns(); }); }
    if (closePromptLibraryBtn) closePromptLibraryBtn.addEventListener('click', closePromptLibraryPanel);
    const openModalFromAnyButton = () => openPromptModal('create');
    if (createNewPromptBtnHeader) createNewPromptBtnHeader.addEventListener('click', openModalFromAnyButton);
    if (createNewPromptBtnMobile) createNewPromptBtnMobile.addEventListener('click', openModalFromAnyButton);
    if (closePromptModalBtn) closePromptModalBtn.addEventListener('click', closePromptModal);
    if (cancelPromptModalBtn) cancelPromptModalBtn.addEventListener('click', closePromptModal);
    if (savePromptBtn) savePromptBtn.addEventListener('click', handleSavePrompt);
    document.addEventListener('click', function(event) { const openMenus = document.querySelectorAll('.prompt-item-options-menu.show'); openMenus.forEach(menu => { if (!menu.closest('.prompt-item').contains(event.target)) menu.classList.remove('show'); }); });
    if (searchPromptsInput) { searchPromptsInput.addEventListener('input', (e) => { renderPrompts(e.target.value); }); }
    loadPromptsFromLocalStorage();
    const staticExampleExists = myPrompts.find(p => p.id === staticExamplePromptData.id);
    if (myPrompts.length === 0 || (myPrompts.length > 0 && !myPrompts.find(p => p.id === staticExamplePromptData.id && p.creator === "You (Static Example)" ))) {
         // Add static example if it doesn't exist or if its details are not the original ones
        if (!myPrompts.find(p => p.id === staticExamplePromptData.id)) {
            myPrompts.unshift(JSON.parse(JSON.stringify(staticExamplePromptData)));
        }
    }
    renderPrompts(); toggleMobileCreateButton();


    // --- Google Style Dropdowns (Header: Apps, Profile) ---
    const allGoogleDropdowns = [appsGrid, profileDropdown].filter(Boolean);
    const allGoogleDropdownTriggers = [appsIconBtn, profileAvatarBtn].filter(Boolean);
    function closeAllGoogleDropdowns(exceptThisOne = null) { allGoogleDropdowns.forEach(dropdown => { if (dropdown && dropdown !== exceptThisOne && dropdown.classList.contains('active')) { dropdown.classList.remove('active'); const triggerIdBase = dropdown.id.replace('profile-dropdown', 'profile-avatar-btn').replace('apps-grid', 'apps-icon-btn'); const trigger = document.getElementById(triggerIdBase); if(trigger) { trigger.setAttribute('aria-expanded', 'false'); trigger.classList.remove('active'); } } }); }
    function toggleDropdown(dropdownElement, triggerButton) { const isActive = dropdownElement.classList.contains('active'); if (isActive) { dropdownElement.classList.remove('active'); triggerButton.setAttribute('aria-expanded', 'false'); triggerButton.classList.remove('active'); } else { closeAllGoogleDropdowns(dropdownElement); closeStoryHistoryPanel(); closePromptLibraryPanel(); closeStoryProgressModal(); dropdownElement.classList.add('active'); triggerButton.setAttribute('aria-expanded', 'true'); triggerButton.classList.add('active'); } }
    if (appsIconBtn && appsGrid) { appsIconBtn.setAttribute('aria-controls', appsGrid.id); appsIconBtn.addEventListener('click', (event) => { event.stopPropagation(); toggleDropdown(appsGrid, appsIconBtn); }); }
    if (profileAvatarBtn && profileDropdown) { profileAvatarBtn.setAttribute('aria-controls', profileDropdown.id); profileAvatarBtn.addEventListener('click', (event) => { event.stopPropagation(); toggleDropdown(profileDropdown, profileAvatarBtn); }); }
    if (closeProfileDropdownButton && profileDropdown) { closeProfileDropdownButton.addEventListener('click', (event) => { event.stopPropagation(); profileDropdown.classList.remove('active'); if (profileAvatarBtn) { profileAvatarBtn.setAttribute('aria-expanded', 'false'); profileAvatarBtn.classList.remove('active'); profileAvatarBtn.focus(); } }); }
    document.addEventListener('click', (event) => { let clickedInsideInteractiveElement = false; if (allGoogleDropdowns.some(dd => dd && dd.contains(event.target)) || allGoogleDropdownTriggers.some(tr => tr && tr.contains(event.target))) clickedInsideInteractiveElement = true; const promptLibTriggers = [createNewPromptBtnHeader, promptLibraryAppGridBtn].filter(Boolean); if ((promptLibraryPanel && promptLibraryPanel.contains(event.target)) || promptLibTriggers.some(tr => tr && tr.contains(event.target))) clickedInsideInteractiveElement = true; const storyHistTriggers = [storyHistoryAppBtn].filter(Boolean); if ((storyHistoryPanel && storyHistoryPanel.contains(event.target)) || storyHistTriggers.some(tr => tr && tr.contains(event.target))) clickedInsideInteractiveElement = true; const storyProgTriggers = [storyProgressAppBtn].filter(Boolean); if ((storyProgressModal && storyProgressModal.contains(event.target)) || storyProgTriggers.some(tr => tr && tr.contains(event.target))) clickedInsideInteractiveElement = true; if (!clickedInsideInteractiveElement) closeAllGoogleDropdowns(); });

    // --- Story History Panel ---
    const storyHistoryPanel = document.getElementById('story-history-panel');
    const closeStoryHistoryBtn = document.getElementById('close-story-history-btn');
    const searchStoryHistoryInput = document.getElementById('search-story-history-input');
    const storyHistoryContentContainer = storyHistoryPanel ? storyHistoryPanel.querySelector('.story-history-content') : null;
    const noHistoryMessageElement = storyHistoryPanel ? storyHistoryPanel.querySelector('.no-history-message') : null;
    let storyHistoryBackdropElement;
    function loadStoryHistoryFromLocalStorage() { const storedHistory = localStorage.getItem('userSearchHistory'); userSearchHistory = storedHistory ? JSON.parse(storedHistory) : []; }
    loadStoryHistoryFromLocalStorage();
    function saveStoryHistoryToLocalStorage() { localStorage.setItem('userSearchHistory', JSON.stringify(userSearchHistory)); }
    function addSearchToHistory(query, category) { if (!query && !category) return; const now = Date.now(); const newEntry = { id: now, query: query, category: category, timestamp: now }; if (userSearchHistory.length > 0) { const lastEntry = userSearchHistory[0]; if (lastEntry.query === newEntry.query && lastEntry.category === newEntry.category) return; } userSearchHistory.unshift(newEntry); if (userSearchHistory.length > 100) userSearchHistory.pop(); saveStoryHistoryToLocalStorage(); }
    function isToday(timestamp) { const today = new Date(); const dateFromTimestamp = new Date(timestamp); return dateFromTimestamp.getDate() === today.getDate() && dateFromTimestamp.getMonth() === today.getMonth() && dateFromTimestamp.getFullYear() === today.getFullYear(); }
    function isYesterday(timestamp) { const yesterday = new Date(); yesterday.setDate(yesterday.getDate() - 1); const dateFromTimestamp = new Date(timestamp); return dateFromTimestamp.getDate() === yesterday.getDate() && dateFromTimestamp.getMonth() === yesterday.getMonth() && dateFromTimestamp.getFullYear() === yesterday.getFullYear(); }
    function renderStoryHistory(searchTerm = '') { if (!storyHistoryContentContainer) return; storyHistoryContentContainer.innerHTML = ''; loadStoryHistoryFromLocalStorage(); let historyToDisplay = userSearchHistory; if (searchTerm) { const term = searchTerm.toLowerCase().trim(); historyToDisplay = userSearchHistory.filter(item => item.query.toLowerCase().includes(term) || (item.category && item.category.toLowerCase().includes(term))); } const groupedHistory = { today: [], yesterday: [], older: [] }; historyToDisplay.forEach(item => { if (isToday(item.timestamp)) groupedHistory.today.push(item); else if (isYesterday(item.timestamp)) groupedHistory.yesterday.push(item); else groupedHistory.older.push(item); }); let hasAnyHistory = false; ['today', 'yesterday', 'older'].forEach(groupKey => { const groupItems = groupedHistory[groupKey]; if (groupItems.length > 0) { hasAnyHistory = true; const section = document.createElement('div'); section.className = 'history-group-section'; const header = document.createElement('div'); header.className = 'history-group-header'; const groupName = groupKey.charAt(0).toUpperCase() + groupKey.slice(1); header.innerHTML = `${groupName} <i class="fas fa-chevron-down"></i>`; const itemList = document.createElement('ul'); itemList.className = 'history-group-items'; if (groupKey === 'today') { header.classList.add('active'); itemList.classList.add('open'); } groupItems.forEach(histItem => { const li = document.createElement('li'); li.className = 'story-history-item'; li.dataset.query = histItem.query; li.dataset.category = histItem.category; let itemHTML = `<span class="query-text">${histItem.query || 'No query'}</span>`; if (histItem.category && histItem.category !== 'all' && storyCategorySelect) { const categoryOption = Array.from(storyCategorySelect.options).find(opt => opt.value === histItem.category); const categoryName = categoryOption ? categoryOption.text : histItem.category; itemHTML += ` <span class="query-category">(${categoryName})</span>`; } li.innerHTML = itemHTML; li.addEventListener('click', () => { handleSearchOrHistoryNavigation(histItem.query, histItem.category); closeStoryHistoryPanel(); }); itemList.appendChild(li); }); header.addEventListener('click', () => { header.classList.toggle('active'); itemList.classList.toggle('open'); }); section.appendChild(header); section.appendChild(itemList); storyHistoryContentContainer.appendChild(section); } }); if (noHistoryMessageElement) { noHistoryMessageElement.style.display = hasAnyHistory ? 'none' : 'block'; noHistoryMessageElement.textContent = searchTerm ? "No history matches your search." : "No search history yet."; } }
    function openStoryHistoryPanel() { if (storyHistoryPanel) { storyHistoryBackdropElement = createBackdrop('story-history-backdrop', closeStoryHistoryPanel); if(promptLibraryPanel) promptLibraryPanel.classList.remove('open'); if (promptLibraryBackdrop) promptLibraryBackdrop.classList.remove('show'); storyHistoryPanel.classList.add('open'); if (storyHistoryBackdropElement) storyHistoryBackdropElement.classList.add('show'); document.body.style.overflow = 'hidden'; renderStoryHistory(searchStoryHistoryInput ? searchStoryHistoryInput.value : ''); closeAllGoogleDropdowns(); closeStoryProgressModal(); } }
    function closeStoryHistoryPanel() {
        if (storyHistoryPanel) {
            storyHistoryPanel.classList.remove('open');
            if (storyHistoryBackdropElement) storyHistoryBackdropElement.classList.remove('show');
            const isAnotherOverlayOpen = Array.from(document.querySelectorAll(overlaySelectors))
                .filter(el => el.id !== storyHistoryPanel.id && (!storyHistoryBackdropElement || el !== storyHistoryBackdropElement))
                .some(el => !el.classList.contains('hiding') && (el.classList.contains('visible') || el.classList.contains('show') || el.classList.contains('open')));
            if (!isAnotherOverlayOpen) document.body.style.overflow = '';
        }
    }
    if (storyHistoryAppBtn) {
        storyHistoryAppBtn.addEventListener('click', (e) => {
            e.preventDefault(); e.stopPropagation(); openStoryHistoryPanel();
        });
    }
    if (closeStoryHistoryBtn) closeStoryHistoryBtn.addEventListener('click', closeStoryHistoryPanel);
    if (searchStoryHistoryInput) searchStoryHistoryInput.addEventListener('input', (e) => { renderStoryHistory(e.target.value); });


    // --- Logo Click (Go to Index/Idea Page) ---
    if (storyAILogo) {
        storyAILogo.addEventListener('click', (e) => {
            e.preventDefault();
            // If already on idea page, reset inputs. Otherwise, navigate.
            if (currentPageId === 'idea-page') {
                if (aiStoryInsightInput) {
                     aiStoryInsightInput.value = '';
                     aiStoryInsightInput.placeholder = "Describe your story idea here...";
                     aiStoryInsightInput.focus();
                }
                if (storyCategorySelect) currentSearchCategory = storyCategorySelect.options[0].value;
                if(storyCategorySelect) storyCategorySelect.value = currentSearchCategory;
                const ideaPageTitle = document.querySelector('#idea-page h1');
                const ideaPageSubtitle = document.querySelector('#idea-page p');
                if (ideaPageTitle) ideaPageTitle.textContent = "What's your story idea?";
                if (ideaPageSubtitle) ideaPageSubtitle.textContent = "Turn your brilliant concept into a captivating movie or book.";
                resetStoryProgressModal(); // Reset progress if any was shown
            } else {
                window.location.href = 'index.html';
            }
            closeAllGoogleDropdowns();
        });
    }

    // --- Footer Links: Navigation is handled by hrefs in HTML. No JS needed for primary navigation. ---
    // --- "Back to StoryAI" buttons on content pages are also hrefs in HTML. ---

    // --- Contact Form & Feedback Modal (contact_us.html specific button, but modal is global) ---
    function openFeedbackFormModal() { if (!feedbackFormModal) return; feedbackFormModal.classList.remove('hiding'); feedbackFormModal.style.display = 'flex'; requestAnimationFrame(() => feedbackFormModal.classList.add('visible')); document.body.style.overflow = 'hidden'; }
    function closeFeedbackFormModal() {
        if (!feedbackFormModal || !feedbackFormModal.classList.contains('visible')) return;
        feedbackFormModal.classList.remove('visible');
        feedbackFormModal.classList.add('hiding');
        const contentElement = feedbackFormModal.querySelector('.modal-content');
        const onHidingAnimationEnd = (event) => {
            if (event.target === contentElement && feedbackFormModal.classList.contains('hiding')) {
                feedbackFormModal.style.display = 'none';
                feedbackFormModal.classList.remove('hiding');
                contentElement.removeEventListener('animationend', onHidingAnimationEnd);
                const isAnotherOverlayOpen = Array.from(document.querySelectorAll(overlaySelectors))
                    .filter(el => el.id !== feedbackFormModal.id)
                    .some(el => !el.classList.contains('hiding') && (el.classList.contains('visible') || el.classList.contains('show') || el.classList.contains('open')));
                if (!isAnotherOverlayOpen) document.body.style.overflow = '';
            }
        };
        if (contentElement) {
            contentElement.removeEventListener('animationend', onHidingAnimationEnd);
            contentElement.addEventListener('animationend', onHidingAnimationEnd);
        } else { feedbackFormModal.style.display = 'none'; feedbackFormModal.classList.remove('hiding'); /* Fallback */ }
    }
    if (openFeedbackFormBtn) openFeedbackFormBtn.addEventListener('click', () => { openFeedbackFormModal(); }); // Only on contact_us.html
    if (closeFeedbackFormModalBtn) closeFeedbackFormModalBtn.addEventListener('click', closeFeedbackFormModal);
    if (feedbackFormModal) feedbackFormModal.addEventListener('click', (event) => { if (event.target === feedbackFormModal) closeFeedbackFormModal(); });

    function showFeedbackSuccessPopup() { /* ... same as before ... */
        if (!feedbackSuccessPopup) return; clearTimeout(feedbackPopupTimeout); feedbackSuccessPopup.classList.remove('hiding'); feedbackSuccessPopup.classList.add('show'); document.body.style.overflow = 'hidden'; feedbackPopupTimeout = setTimeout(hideFeedbackSuccessPopup, 5000);
    }
    function hideFeedbackSuccessPopup() { /* ... same as before ... */
        if (!feedbackSuccessPopup || !feedbackSuccessPopup.classList.contains('show')) return; clearTimeout(feedbackPopupTimeout); feedbackSuccessPopup.classList.add('hiding'); const contentElement = feedbackSuccessPopup.querySelector('.feedback-popup-content'); if (contentElement) { const onAnimationEnd = (event) => { if (event.target === contentElement && feedbackSuccessPopup.classList.contains('hiding')) { feedbackSuccessPopup.classList.remove('show'); feedbackSuccessPopup.classList.remove('hiding'); contentElement.removeEventListener('animationend', onAnimationEnd); const isAnotherOverlayOpen = Array.from(document.querySelectorAll(overlaySelectors)).filter(el => el.id !== feedbackSuccessPopup.id).some(el => !el.classList.contains('hiding') && (el.classList.contains('visible') || el.classList.contains('show') || el.classList.contains('open'))); if (!isAnotherOverlayOpen) document.body.style.overflow = ''; } }; contentElement.removeEventListener('animationend', onAnimationEnd); contentElement.addEventListener('animationend', onAnimationEnd); } else { feedbackSuccessPopup.classList.remove('show'); feedbackSuccessPopup.classList.remove('hiding'); /* Fallback */ }
    }
    if (contactForm) { contactForm.addEventListener('submit', function(event) { event.preventDefault(); const subjectEl = document.getElementById('contact-subject'); const messageEl = document.getElementById('contact-message'); if (!subjectEl || !messageEl) return; const subject = subjectEl.value.trim(); const message = messageEl.value.trim(); if (!subject || !message) { alert('Please fill in all required fields.'); return; } console.log('Simulating feedback submission:'); for (let [key, value] of new FormData(contactForm).entries()) console.log(key + ':', value); contactForm.reset(); closeFeedbackFormModal(); setTimeout(showFeedbackSuccessPopup, 150); }); }
    if (feedbackPopupCloseBtn) feedbackPopupCloseBtn.addEventListener('click', hideFeedbackSuccessPopup);
    if (feedbackSuccessPopup) feedbackSuccessPopup.addEventListener('click', function(event) { if (event.target === feedbackSuccessPopup) hideFeedbackSuccessPopup(); });

    // --- PDF Generation (Story Page Specific) ---
    function sanitizeFilename(name) { return name.replace(/[^a-z0-9_.-]/gi, '_').toLowerCase().substring(0, 50) || "story"; }
    async function generateStoryPDF() { /* ... same as before, but ensure elements exist ... */
        const { jsPDF } = window.jspdf; const doc = new jsPDF({ orientation: 'p', unit: 'mm', format: 'a4' }); const pageHeight = doc.internal.pageSize.getHeight(); const pageWidth = doc.internal.pageSize.getWidth(); const margin = 15; const gutter = 5; const columnWidth = (pageWidth - margin * 2 - gutter) / 2; let currentY = margin;
        let pageBackgroundColorString = '#ffffff'; let pageBackgroundColorRGB = [255, 255, 255];
        const storyPageForPDF = document.getElementById('story-page'); // Re-select for safety in this scope
        if (storyPageForPDF) pageBackgroundColorString = window.getComputedStyle(storyPageForPDF).backgroundColor;
        const rgbMatch = pageBackgroundColorString.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*[\d.]+)?\)/); if (rgbMatch) pageBackgroundColorRGB = [parseInt(rgbMatch[1]), parseInt(rgbMatch[2]), parseInt(rgbMatch[3])]; else { if (pageBackgroundColorString.startsWith('#')) { let hex = pageBackgroundColorString.slice(1); if (hex.length === 3) hex = hex.split('').map(c => c + c).join(''); if (hex.length === 6) pageBackgroundColorRGB = [parseInt(hex.substring(0, 2), 16), parseInt(hex.substring(2, 4), 16), parseInt(hex.substring(4, 6), 16)]; } else { console.warn("Could not parse story page background color for PDF:", pageBackgroundColorString); pageBackgroundColorRGB = [255,255,255]; } }
        const drawPageBackground = () => { doc.setFillColor(pageBackgroundColorRGB[0], pageBackgroundColorRGB[1], pageBackgroundColorRGB[2]); doc.rect(0, 0, pageWidth, pageHeight, 'F'); }; drawPageBackground();
        const titleElement = document.getElementById('story-main-title-text'); const storyOutputContainer = document.getElementById('story-output');
        if (!titleElement || !storyOutputContainer) { console.error("Story title or output container not found for PDF."); alert("Could not generate PDF: Missing story elements."); return; }
        const storyTitle = titleElement.textContent.trim() || "My Story";
        doc.setTextColor(0, 0, 0); doc.setFontSize(18); doc.setFont(undefined, 'bold'); const titleLines = doc.splitTextToSize(storyTitle, pageWidth - margin * 2); doc.text(titleLines, pageWidth / 2, currentY, { align: 'center' }); currentY += (titleLines.length * 7) + 10;
        const scenes = storyOutputContainer.querySelectorAll('.story-scene');
        if (scenes.length === 0) { doc.setFontSize(12); doc.setFont(undefined, 'normal'); doc.text("No scenes found in this story.", margin, currentY); doc.save(sanitizeFilename(storyTitle) + ".pdf"); showDownloadSuccessPopup("PDF generated (no scenes): " + sanitizeFilename(storyTitle) + ".pdf", "fa-file-pdf"); return; }
        const textLineHeight = 4.5;
        for (let i = 0; i < scenes.length; i++) {
            const scene = scenes[i]; const sceneNum = i + 1;
            // const isEvenScene = scene.classList.contains('story-scene:nth-child(even)') || (i + 1) % 2 === 0; // Simplified
            const isEvenScene = (i + 1) % 2 === 0; // Simplified as :nth-child won't work directly on queried elements

            let sceneTitleY = currentY; const sceneTitleText = `Scene ${sceneNum}`; const sceneTitleHeight = 8; const estimatedContentHeightForPageCheck = 70;
            if (currentY + sceneTitleHeight + estimatedContentHeightForPageCheck > pageHeight - margin) { doc.addPage(); drawPageBackground(); currentY = margin; sceneTitleY = currentY; }
            doc.setTextColor(0,0,0); doc.setFontSize(14); doc.setFont(undefined, 'bold'); doc.text(sceneTitleText, margin, sceneTitleY); currentY = sceneTitleY + sceneTitleHeight + 3;
            const imageElement = scene.querySelector('.scene-image-container img'); const textContainer = scene.querySelector('.scene-text-container');
            let imgDataURI = null; let imageRenderWidth = 0, imageRenderHeight = 0; let textBlockLines = [];
            if (imageElement && imageElement.src) { try { const img = new Image(); img.crossOrigin = "anonymous"; await new Promise((resolve, reject) => { img.onload = resolve; img.onerror = (errEvent) => { console.warn(`Scene ${sceneNum} img preload error: ${imageElement.src}.`, errEvent); resolve(); }; img.src = imageElement.src; }); const canvas = await html2canvas(imageElement, { useCORS: true, logging: false, scale: 1.5, allowTaint: true, backgroundColor: '#ffffff' }); imgDataURI = canvas.toDataURL('image/png'); const imgProps = doc.getImageProperties(imgDataURI); const aspectRatio = imgProps.width / imgProps.height; imageRenderWidth = columnWidth; imageRenderHeight = columnWidth / aspectRatio; } catch (error) { console.error(`Scene ${sceneNum} img processing error (${imageElement.src}):`, error); imgDataURI = null; } }
            if (textContainer) { doc.setTextColor(0,0,0); doc.setFontSize(10); doc.setFont(undefined, 'normal'); let sceneTextContent = ""; Array.from(textContainer.childNodes).forEach(node => { if (node.nodeName === 'P') sceneTextContent += node.textContent.trim() + "\n\n"; else if (node.nodeName === 'BR') sceneTextContent += "\n"; else if (node.nodeType === Node.TEXT_NODE) sceneTextContent += node.textContent.trim() + " "; else sceneTextContent += node.textContent.trim() + " "; }); sceneTextContent = sceneTextContent.replace(/\s\s+/g, ' ').replace(/(\n\s*){3,}/g, '\n\n').trim(); textBlockLines = doc.splitTextToSize(sceneTextContent, columnWidth); }
            const actualImageBlockHeight = imgDataURI ? imageRenderHeight : (imageElement ? 10 : 0); const actualTextBlockHeight = textBlockLines.length * textLineHeight; const sceneContentMaxHeight = Math.max(actualImageBlockHeight, actualTextBlockHeight);
            if (currentY + sceneContentMaxHeight + 5 > pageHeight - margin) { doc.addPage(); drawPageBackground(); currentY = margin; }
            const imageX = !isEvenScene ? margin : margin + columnWidth + gutter; const textX = !isEvenScene ? margin + columnWidth + gutter : margin;
            if (imgDataURI) doc.addImage(imgDataURI, 'PNG', imageX, currentY, imageRenderWidth, imageRenderHeight); else if (imageElement) { doc.setFontSize(9); doc.setFont(undefined, 'italic'); doc.setTextColor(150); doc.text("[Image load error]", imageX + (columnWidth/2), currentY + 5, {align: 'center', maxWidth: columnWidth - 4}); doc.setTextColor(0,0,0); }
            if (textBlockLines.length > 0) { doc.setTextColor(0,0,0); doc.setFontSize(10); doc.setFont(undefined, 'normal'); doc.text(textBlockLines, textX, currentY); }
            currentY += sceneContentMaxHeight + 10;
            if (i < scenes.length - 1 && currentY + 5 < pageHeight - margin) { doc.setLineWidth(0.1); doc.setDrawColor(200, 200, 200); doc.line(margin, currentY, pageWidth - margin, currentY); currentY += 5; }
        }
        doc.save(sanitizeFilename(storyTitle) + ".pdf");
        showDownloadSuccessPopup("PDF generated: " + sanitizeFilename(storyTitle) + ".pdf", "fa-file-pdf");
    }
    if (downloadStoryBtn) {
        downloadStoryBtn.addEventListener('click', async () => { /* ... same as before ... */
             const originalButtonText = downloadStoryBtn.innerHTML; downloadStoryBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating PDF...'; downloadStoryBtn.disabled = true; try { await generateStoryPDF(); } catch (error) { console.error("Error generating PDF:", error); alert("Sorry, there was an error generating the PDF. Please try again.\n" + error.message); showDownloadSuccessPopup("PDF Generation Failed! " + error.message.substring(0,100), "fa-times-circle"); } finally { downloadStoryBtn.innerHTML = originalButtonText; downloadStoryBtn.disabled = false; }
        });
    }
    function showDownloadSuccessPopup(message = "Download Successful!", iconClass = "fa-check-circle") { /* ... same as before ... */
        if (!downloadSuccessPopup) return; clearTimeout(downloadPopupTimeout); const titleEl = downloadSuccessPopup.querySelector('h2'); const messageEl = downloadSuccessPopup.querySelector('p'); const iconEl = downloadSuccessPopup.querySelector('.feedback-popup-icon i'); if (titleEl) titleEl.textContent = message.includes("Failed") ? "Generation Failed" : (iconClass === "fa-file-pdf" ? "PDF Ready!" : "Download Ready!"); if (messageEl) messageEl.textContent = message; if (iconEl) iconEl.className = `fas ${iconClass}`; downloadSuccessPopup.classList.remove('hiding'); downloadSuccessPopup.classList.add('show'); document.body.style.overflow = 'hidden'; downloadPopupTimeout = setTimeout(hideDownloadSuccessPopup, 7000);
    }
    function hideDownloadSuccessPopup() { /* ... same as before ... */
        if (!downloadSuccessPopup || !downloadSuccessPopup.classList.contains('show')) return; clearTimeout(downloadPopupTimeout); downloadSuccessPopup.classList.add('hiding'); const contentElement = downloadSuccessPopup.querySelector('.feedback-popup-content'); if (contentElement) { const onAnimationEnd = (event) => { if (event.target === contentElement && downloadSuccessPopup.classList.contains('hiding')) { downloadSuccessPopup.classList.remove('show'); downloadSuccessPopup.classList.remove('hiding'); contentElement.removeEventListener('animationend', onAnimationEnd); const isAnotherOverlayOpen = Array.from(document.querySelectorAll(overlaySelectors)).filter(el => el.id !== downloadSuccessPopup.id).some(el => !el.classList.contains('hiding') && (el.classList.contains('visible') || el.classList.contains('show') || el.classList.contains('open'))); if (!isAnotherOverlayOpen) document.body.style.overflow = ''; } }; contentElement.removeEventListener('animationend', onAnimationEnd); contentElement.addEventListener('animationend', onAnimationEnd); } else { downloadSuccessPopup.classList.remove('show'); downloadSuccessPopup.classList.remove('hiding'); /* Fallback */ }
    }
    if (downloadSuccessPopupCloseBtn) downloadSuccessPopupCloseBtn.addEventListener('click', hideDownloadSuccessPopup);
    if (downloadSuccessPopup) downloadSuccessPopup.addEventListener('click', (event) => { if (event.target === downloadSuccessPopup) hideDownloadSuccessPopup(); });


    // --- Delete Data Modal & History Cleared Popup ---
    function openDeleteDataModal() { /* ... same as before ... */
        if (!deleteDataModal) return; deleteDataTabBtns.forEach(btn => btn.classList.remove('active')); deleteDataTabContents.forEach(content => content.classList.remove('active')); const basicTabBtn = document.querySelector('.delete-data-tab-btn[data-tab-target="#delete-data-tab-basic"]'); const basicTabContent = document.getElementById('delete-data-tab-basic'); if(basicTabBtn) basicTabBtn.classList.add('active'); if(basicTabContent) basicTabContent.classList.add('active'); deleteDataModal.classList.remove('hiding'); deleteDataModal.style.display = 'flex'; requestAnimationFrame(() => deleteDataModal.classList.add('visible')); document.body.style.overflow = 'hidden';
    }
    function closeDeleteDataModal() { /* ... same as before ... */
        if (!deleteDataModal || !deleteDataModal.classList.contains('visible')) return; deleteDataModal.classList.remove('visible'); deleteDataModal.classList.add('hiding'); const onHidingAnimationEnd = (event) => { if (event.target === deleteDataModal && deleteDataModal.classList.contains('hiding')) { deleteDataModal.style.display = 'none'; deleteDataModal.classList.remove('hiding'); deleteDataModal.removeEventListener('animationend', onHidingAnimationEnd); const isAnotherOverlayOpen = Array.from(document.querySelectorAll(overlaySelectors)).filter(el => el.id !== deleteDataModal.id).some(el => !el.classList.contains('hiding') && (el.classList.contains('visible') || el.classList.contains('show') || el.classList.contains('open'))); if (!isAnotherOverlayOpen) document.body.style.overflow = ''; } }; deleteDataModal.removeEventListener('animationend', onHidingAnimationEnd); deleteDataModal.addEventListener('animationend', onHidingAnimationEnd);
    }
    if (openDeleteHistoryModalBtn) { openDeleteHistoryModalBtn.addEventListener('click', () => { closeStoryHistoryPanel(); openDeleteDataModal(); }); }
    if (closeDeleteDataModalBtn) closeDeleteDataModalBtn.addEventListener('click', closeDeleteDataModal);
    if (cancelDeleteDataBtn) cancelDeleteDataBtn.addEventListener('click', closeDeleteDataModal);
    if (deleteDataModal) deleteDataModal.addEventListener('click', (event) => { if (event.target === deleteDataModal) closeDeleteDataModal(); });
    if(deleteDataTabBtns) deleteDataTabBtns.forEach(tabBtn => { tabBtn.addEventListener('click', () => { deleteDataTabBtns.forEach(btn => btn.classList.remove('active')); deleteDataTabContents.forEach(content => content.classList.remove('active')); tabBtn.classList.add('active'); const targetTabContent = document.querySelector(tabBtn.dataset.tabTarget); if (targetTabContent) targetTabContent.classList.add('active'); }); });
    function showHistoryClearedPopup() { /* ... same as before ... */
        if (!historyClearedPopup) return; clearTimeout(historyClearedPopupTimeout); historyClearedPopup.classList.remove('hiding'); historyClearedPopup.classList.add('show'); document.body.style.overflow = 'hidden'; historyClearedPopupTimeout = setTimeout(hideHistoryClearedPopup, 5000);
    }
    function hideHistoryClearedPopup() { /* ... same as before ... */
        if (!historyClearedPopup || !historyClearedPopup.classList.contains('show')) return; clearTimeout(historyClearedPopupTimeout); historyClearedPopup.classList.add('hiding'); const contentElement = historyClearedPopup.querySelector('.feedback-popup-content'); if (contentElement) { const onAnimationEnd = (event) => { if (event.target === contentElement && historyClearedPopup.classList.contains('hiding')) { historyClearedPopup.classList.remove('show'); historyClearedPopup.classList.remove('hiding'); contentElement.removeEventListener('animationend', onAnimationEnd); const isAnotherOverlayOpen = Array.from(document.querySelectorAll(overlaySelectors)).filter(el => el.id !== historyClearedPopup.id).some(el => !el.classList.contains('hiding') && (el.classList.contains('visible') || el.classList.contains('show') || el.classList.contains('open'))); if (!isAnotherOverlayOpen) document.body.style.overflow = ''; } }; contentElement.removeEventListener('animationend', onAnimationEnd); contentElement.addEventListener('animationend', onAnimationEnd); } else { historyClearedPopup.classList.remove('show'); historyClearedPopup.classList.remove('hiding'); /* Fallback */ }
    }
    if (historyClearedPopupCloseBtn) historyClearedPopupCloseBtn.addEventListener('click', hideHistoryClearedPopup);
    if (historyClearedPopup) historyClearedPopup.addEventListener('click', function(event) { if (event.target === historyClearedPopup) hideHistoryClearedPopup(); });
    if (confirmDeleteDataBtn) {
        confirmDeleteDataBtn.addEventListener('click', () => { /* ... same as before ... */
            let historyActuallyCleared = false; const basicTabActive = document.querySelector('.delete-data-tab-btn[data-tab-target="#delete-data-tab-basic"]').classList.contains('active'); const advancedTabActive = document.querySelector('.delete-data-tab-btn[data-tab-target="#delete-data-tab-advanced"]').classList.contains('active'); const basicHistoryCheckedEl = document.getElementById('delete-browsing-history'); const advancedHistoryCheckedEl = document.getElementById('adv-delete-browsing-history'); const basicHistoryChecked = basicHistoryCheckedEl ? basicHistoryCheckedEl.checked : false; const advancedHistoryChecked = advancedHistoryCheckedEl ? advancedHistoryCheckedEl.checked : false;
            if ((basicTabActive && basicHistoryChecked) || (advancedTabActive && advancedHistoryChecked)) { userSearchHistory = []; saveStoryHistoryToLocalStorage(); renderStoryHistory(); historyActuallyCleared = true; }
            closeDeleteDataModal(); if (historyActuallyCleared) setTimeout(showHistoryClearedPopup, 150); else console.log("History not selected or no history to clear.");
        });
    }

    // --- Profile Updated Popup ---
    function showProfileUpdatedPopup() { /* ... same as before ... */
        if (!profileUpdatedPopup) return; clearTimeout(profileUpdatedPopupTimeout); profileUpdatedPopup.classList.remove('hiding'); profileUpdatedPopup.classList.add('show'); document.body.style.overflow = 'hidden'; profileUpdatedPopupTimeout = setTimeout(hideProfileUpdatedPopup, 5000);
    }
    function hideProfileUpdatedPopup() { /* ... same as before ... */
        if (!profileUpdatedPopup || !profileUpdatedPopup.classList.contains('show')) return; clearTimeout(profileUpdatedPopupTimeout); profileUpdatedPopup.classList.add('hiding'); const contentElement = profileUpdatedPopup.querySelector('.feedback-popup-content'); if (contentElement) { const onAnimationEnd = (event) => { if (event.target === contentElement && profileUpdatedPopup.classList.contains('hiding')) { profileUpdatedPopup.classList.remove('show'); profileUpdatedPopup.classList.remove('hiding'); contentElement.removeEventListener('animationend', onAnimationEnd); const isAnotherOverlayOpen = Array.from(document.querySelectorAll(overlaySelectors)).filter(el => el.id !== profileUpdatedPopup.id).some(el => !el.classList.contains('hiding') && (el.classList.contains('visible') || el.classList.contains('show') || el.classList.contains('open'))); if (!isAnotherOverlayOpen) document.body.style.overflow = ''; } }; contentElement.removeEventListener('animationend', onAnimationEnd); contentElement.addEventListener('animationend', onAnimationEnd); } else { profileUpdatedPopup.classList.remove('show'); profileUpdatedPopup.classList.remove('hiding'); /* Fallback */ }
    }
    if (profileUpdatedPopupCloseBtn) profileUpdatedPopupCloseBtn.addEventListener('click', hideProfileUpdatedPopup);
    if (profileUpdatedPopup) profileUpdatedPopup.addEventListener('click', (event) => { if (event.target === profileUpdatedPopup) hideProfileUpdatedPopup(); });

    // --- Change Password & Account Secured Popup ---
    function resetChangePasswordModal() { /* ... same as before, ensure elements exist ... */
        if (otpInputEl) otpInputEl.value = ''; if (newPasswordInputEl) newPasswordInputEl.value = ''; if (confirmPasswordInputEl) confirmPasswordInputEl.value = ''; if (otpErrorEl) otpErrorEl.style.display = 'none'; if (newPasswordErrorEl) newPasswordErrorEl.style.display = 'none'; if (confirmPasswordErrorEl) confirmPasswordErrorEl.style.display = 'none'; if (otpInputEl) otpInputEl.classList.remove('error-input'); if (newPasswordInputEl) newPasswordInputEl.classList.remove('error-input'); if (confirmPasswordInputEl) confirmPasswordInputEl.classList.remove('error-input'); if(otpEntrySection) otpEntrySection.style.display = 'block'; if(newPasswordSection) newPasswordSection.style.display = 'none'; if(changePasswordModalTitle) changePasswordModalTitle.textContent = 'Verify OTP';
    }
    function openChangePasswordOtpModal() { /* ... same as before ... */
        if (!changePasswordOtpModal) return; resetChangePasswordModal(); changePasswordOtpModal.classList.remove('hiding'); changePasswordOtpModal.style.display = 'flex'; requestAnimationFrame(() => changePasswordOtpModal.classList.add('visible')); document.body.style.overflow = 'hidden';
    }
    function closeChangePasswordOtpModal() { /* ... same as before ... */
        if (!changePasswordOtpModal || !changePasswordOtpModal.classList.contains('visible')) return; changePasswordOtpModal.classList.remove('visible'); changePasswordOtpModal.classList.add('hiding'); const onHidingAnimationEnd = (event) => { if (event.target === changePasswordOtpModal && changePasswordOtpModal.classList.contains('hiding')) { changePasswordOtpModal.style.display = 'none'; changePasswordOtpModal.classList.remove('hiding'); changePasswordOtpModal.removeEventListener('animationend', onHidingAnimationEnd); const isAnotherOverlayOpen = Array.from(document.querySelectorAll(overlaySelectors)).filter(el => el.id !== changePasswordOtpModal.id).some(el => !el.classList.contains('hiding') && (el.classList.contains('visible') || el.classList.contains('show') || el.classList.contains('open'))); if (!isAnotherOverlayOpen) document.body.style.overflow = ''; } }; changePasswordOtpModal.removeEventListener('animationend', onHidingAnimationEnd); changePasswordOtpModal.addEventListener('animationend', onHidingAnimationEnd);
    }
    function showAccountSecuredPopup() { /* ... same as before ... */
        if (!accountSecuredPopup) return; clearTimeout(accountSecuredPopupTimeout); accountSecuredPopup.classList.remove('hiding'); accountSecuredPopup.classList.add('show'); document.body.style.overflow = 'hidden'; accountSecuredPopupTimeout = setTimeout(hideAccountSecuredPopup, 5000);
    }
    function hideAccountSecuredPopup() { /* ... same as before ... */
        if (!accountSecuredPopup || !accountSecuredPopup.classList.contains('show')) return; clearTimeout(accountSecuredPopupTimeout); accountSecuredPopup.classList.add('hiding'); const contentElement = accountSecuredPopup.querySelector('.feedback-popup-content'); if (contentElement) { const onAnimationEnd = (event) => { if (event.target === contentElement && accountSecuredPopup.classList.contains('hiding')) { accountSecuredPopup.classList.remove('show'); accountSecuredPopup.classList.remove('hiding'); contentElement.removeEventListener('animationend', onAnimationEnd); const isAnotherOverlayOpen = Array.from(document.querySelectorAll(overlaySelectors)).filter(el => el.id !== accountSecuredPopup.id).some(el => !el.classList.contains('hiding') && (el.classList.contains('visible') || el.classList.contains('show') || el.classList.contains('open'))); if (!isAnotherOverlayOpen) document.body.style.overflow = ''; } }; contentElement.removeEventListener('animationend', onAnimationEnd); contentElement.addEventListener('animationend', onAnimationEnd); } else { accountSecuredPopup.classList.remove('show'); accountSecuredPopup.classList.remove('hiding'); /* Fallback */ }
    }
    function showValidationError(inputEl, errorEl, message) { if (inputEl) inputEl.classList.add('error-input'); if (errorEl) { errorEl.textContent = message; errorEl.style.display = 'block'; } }
    function clearValidationError(inputEl, errorEl) { if (inputEl) inputEl.classList.remove('error-input'); if (errorEl) errorEl.style.display = 'none'; }
    if (changePasswordBtn) { changePasswordBtn.addEventListener('click', () => { mockOtp = Math.floor(100000 + Math.random() * 900000).toString(); console.log("Simulated OTP:", mockOtp); openChangePasswordOtpModal(); }); }
    if (verifyOtpBtn) { verifyOtpBtn.addEventListener('click', () => { /* ... same, ensure elements exist ... */
        const enteredOtp = otpInputEl.value.trim(); clearValidationError(otpInputEl, otpErrorEl); if (!enteredOtp) { showValidationError(otpInputEl, otpErrorEl, "OTP is required."); return; } if (!/^\d{6}$/.test(enteredOtp)) { showValidationError(otpInputEl, otpErrorEl, "OTP must be 6 digits."); return; } if (enteredOtp === mockOtp) { if(otpEntrySection) otpEntrySection.style.display = 'none'; if(newPasswordSection) newPasswordSection.style.display = 'block'; if(changePasswordModalTitle) changePasswordModalTitle.textContent = 'Set New Password'; if(newPasswordInputEl) newPasswordInputEl.focus(); } else { showValidationError(otpInputEl, otpErrorEl, "Invalid OTP. Please try again."); }
    }); }
    if (updatePasswordBtn) { updatePasswordBtn.addEventListener('click', () => { /* ... same, ensure elements exist ... */
        const newPassword = newPasswordInputEl.value; const confirmPassword = confirmPasswordInputEl.value; clearValidationError(newPasswordInputEl, newPasswordErrorEl); clearValidationError(confirmPasswordInputEl, confirmPasswordErrorEl); let isValid = true; if (!newPassword) { showValidationError(newPasswordInputEl, newPasswordErrorEl, "New password is required."); isValid = false; } else if (newPassword.length < 6) { showValidationError(newPasswordInputEl, newPasswordErrorEl, "Password must be at least 6 characters."); isValid = false; } if (!confirmPassword) { showValidationError(confirmPasswordInputEl, confirmPasswordErrorEl, "Confirm password is required."); isValid = false; } else if (newPassword && newPassword !== confirmPassword) { showValidationError(confirmPasswordInputEl, confirmPasswordErrorEl, "Passwords do not match."); isValid = false; } if (isValid) { console.log("Password updated (simulated)."); closeChangePasswordOtpModal(); setTimeout(showAccountSecuredPopup, 150); }
    }); }
    if (closeChangePasswordOtpModalBtn) closeChangePasswordOtpModalBtn.addEventListener('click', closeChangePasswordOtpModal);
    if (changePasswordOtpModal) changePasswordOtpModal.addEventListener('click', (event) => { if (event.target === changePasswordOtpModal) closeChangePasswordOtpModal(); });
    if (accountSecuredPopupCloseBtn) accountSecuredPopupCloseBtn.addEventListener('click', hideAccountSecuredPopup);
    if (accountSecuredPopup) accountSecuredPopup.addEventListener('click', (event) => { if (event.target === accountSecuredPopup) hideAccountSecuredPopup(); });

    // --- Sign Out Popup ---
    function openSignOutPopup() { /* ... same as before ... */
        if (!signOutConfirmPopup) return; closeAllGoogleDropdowns(); signOutConfirmPopup.classList.remove('hiding'); signOutConfirmPopup.style.display = 'flex'; requestAnimationFrame(() => signOutConfirmPopup.classList.add('visible')); document.body.style.overflow = 'hidden';
    }
    function closeSignOutPopup() { /* ... same as before ... */
        if (!signOutConfirmPopup || !signOutConfirmPopup.classList.contains('visible')) return; signOutConfirmPopup.classList.remove('visible'); signOutConfirmPopup.classList.add('hiding'); const onHidingAnimationEnd = (event) => { if (event.target === signOutConfirmPopup && signOutConfirmPopup.classList.contains('hiding')) { signOutConfirmPopup.style.display = 'none'; signOutConfirmPopup.classList.remove('hiding'); signOutConfirmPopup.removeEventListener('animationend', onHidingAnimationEnd); const isAnotherOverlayOpen = Array.from(document.querySelectorAll(overlaySelectors)).filter(el => el.id !== signOutConfirmPopup.id).some(el => !el.classList.contains('hiding') && (el.classList.contains('visible') || el.classList.contains('show') || el.classList.contains('open'))); if (!isAnotherOverlayOpen) document.body.style.overflow = ''; } }; signOutConfirmPopup.removeEventListener('animationend', onHidingAnimationEnd); signOutConfirmPopup.addEventListener('animationend', onHidingAnimationEnd);
    }
    if (signOutLink) { signOutLink.addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); openSignOutPopup(); }); }
    if (cancelSignOutBtn) cancelSignOutBtn.addEventListener('click', closeSignOutPopup);
    if (confirmSignOutBtn) {
        confirmSignOutBtn.addEventListener('click', () => {
            console.log("Signing out...");
            localStorage.removeItem('storyAiUserProfileName');
            localStorage.removeItem('storyAiUserProfileImage');
            loadProfileData(); // Reset avatars/name in header
            closeSignOutPopup();
            window.location.href = 'index.html'; // Or a dedicated login page
        });
    }
    if (signOutConfirmPopup) signOutConfirmPopup.addEventListener('click', (event) => { if (event.target === signOutConfirmPopup) closeSignOutPopup(); });


    // --- Profile Page & Avatar Logic (Global for header, page-specific for form) ---
    function updateProfileAvatars(name, imageUrl) { /* ... same as before, ensure elements exist ... */
        const initial = name ? name.charAt(0).toUpperCase() : 'P';
        const elementsToUpdate = [ { el: profileAvatarBtn, type: 'small' }, { el: profilePicLargeInDropdown, type: 'large' }, { el: profilePageAvatarDisplay, type: 'page' } ];
        elementsToUpdate.forEach(item => {
            if (item.el) {
                const span = item.el.querySelector('span');
                if (imageUrl) { item.el.style.backgroundImage = `url(${imageUrl})`; item.el.classList.add('has-image'); if (span) span.style.display = 'none';
                } else { item.el.style.backgroundImage = ''; item.el.classList.remove('has-image'); if (span) { span.textContent = initial; span.style.display = ''; } else if (item.type === 'page' || item.type === 'large') { const newSpan = document.createElement('span'); newSpan.textContent = initial; item.el.innerHTML = ''; item.el.appendChild(newSpan); } }
            }
        });
        if (profileGreetingHeader) profileGreetingHeader.textContent = `Hi, ${name || 'User'}!`;
        if (profileNameInputEl && currentPageId === 'profile-page') profileNameInputEl.value = name || 'xyz'; // Only set on profile page
        if (profileEmailInputEl && currentPageId === 'profile-page') profileEmailInputEl.value = 'xyz@gmail.com'; // Static for now
    }
    function loadProfileData() { const savedName = localStorage.getItem('storyAiUserProfileName') || 'xyz'; const savedImage = localStorage.getItem('storyAiUserProfileImage'); updateProfileAvatars(savedName, savedImage); }
    function saveProfileData() { if (!profileNameInputEl) return; const name = profileNameInputEl.value.trim(); const imageUrl = localStorage.getItem('storyAiUserProfileImage'); localStorage.setItem('storyAiUserProfileName', name); updateProfileAvatars(name, imageUrl); showProfileUpdatedPopup(); }

    if (currentPageId === 'profile-page') {
        if (changeProfilePicProfilePageBtn && profileImageUpload) { changeProfilePicProfilePageBtn.addEventListener('click', () => profileImageUpload.click()); }
        if (saveProfileChangesBtn) { saveProfileChangesBtn.addEventListener('click', saveProfileData); }
    }
    // Listener for camera icon in dropdown (global)
    if (changeProfilePicBtnInDropdown && profileImageUpload) {
         changeProfilePicBtnInDropdown.addEventListener('click', (e) => {
            e.stopPropagation();
            profileImageUpload.click(); // This will trigger the 'change' event below if a file is selected
         });
    }
    if (profileImageUpload) { // This listener is global because profileImageUpload is in _footer
        profileImageUpload.addEventListener('change', (event) => {
            const file = event.target.files[0];
            if (file && file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    const imageUrl = e.target.result;
                    localStorage.setItem('storyAiUserProfileImage', imageUrl);
                    const currentName = localStorage.getItem('storyAiUserProfileName') || (profileNameInputEl ? profileNameInputEl.value : 'xyz');
                    updateProfileAvatars(currentName, imageUrl); // Updates header avatars globally
                    // If on profile page, also update the large avatar there
                    if (currentPageId === 'profile-page' && profilePageAvatarDisplay) {
                        profilePageAvatarDisplay.style.backgroundImage = `url(${imageUrl})`;
                        profilePageAvatarDisplay.classList.add('has-image');
                        const span = profilePageAvatarDisplay.querySelector('span');
                        if (span) span.style.display = 'none';
                    }
                };
                reader.readAsDataURL(file);
            } else { alert('Please select a valid image file.'); }
        });
    }
    loadProfileData(); // Load profile data on initial page load for all pages (updates header)


    // --- Global Escape Key Handler ---
    document.addEventListener('keydown', (event) => { /* ... same as before ... */
        if (event.key === 'Escape') {
            const activeGoogleDropdown = allGoogleDropdowns.find(dd => dd && dd.classList.contains('active'));
            let handled = false;
            if (activeGoogleDropdown) { closeAllGoogleDropdowns(); const triggerIdBase = activeGoogleDropdown.id.replace('profile-dropdown', 'profile-avatar-btn').replace('apps-grid', 'apps-icon-btn'); const trigger = document.getElementById(triggerIdBase); if(trigger) trigger.focus(); handled = true;
            } else if (signOutConfirmPopup && signOutConfirmPopup.classList.contains('visible')) { closeSignOutPopup(); handled = true;
            } else if (accountSecuredPopup && accountSecuredPopup.classList.contains('show')) { hideAccountSecuredPopup(); handled = true;
            } else if (changePasswordOtpModal && changePasswordOtpModal.classList.contains('visible')) { closeChangePasswordOtpModal(); handled = true;
            } else if (profileUpdatedPopup && profileUpdatedPopup.classList.contains('show')) { hideProfileUpdatedPopup(); handled = true;
            } else if (historyClearedPopup && historyClearedPopup.classList.contains('show')) { hideHistoryClearedPopup(); handled = true;
            } else if (deleteDataModal && deleteDataModal.classList.contains('visible')) { closeDeleteDataModal(); handled = true;
            } else if (promptLibraryPanel && promptLibraryPanel.classList.contains('open')) { closePromptLibraryPanel(); handled = true;
            } else if (storyHistoryPanel && storyHistoryPanel.classList.contains('open')) { closeStoryHistoryPanel(); const trigger = document.getElementById('story-history-app-btn'); if(trigger) trigger.focus(); handled = true;
            } else if (storyProgressModal && storyProgressModal.classList.contains('visible')) { closeStoryProgressModal(); const trigger = document.getElementById('story-progress-app-btn'); if(trigger) trigger.focus(); handled = true;
            } else if (promptModal && promptModal.classList.contains('visible')) { closePromptModal(); handled = true;
            } else if (feedbackFormModal && feedbackFormModal.classList.contains('visible')) { closeFeedbackFormModal(); handled = true;
            } else if (feedbackSuccessPopup && feedbackSuccessPopup.classList.contains('show')) { hideFeedbackSuccessPopup(); handled = true;
            } else if (downloadSuccessPopup && downloadSuccessPopup.classList.contains('show')) { hideDownloadSuccessPopup(); handled = true; }
        }
    });

    // --- Footer Year ---
    const footerYearElement = document.getElementById('footer-year');
    if (footerYearElement) footerYearElement.textContent = new Date().getFullYear();

    // --- Hide loader after initial setup ---
    // A short delay can help ensure rendering is complete.
    setTimeout(() => {
        if (pageLoader) pageLoader.classList.remove('show');
    }, 200);
});