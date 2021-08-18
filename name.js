define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/stiat/qualtrics/qstiat6.js'], function(APIConstructor, stiatExtension){
	
	var API = new APIConstructor();
		  return stiatExtension({
		  category : { 
		    name : 'Sunscreen', //Will appear in the data.
		    title : {
		      media : {word : 'Sunscreen'}, //Name of the category presented in the task.
		      css : {color:'#31b404','font-size':'2em'}, //Style of the category title.
		      height : 7 //Used to position the "Or" in the combined block.
		    }, 
		    media : [ //Stimuli content as PIP's media objects
    		    	{word: 'Beach'}, 
    			{word: 'Cream'}, 
    			{word: 'Protection'}, 
    			{word: 'Skin'}, 
    			{word: 'Sun'}
		    ], 
		    //Stimulus css (style)
		    css : {color:'#31b404','font-size':'3em'}
		  },	

  		attribute1 : 
			{
			name : 'Me', //Attribute label
			title : {
				media : {word : 'Me'}, //Name of the category presented in the task.
				css : {color:'#31b404','font-size':'2em'}, //Style of the category title.
				height : 7 //Used to position the "Or" in the combined block.
			}, 
			media : [ //Stimuli
				{word: 'I'},
				{word: 'Me'},
				{word: 'Mine'},
				{word: 'My'},
				{word: 'Self'}
			], 
			//Can change color and size of the targets here.
			css : {color:'#31b404','font-size':'3em'}
			},
		attribute2 : 
			{
			name : 'Not me', //Attribute label
			title : {
				media : {word : 'Not me'}, //Name of the category presented in the task.
				css : {color:'#31b404','font-size':'2em'}, //Style of the category title.
				height : 7 //Used to position the "Or" in the combined block.
			}, 
			media : [ //Stimuli
				{word: 'It'},
				{word: 'Other'},
				{word: 'Their'},
				{word: 'Them'},
				{word: 'They'}
			], 
			//Can change color and size of the targets here.
			css : {color:'#31b404','font-size':'3em'}
			},
trialsByBlock :
            [//Each object in this array defines a block

                {
                    instHTML : '', //Empty means we will create the inst from the instTemplate variable further below.
                    block : 1, //The block variable is not used later, but could help the user.
                    //In each block, we can include a number of mini-blocks, to reduce repetition of same group/response.
                    miniBlocks : 1, //Set to 1 if don't need mini blocks. 0 will break the task.
                    singleAttTrials : 5, //Number of trials of the attribute that does not share key with the category (in a mini block).
                    sharedAttTrials : 5, //Number of trials of the attribute that shares key with the category (in a mini block).
                    categoryTrials : 0 // Number of trials of the category (in a mini-block). If 0, the label does not appear.
                    //Note: if no category trials, then attribute1, the one on the left, is considered the single attribute.
                },
                {
                    instHTML : '',
                    block : 2
,
                    miniBlocks : 1,
                    singleAttTrials : 5,
                    sharedAttTrials : 5,
                    categoryTrials : 5
                },
                {
                    instHTML : '',
                    block : 3,
                    miniBlocks : 2,
                    singleAttTrials : 5,
                    sharedAttTrials : 5,
                    categoryTrials : 5
                },
                {
                    instHTML : '',
                    block : 4,
                    miniBlocks : 1,
                    singleAttTrials : 5,
                    sharedAttTrials : 5,
                    categoryTrials : 5
                },
                {
                    instHTML : '',
                    block : 5,
                    miniBlocks : 2,
                    singleAttTrials : 5,
                    sharedAttTrials : 5,
                    categoryTrials : 5
                }
            ],

  base_url : {//Where are your images at?
    image : 'https://baranan.github.io/minno-tasks/images/'
  }}
  );
  });