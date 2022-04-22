function draw_main_screen() {
    var elContainer_1 = $("body").empty();
    elContainer_1.append("<div id='aboutus' class='btn btn-outline-light btn-lg mt-2 ml-2' style='position: absolute; border-radius: 45%; top: 10px; right: 10px;'><i class='fas fa-info' style='font-size: 30px;'></i></div>")
    elContainer_1.append('<div id="main_screen" class="container d-flex align-items-center justify-content-center" style="height: 100vh;"><div class="row pr-5 pl-5" style="width: 500px"><div id="past" class="btn btn-outline-light btn-lg col-12 mb-3 btn-block" style="border-radius: 2rem;">Past</div><div id="present" class="btn btn-outline-light btn-lg col-12 mb-3 btn-block" style="border-radius: 2rem;">Present</div><div id="future" class="btn btn-outline-light btn-lg col-12 mb-3 btn-block" style="border-radius: 2rem;">Future</div><div id="passive" class="btn btn-outline-light btn-lg col-12 mb-3 btn-block" style="border-radius: 2rem;">Passive</div></div></div>')

    $("#past").click(function() {
        draw_past_screen()
    })
    $("#present").click(function() {
        draw_present_screen()
    })
    $("#future").click(function() {
        draw_future_screen()
    })
    $("#passive").click(function() {
        draw_passive_screen()
    })
    $("#aboutus").click(function() {
        draw_about_us()
    })
}

function draw_about_us() {
    var elContainer_1 = $("body").empty();
    elContainer_1.append("<div class='container'><div id='back' class='btn btn-outline-light btn-lg btn-block mb-4 mt-4' style='border-radius: 2rem;'>Back</div></div>")
    elContainer_1.append("<div class='container'><div class='d-flex justify-content-center mt-3 mb-3'><div class='h5 text-white p-3 text-center' style='border-radius: 2rem; border: 1px solid white;'>About us.</div></div><div class='pr-3 pl-3 text-white'><p>This app was created to ease understanding of English tenses for people.Creators are students of Oguz Han engineering and technology university.Yaylymow Bezirgen, Tuvakov Abdyjelil, Rozmetov Timur, Hudayberdiyev Davud.</p><p>If there is a mistake or you have some suggestions please contact us.</p><p>Contact: <a href='http://eetengtense@gmail.com'>eetengtense@gmail.com</a></p></div></div>")
    
    $("#back").click(function() {
        draw_main_screen()
    })
}

function draw_past_screen() {
    var elContainer_1 = $("body").empty();
    elContainer_1.append('<div id="back" class="btn btn-outline-light btn-lg mt-2 ml-2 rounded-circle" style="position: absolute;"><i class="fas fa-angle-left" style="font-size: 30px;"></i></div>')
    elContainer_1.append('<div id="past_screen" class="container d-flex align-items-center justify-content-center" style="height: 100vh;"><div class="row pr-5 pl-5" style="width: 500px"><div id="past_simple" class="btn btn-outline-light btn-lg col-12 mb-3 btn-block" style="border-radius: 2rem;">Simple</div><div id="past_continuous" class="btn btn-outline-light btn-lg col-12 mb-3 btn-block" style="border-radius: 2rem;">Continuous</div><div id="past_perfect" class="btn btn-outline-light btn-lg col-12 mb-3 btn-block" style="border-radius: 2rem;">Perfect</div><div id="past_perfect_continuous" class="btn btn-outline-light btn-lg col-12 mb-3 btn-block" style="border-radius: 2rem;">Perfect continuous</div></div></div>') 

    function draw_simple_screen() {
        var elContainer_1 = $("body").empty();
        elContainer_1.append("<div class='container'><div id='back' class='btn btn-outline-light btn-lg btn-block mb-4 mt-4' style='border-radius: 2rem;'>Back</div></div>")
        elContainer_1.append("<div class='container'><div class='d-flex justify-content-center mt-3 mb-3'><div class='h5 text-white p-3 text-center' style='border-radius: 2rem; border: 1px solid white;'>Past Simple Tense Definition</div></div><div class='pr-3 pl-3 text-white'><p><p>Past Simple shows finished action which began and finished in the past. Auxiliary verb of Past Simple is (Did in positive, Didn't in negative). These are time expressions: Yesterday, ago, last.</p><p>Verb to be turns into was/were in the Past Simple. “Was” is used with (I, He, She, It). “Were” is used with (They, We, You). Negative form of was/were is wasn't/weren't.</p><p>Question form is got by putting auxiliary verb (did) or the verb “to be” to the beginning of the sentence. Ex: I was at the meeting three hours ago. Verb to be moves to the beginning. Ex: Were you at the meeting three hours ago?</p><p><p>Structure of Past Simple.</p><div class='p-2' style='border: 3px solid #4BACC6'><p>Positive:</p><p><p>Subject + V2/(ed) + Object.</p>I watched TV yesterday.<br>She went to Avaza two years ago.<br>We were in USA last year.</p></div><br><div class='p-2' style='border: 3px solid #4BACC6'><p>Negative:</p><p><p>Subject + didn't + V1 + Object.</p><p>Notice after (didn't) we use only V1, we can't use V2/(ed) because we already have auxiliary verb of Past Simple (didn't).</p>He didn't bring his laptop to the lesson two days ago.<br>I wasn't at the party last week.<br>The test didn't start a minute ago. It started five minutes ago.</p></div><br><div class='p-2' style='border: 3px solid #4BACC6'><p>Question:</p><p><p>Did /Didn't + Subject + V1 + Object.</p>Did you play tennis yesterday evening?<br>Didn't you visit your friend at the hospital?<br>Were you at the meeting?<br></p></div></p></p></div></div>");
        
        $("#back").click(function() {
            draw_past_screen()
        })
    }    
    function draw_continuous_screen() {
        var elContainer_1 = $("body").empty();
        elContainer_1.append("<div class='container'><div id='back' class='btn btn-outline-light btn-lg btn-block mb-4 mt-4' style='border-radius: 2rem;'>Back</div></div>")
        elContainer_1.append("<div class='container'><div class='d-flex justify-content-center mt-3 mb-3'><div class='h5 text-white p-3 text-center' style='border-radius: 2rem; border: 1px solid white;'>Past Continuous Tense Definition</div></div><div class='pr-3 pl-3 text-white'><p><p>Past Progressive (Continuous) indicates duration of an action in the past. It means action started and continued for some time in the past. It is also can be used in parallel actions. Auxiliary verb of Past Progressive (Continuous) is (was/were). These are time expressions: at 5 o'clock yesterday, from... till, whole, while, all day long.</p><p>Negative form is (was + not/ were + not). Note: was + not = wasn't, were + not = weren't.</p><p>Question form is got by putting only auxiliary verb (was/were) to the beginning of the sentence.</p><p><p>Structure of Past Progressive (Continuous)</p><div class='p-2' style='border: 3px solid #4BACC6'><p>Positive:</p><p><p>Subject + was/were + V(ing) + Object</p>I was watching TV, when my Mom came.<br>They were swimming at the pool yesterday morning.<br>He was doing his homework whole day.</p></div><br><div class='p-2' style='border: 3px solid #4BACC6'><p>Negative:</p><p><p>Subject + wasn't/weren't + V(ing) + Object</p>He wasn't sleeping when a football match started.<br>Students weren't listening, while a teacher was explaining the theme.<br>Yesterday from 5 till 7 Maksat wasn't playing tennis. He was playing chess.</p></div><br><div class='p-2' style='border: 3px solid #4BACC6'><p>Question:</p><p><p>Was/Were/Wasn't/Weren't + Subject + V(ing) + Object</p>Were you sleeping yesterday noon?<br>Weren't they listening to the teacher, while she was explaining?<br>Wasn't he doing the homework, when they came?<br></p></div></p></p></div></div>");

        $("#back").click(function() {
            draw_past_screen()
        })
    }    
    function draw_perfect_screen() {
        var elContainer_1 = $("body").empty();
        elContainer_1.append("<div class='container'><div id='back' class='btn btn-outline-light btn-lg btn-block mb-4 mt-4' style='border-radius: 2rem;'>Back</div></div>")
        elContainer_1.append("<div class='container'><div class='d-flex justify-content-center mt-3 mb-3'><div class='h5 text-white p-3 text-center' style='border-radius: 2rem; border: 1px solid white;'>Past Perfect Tense Definition</div></div><div class='pr-3 pl-3 text-white'><p><p>Past Perfect tense is used to indicate the action that happened before another action in the past. In this tense we have to turn the first action in Past Perfect, then the second action into Past simple. Auxiliary verb is the verb (had). Time expressions are: after, when, before, until.</p><p><p>Structure of Past Perfect</p><div class='p-2' style='border: 3px solid #4BACC6'><p>Positive:</p><p><p>Subject + had + V3/V(ed) + Object</p>I had watched this film before it was released.<br>When I phoned to the office, Davud had already left.<br>I was going to the work when I suddenly remembered I had forgot(forgotten) to feed my dog.</p></div><br><div class='p-2' style='border: 3px solid #4BACC6'><p>Negative:</p><p><p>Subject + hadn’t + V3/V(ed) + Object</p>She hadn’t finished the housework when I came.<br>Yesterday I knew my friend had flown to New York for 3 months.<br>He hadn’t had a rest before we went to work out.</p></div><br><div class='p-2' style='border: 3px solid #4BACC6'><p>Question:</p><p><p>Had/hadn’t + Subject + V3/V(ed) + Object</p>Had she gone before the game ended?<br>Had you known him before you saw him at the party?<br>Hadn’t he quit smoking before the lungs’ cancer?<br></p></div></p></p></div></div>");

        $("#back").click(function() {
            draw_past_screen()
        })
    }     
    function draw_perfect_continuous_screen() {
        var elContainer_1 = $("body").empty();
        elContainer_1.append("<div class='container'><div id='back' class='btn btn-outline-light btn-lg btn-block mb-4 mt-4' style='border-radius: 2rem;'>Back</div></div>")
        elContainer_1.append("<div class='container'><div class='d-flex justify-content-center mt-3 mb-3'><div class='h5 text-white p-3 text-center' style='border-radius: 2rem; border: 1px solid white;'>Past Perfect Continuous Tense Definition</div></div><div class='pr-3 pl-3 text-white'><p><p>Past Perfect Progressive (Continuous) indicates duration of action that started before another action in the past. NOTE: The action shouldn’t be interrupted. Auxiliary verb of Past Perfect Progressive (Continuous) is (had been). These are time expressions: since, for, for ages. Negative form is got by adding “not” to the verb had, had + not = hadn’t. Question form is got by putting the verb had to the beginning of the sentence.</p><p><p>Structure of Past Perfect Progressive (Continuous)</p><div class='p-2' style='border: 3px solid #4BACC6'><p>Positive:</p><p><p>Subject + had + been + V(ing) + Object</p>He had been waiting her for two hours when she came.<br>They were late to the lesson. They had been waiting for a bus since 8:45.<br>He had been playing a computer game for an hour when his father came in.</p></div><br><div class='p-2' style='border: 3px solid #4BACC6'><p>Negative:</p><p><p>Subject + hadn’t + been + V(ing) + Object</p>He hadn’t been waiting her for two hours when she came.<br>They weren’t late to the lesson. They hadn’t been waiting for Tom.<br>He hadn’t been playing a computer game for an hour when his father came in.</p></div><br><div class='p-2' style='border: 3px solid #4BACC6'><p>Question:</p><p>Had he been sleeping before his mom came?<br>Had you been waiting for a taxi for 10 minutes when it began to snow?<br>Had it been raining since yesterday evening?<br></p></div></p></p></div></div>");

        $("#back").click(function() {
            draw_past_screen()
        })
    }

    $("#back").click(function() {
        draw_main_screen()
    })
    $("#past_simple").click(function() {
        draw_simple_screen()
    })
    $("#past_continuous").click(function() {
        draw_continuous_screen()
    })
    $("#past_perfect").click(function() {
        draw_perfect_screen()
    })
    $("#past_perfect_continuous").click(function() {
        draw_perfect_continuous_screen()
    })
}




function draw_present_screen() {
    var elContainer_1 = $("body").empty();
    elContainer_1.append('<div id="back" class="btn btn-outline-light btn-lg mt-2 ml-2 rounded-circle" style="position: absolute;"><i class="fas fa-angle-left" style="font-size: 30px;"></i></div>')
    elContainer_1.append('<div id="present_screen" class="container d-flex align-items-center justify-content-center" style="height: 100vh;"><div class="row pr-5 pl-5" style="width: 500px"><div id="present_simple" class="btn btn-outline-light btn-lg col-12 mb-3 btn-block" style="border-radius: 2rem;">Simple</div><div id="present_continuous" class="btn btn-outline-light btn-lg col-12 mb-3 btn-block" style="border-radius: 2rem;">Continuous</div><div id="present_perfect" class="btn btn-outline-light btn-lg col-12 mb-3 btn-block" style="border-radius: 2rem;">Perfect</div><div id="present_perfect_continuous" class="btn btn-outline-light btn-lg col-12 mb-3 btn-block" style="border-radius: 2rem;">Perfect continuous</div></div></div>')


    function draw_simple_screen() {
        var elContainer_1 = $("body").empty();
        elContainer_1.append("<div class='container'><div id='back' class='btn btn-outline-light btn-lg btn-block mb-4 mt-4' style='border-radius: 2rem;'>Back</div></div>")
        elContainer_1.append("<div class='container'><div class='d-flex justify-content-center mt-3 mb-3'><div class='h5 text-white p-3 text-center' style='border-radius: 2rem; border: 1px solid white;'>Present Simple Tense Definition</div></div><div class='pr-3 pl-3 text-white'><p><p>Present Simple is used for general facts and for habitual or every day activity. Auxiliary verb of Present Simple is (Do/Does in positive and don't/doesn't in negative). These are time expressions of Present Simple: every day, always, often, sometimes, seldom, usually, etc.</p><p>Note: WHEN THE SUBJECT IS A SINGULAR NOUN (HE, SHE, IT) IT IS NECESSARY TO ADD (-S OR -ES) TO THE VERB. For example: He likes, she watches, it plays. Plural nouns are (I, We, They). We don't add -s or -es to them. For example: I play, they go, we write.</p><p>Negative form is (don't for plural/doesn't for singular).</p><p>Question form is got by putting auxiliary verb (do/does) to the beginning of our sentence. Note: We don't add -s or -es to the end of the verb in questions with singular form. For example: Do you play tennis every day? Does water boil at 100%?</p><p><p>Structure of Present Simple</p><div class='p-2' style='border: 3px solid #4BACC6'><p>Positive:</p><p><p>Subject + V1/(-s/-es) + Object</p>I do my homework every day.<br>She always plays volleyball.<br>He gets up at 7 o'clock every morning.</p></div><br><div class='p-2' style='border: 3px solid #4BACC6'><p>Negative:</p><p><p>Subject + don't/doesn't + V1 + Object</p>They don't work at Sunday.<br>Computer doesn't work properly.<br>We don't go to bed until 11 o'clock.</p></div><br><div class='p-2' style='border: 3px solid #4BACC6'><p>Question:</p><p><p>Do/Does/Don't/Doesn't + Subject + V1 + Object</p>Do you go to school every day?<br>Does he attend Computer courses?<br>Do they watch news every morning?<br></p></div></p></p></div></div>");

        $("#back").click(function() {
            draw_present_screen()
        })
    }    
    function draw_continuous_screen() {
        var elContainer_1 = $("body").empty();
        elContainer_1.append("<div class='container'><div id='back' class='btn btn-outline-light btn-lg btn-block mb-4 mt-4' style='border-radius: 2rem;'>Back</div></div>")
        elContainer_1.append("<div class='container'><div class='d-flex justify-content-center mt-3 mb-3'><div class='h5 text-white p-3 text-center' style='border-radius: 2rem; border: 1px solid white;'>Present Continuous Tense Definition</div></div><div class='pr-3 pl-3 text-white'><p><p>Present Progressive (Continuous) is used to indicate an activity is being done at the moment. It started in the past, CONTINUES NOW and will end in the future. Auxiliary verb of Present Progressive (Continuous) is the verb to be ('am' for I), ('is' for he and she), ('are' for you, they and we). These are time expressions: now, still, just now, look, listen, this moment, whole, from... till, while, all day long.</p><p>Negative form is (am + not + Ving/ is + not + Ving/ are + not + Ving). Note: are + not = aren't, is + not = isn't</p><p>Question form is got by putting only auxiliary verb (am/is/are) to the beginning of the sentence.</p><p><p>Structure of Present Progressive (Continuous)</p><div class='p-2' style='border: 3px solid #4BACC6'><p>Positive:</p><p><p>Subject + to be(am/is/are) + V(ing) + Object</p>I am studying now.<br>Look! Somebody is smoking nearby your car.<br>He is still working on this difficult task.</p></div><br><div class='p-2' style='border: 3px solid #4BACC6'><p>Negative:</p><p><p>Subject + to be (am/is/are) + not + V(ing) + Object</p>I am not working just now.<br>Students aren't sitting at the class right now.<br>He isn't playing football whole day.</p></div><br><div class='p-2' style='border: 3px solid #4BACC6'><p>Question:</p><p><p>To be (am/is/are/isn't/aren't) + Subject + V(ing) + Object</p>Are you playing a computer game now?<br>Is he chatting now?<br>Are they playing football all day long?<br></p></div></p></p></div></div>");

        $("#back").click(function() {
            draw_present_screen()
        })
    }
    function draw_perfect_screen() {
        var elContainer_1 = $("body").empty();
        elContainer_1.append("<div class='container'><div id='back' class='btn btn-outline-light btn-lg btn-block mb-4 mt-4' style='border-radius: 2rem;'>Back</div></div>")
        elContainer_1.append("<div class='container'><div class='d-flex justify-content-center mt-3 mb-3'><div class='h5 text-white p-3 text-center' style='border-radius: 2rem; border: 1px solid white;'>Present Perfect Tense Definition</div></div><div class='pr-3 pl-3 text-white'><p><p>Present Perfect tense is used to indicate a link between the present and the past or to simplify this tense is used to express actions that started in the past and continue up to the present. There is no exact time in Present Perfect. Auxiliary verb is (have/has). Time expressions: ever, never, before, already, yet, just.</p><p><p>Structure of Present Perfect:</p><div class='p-2' style='border: 3px solid #4BACC6'><p>Positive:</p><p><p>Subject + have/has + V3 + Object</p>I have wasted a lot of money in the last 2 years.<br>I have worked for this company for 20 years.<br>I have been to the USA.</p></div><br><div class='p-2' style='border: 3px solid #4BACC6'><p>Negative:</p><p><p>Subject + haven’t /hasn’t + V3 + Object</p>I haven’t seen her for 2 months.<br>She has never been to Paris.<br>They haven’t finished their project yet.</p></div><br><div class='p-2' style='border: 3px solid #4BACC6'><p>Question:</p><p><p>Have/has + Subject + V3 + Object</p>Haven’t you studied this course before?<br>Hasn’t she finished cooking yet?<br>Have you ever read a book?<br></p></div></p></p></div></div>");

        $("#back").click(function() {
            draw_present_screen()
        })
    }     
    function draw_perfect_continuous_screen() {
        var elContainer_1 = $("body").empty();
        elContainer_1.append("<div class='container'><div id='back' class='btn btn-outline-light btn-lg btn-block mb-4 mt-4' style='border-radius: 2rem;'>Back</div></div>")
        elContainer_1.append("<div class='container'><div class='d-flex justify-content-center mt-3 mb-3'><div class='h5 text-white p-3 text-center' style='border-radius: 2rem; border: 1px solid white; width:'>Present Perfect Continuous Tense Definition</div></div><div class='pr-3 pl-3 text-white'><p><p>The Present Perfect Progressive (Continuous) shows duration of an activity that started in the past and continues in the present. Auxiliary verbs of Present Perfect Continuous are have/has. Note: I have, You have, They have, We have = I've, You've, They've, We've; She has, He has, It has = She's, He's, It's; but after these it is the necessity of the verb (been). These are time expressions: since, for, all morning/all day/all week.</p><p>NOTE: The Present Perfect Progressive (Continuous) isn't used with stative verbs. The Present Perfect is used with stative verbs. In some cases, there is no difference between Present Perfect and Present Perfect Progressive when the verb expresses the duration of present activity or something that happens regularly or usually. For example: live, work, study.</p><p>When there is no mention of time it means action is in progress recently.</p><p><p>Structure of Present Perfect Progressive</p><div class='p-2' style='border: 3px solid #4BACC6'><p>Positive:</p><p><p>Subject + have/has + been + V(ing) + Object</p>I've been learning English for 5 years.<br>She's been doing her homework all day.<br>We've been playing football since 9 o’clock in the morning.</p></div><br><div class='p-2' style='border: 3px solid #4BACC6'><p>Negative:</p><p><p>Subject + haven't/hasn't + been + V(ing) + Object</p>He hasn't been learning Japanese for 10 years.<br>They haven't known each other for 3 years. NOTE: Know is STATIVE VERB that's why we use Present Perfect with it.<br>It's been raining for a whole day.</p></div><br><div class='p-2' style='border: 3px solid #4BACC6'><p>Question:</p><p><p>Have/Has + Subject + been + V(ing) + Object</p>Have you been doing housework for 3 hours?<br>How long has she been living in London? It is also possible: How long has she lived in London?<br>What have you been doing for an hour?<br></p></div></p></p></div></div>");

        $("#back").click(function() {
            draw_present_screen()
        })
    }

    $("#back").click(function() {
        draw_main_screen()
    })
    $("#present_simple").click(function() {
        draw_simple_screen()
    })
    $("#present_continuous").click(function() {
        draw_continuous_screen()
    })
    $("#present_perfect").click(function() {
        draw_perfect_screen()
    })
    $("#present_perfect_continuous").click(function() {
        draw_perfect_continuous_screen()
    })
}

function draw_future_screen() {
    var elContainer_1 = $("body").empty();
    elContainer_1.append('<div id="back" class="btn btn-outline-light btn-lg mt-2 ml-2 rounded-circle" style="position: absolute;"><i class="fas fa-angle-left" style="font-size: 30px;"></i></div>')
    elContainer_1.append('<div id="future_screen" class="container d-flex align-items-center justify-content-center" style="height: 100vh;"><div class="row pr-5 pl-5" style="width: 500px"><div id="future_simple" class="btn btn-outline-light btn-lg col-12 mb-3 btn-block" style="border-radius: 2rem;">Simple</div><div id="future_continuous" class="btn btn-outline-light btn-lg col-12 mb-3 btn-block" style="border-radius: 2rem;">Continuous</div><div id="future_perfect" class="btn btn-outline-light btn-lg col-12 mb-3 btn-block" style="border-radius: 2rem;">Perfect</div><div id="future_perfect_continuous" class="btn btn-outline-light btn-lg col-12 mb-3 btn-block" style="border-radius: 2rem;">Perfect continuous</div></div></div>')


    function draw_simple_screen() {
        var elContainer_1 = $("body").empty();
        elContainer_1.append("<div class='container'><div id='back' class='btn btn-outline-light btn-lg btn-block mb-4 mt-4' style='border-radius: 2rem;'>Back</div></div>")
        elContainer_1.append("<div class='container'><div class='d-flex justify-content-center mt-3 mb-3'><div class='h5 text-white p-3 text-center' style='border-radius: 2rem; border: 1px solid white; width:'>Future Simple Tense Definition</div></div><div class='pr-3 pl-3 text-white'><p><p>Future Simple indicates the action in the near future. It means action will happen. These are time expressions of the Future Time: next, tomorrow, soon, later. There are 5 ways to indicate Future Time. They are Present Simple, Present Progressive (Continuous), Future Simple using the verb WILL and TO BE GOING TO, Modal Verbs: may, might. Present Simple expressing future is used in timetables or definite schedules. Present Progressive expressing future is used when the speaker has a planned event or definite intention. Future Simple using the verb WILL is used in predictions and spontaneous decisions. Future Simple using TO BE GOING TO is used in prior plans and predictions too. Modal Verbs: may, might is used when the speaker isn’t sure will the action happen or not.</p><p><p>Structure of Future Simple using <b>WILL</b></p><div class='p-2' style='border: 3px solid #4BACC6'><p>Positive:</p><p><p>Subject + will + V1 + Object</p>Somebody is calling.<br>I will pick up the phone.<br><br>We are run out of milk.<br>I will buy some later.</p></div><br><div class='p-2' style='border: 3px solid #4BACC6'><p>Negative:</p><p><p>Subject + will + not (won’t) + V1 + Object</p>Somebody is knocking the door. I’m afraid. I won’t open it.<br><br>I won’t go anywhere tomorrow.<br>I won’t go to the party.</p></div><br><div class='p-2' style='border: 3px solid #4BACC6'><p>Question:</p><p><p>Will + Subject + V1 + Object</p>I will have a party next Friday. Will you come?<br>Will you study Japanese next morning?<br></p></div><br><p>Structure of Future Simple using <b>TO BE GOING TO</b></p><div class='p-2' style='border: 3px solid #4BACC6'><p>Positive:</p><p><p>Subject + To be (am/is/are) going to + V1 + Object</p>I’m going to spend my vacation in Monaco. (It means I planned it before)<br>It is going to rain.</p></div><br><div class='p-2' style='border: 3px solid #4BACC6'><p>Negative:</p><p><p>Subject + To be (am/is/are) + not + going to + V1 + Object</p>There aren’t going to sleep.<br>She isn’t going to tell the truth.<br></p></div><br><div class='p-2' style='border: 3px solid #4BACC6'><p>Question:</p><p><p>To be (am/is/are) + Subject + going to + V1 + Object</p>Who are you going to be in the future?<br>What are you going to do in the holidays?<br></p></div></p><div class='p-2' style='border: 3px solid #4BACC6'><h5><b>Present Simple expressing Future Time</b></h5><p>The train leaves at 10 o’clock tomorrow.<br>Does museum open at 7 in the morning next Friday?<br>The plane doesn’t take off tomorrow night.</p></div><br><div class='p-2' style='border: 3px solid #4BACC6'><h5><b>Present Continuous expressing Future Time</b></h5><p>I’m having a meeting in five minutes.<br>He isn’t seeing a doctor tomorrow.<br>Are you meeting your friend next Monday?</p></div><br><div class='p-2' style='border: 3px solid #4BACC6'><h5><b>Modal Verbs: may, might</b></h5><p>He might pass this exam.<br>She might not take her phone to the party.<br>I may be coming to see you tomorrow.</p></div></p></div></div>");

        $("#back").click(function() {
            draw_future_screen()
        })
    }    
    function draw_continuous_screen() {
        var elContainer_1 = $("body").empty();
        elContainer_1.append("<div class='container'><div id='back' class='btn btn-outline-light btn-lg btn-block mb-4 mt-4' style='border-radius: 2rem;'>Back</div></div>")
        elContainer_1.append("<div class='container'><div class='d-flex justify-content-center mt-3 mb-3'><div class='h5 text-white p-3 text-center' style='border-radius: 2rem; border: 1px solid white; width:'>Future Continuous Tense Definition</div></div><div class='pr-3 pl-3 text-white'><p><p>Future Progressive (Continuous) indicates an action that will be in progress in the future. It is similar to Present Continuous but in the future. These are time expressions of Future Continuous: while, when, whole, from… till, at … o’clock tomorrow, all day long. We’ll make it clear with examples.</p><p><p>Structure of Future Progressive:</p><div class='p-2' style='border: 3px solid #4BACC6'><p>Positive:</p><p><p>Subject + will + be + V(ing) + Object</p>I will be doing my homework tomorrow while my mom will be cooking a dinner.<br>He will be sleeping at 6 o’clock tomorrow evening.<br>She will be playing tennis when her father arrives.</p></div><br><div class='p-2' style='border: 3px solid #4BACC6'><p>Negative:</p><p><p>Subject + won’t + be + V(ing) + Object</p>It won’t be raining tomorrow morning.<br>He won’t be playing soccer at 8 o’clock tomorrow.<br>She won’t be cleaning the room at 2 o’clock tomorrow while her sister will be sleeping.</p></div><br><div class='p-2' style='border: 3px solid #4BACC6'><p>Question:</p><p><p>Will + Subject + be + V(ing) + Object</p>Will he be sleeping in the morning tomorrow?<br>Will it be snowing when the plane arrives?<br>Will she be having fun at the party tomorrow?<br></p></div></p></p></div></div>");

        $("#back").click(function() {
            draw_future_screen()
        })
    }    
    function draw_perfect_screen() {
        var elContainer_1 = $("body").empty();
        elContainer_1.append("<div class='container'><div id='back' class='btn btn-outline-light btn-lg btn-block mb-4 mt-4' style='border-radius: 2rem;'>Back</div></div>")
        elContainer_1.append("<div class='container'><div class='d-flex justify-content-center mt-3 mb-3'><div class='h5 text-white p-3 text-center' style='border-radius: 2rem; border: 1px solid white; width:'>Future Perfect Tense Definition</div></div><div class='pr-3 pl-3 text-white'><p><p>Future Perfect is used to indicate an action that will be completed before another action in the future. It is like Past Perfect, but in future. If you understand Past Perfect, it will be much easier to understand this. These are time expressions of Future Perfect: by … tomorrow, before/after. Auxiliary verb of Future Perfect is (will have)</p><p><p>Structure of Future Perfect:</p><div class='p-2' style='border: 3px solid #4BACC6'><p>Positive:</p><p><p>Subject + will + have + V3 + Object</p>By the time I graduate the university, I will have spoken 4 languages.<br>Before Michele retires, he will have saved up one hundred thousand dollars.<br>By the time she returns next Thursday, her mom will have cooked the dinner.</p></div><br><div class='p-2' style='border: 3px solid #4BACC6'><p>Negative:</p><p><p>Subject + will + not (won’t) + have + V3 + Object</p>By the time I graduate the university, I won’t have spoken 4 languages.<br>Before Michele retires, he won’t have saved up one hundred thousand dollars.<br>By the time she returns next Thursday, her mom won’t have cooked the dinner.</p></div><br><div class='p-2' style='border: 3px solid #4BACC6'><p>Question:</p><p><p>Will + Subject + have + V3 + Object</p>Will you have spoken three languages, by the time you graduate the university?<br>Will he have saved up one hundred thousand dollars, before Michele retires?<br>Will her mom have cooked the dinner, by the time she returns next Thursday?<br></p></div></p></p></div></div>");

        $("#back").click(function() {
            draw_future_screen()
        })
    }     
    function draw_perfect_continuous_screen() {
        var elContainer_1 = $("body").empty();
        elContainer_1.append("<div class='container'><div id='back' class='btn btn-outline-light btn-lg btn-block mb-4 mt-4' style='border-radius: 2rem;'>Back</div></div>")
        elContainer_1.append("<div class='container'><div class='d-flex justify-content-center mt-3 mb-3'><div class='h5 text-white p-3 text-center' style='border-radius: 2rem; border: 1px solid white; width:'>Future Perfect Continuous Tense Definition</div></div><div class='pr-3 pl-3 text-white'><p><p>Future Perfect Continuous tense describes actions that will be in progress when the other action happens in the future. Future Perfect and Future Perfect Progressive (Continuous) usually have the same meaning. Auxiliary verb is (will have been) Time expressions are: by, next, for, since.</p><p><p>Structure of Future Perfect Progressive (Continuous):</p><div class='p-2' style='border: 3px solid #4BACC6'><p>Positive:</p><p><p>Subject + will + have + been + V(ing)</p>I will have been waiting here for three hours by six o’clock tomorrow.<br>By 2002 I will have been living in Ashgabat for 18 years.<br>When I get home, my mother will have been making a cake for my birthday tomorrow.</p></div><br><div class='p-2' style='border: 3px solid #4BACC6'><p>Negative:</p><p><p>Subject + won’t + have + been + V(ing)</p>They won’t have been waiting her since 4 o’clock next Tuesday.<br>He won’t have been studying math course when he finishes university.<br>The building company won’t have been building the sport complex by 2025.</p></div><br><div class='p-2' style='border: 3px solid #4BACC6'><p>Question:</p><p><p>Will + Subject + have + been + V(ing)</p>Will he have been waiting her for three hours next time?<br>Will you have been playing football when your mother finishes the work?<br>Will they have been learning computer language by the end of this year?</p></div></p></p></div></div>");

        $("#back").click(function() {
            draw_future_screen()
        })
    }


    $("#back").click(function() {
        draw_main_screen()
    })
    $("#future_simple").click(function() {
        draw_simple_screen()
    })

    $("#future_continuous").click(function() {
        draw_continuous_screen()
    })

    $("#future_perfect").click(function() {
        draw_perfect_screen()
    })

    $("#future_perfect_continuous").click(function() {
        draw_perfect_continuous_screen()
    })
}

function draw_passive_screen() {
    var elContainer_1 = $("body").empty();
    elContainer_1.append('<div id="back" class="btn btn-outline-light btn-lg mt-2 ml-2 rounded-circle" style="position: absolute;"><i class="fas fa-angle-left" style="font-size: 30px;"></i></div>')
    elContainer_1.append('<div id="passive_screen" class="container d-flex align-items-center justify-content-center" style="height: 100vh;"><div class="row pr-5 pl-5" style="width: 500px"><div id="past_passive" class="btn btn-outline-light btn-lg col-12 mb-3 btn-block" style="border-radius: 2rem;">Past</div><div id="present_passive" class="btn btn-outline-light btn-lg col-12 mb-3 btn-block" style="border-radius: 2rem;">Present</div><div id="future_passive" class="btn btn-outline-light btn-lg col-12 mb-3 btn-block" style="border-radius: 2rem;">Future</div></div></div>')
    
    function draw_past_passive_screen() {
        var elContainer_1 = $("body").empty();
        elContainer_1.append('<div id="back" class="btn btn-outline-light btn-lg mt-2 ml-2 rounded-circle" style="position: absolute;"><i class="fas fa-angle-left" style="font-size: 30px;"></i></div>')
        elContainer_1.append('<div id="past_passive_screen" class="container d-flex align-items-center justify-content-center" style="height: 100vh;"><div class="row pr-5 pl-5" style="width: 500px"><div id="past_passive_simple" class="btn btn-outline-light btn-lg col-12 mb-3 btn-block" style="border-radius: 2rem;">Simple</div><div id="past_passive_continuous" class="btn btn-outline-light btn-lg col-12 mb-3 btn-block" style="border-radius: 2rem;">Continuous</div><div id="past_passive_perfect" class="btn btn-outline-light btn-lg col-12 mb-3 btn-block" style="border-radius: 2rem;">Perfect</div></div></div>') 

        function draw_simple_screen() {
            var elContainer_1 = $("body").empty();
            elContainer_1.append("<div class='container'><div id='back' class='btn btn-outline-light btn-lg btn-block mb-4 mt-4' style='border-radius: 2rem;'>Back</div></div>")
            elContainer_1.append("<div class='container'><div class='d-flex justify-content-center mt-3 mb-3'><div class='h5 text-white p-3 text-center' style='border-radius: 2rem; border: 1px solid white; width:'>Past Simple Passive Tense Definition</div></div><div class='pr-3 pl-3 text-white'><p><p>Passive voice is used when a speaker wants mainly to focus on an object of the sentence. You just replace SUBJECT with an OBJECT and change the structure a little. After we can use preposition “by” before previous main subject(optional). This is called agent. We will make it clear with examples. If you know tenses of English it is easy to understand Passive voice just with getting its structure. </p><p>As we know Past tense is used to indicate an action in the past with signing exact time. Passive form of this tense focus only on the object. Everything is the same.</p><p><p>Structure of Past Simple Passive:</p><p>Positive:</p><p><p>Subject + was/were + V3/V(ed) + Object/agent(optional)</p><table class='table table-bordered text-white'><thead class='text-center'><tr><th scope='col'>Active</th><th scope='col'>Passive</th></tr></thead><tbody><tr><td>I watched TV two hours ago.</td><td>TV was watched two hours ago.</td></tr><tr><td>They bought some apples at the store.</td><td>Some apples were bought at the store.</td></tr><tr><td>She studied computer course a year ago.</td><td>Computer course was studied a year ago.</td></tr></tbody></table></p><br><p>Negative:</p><p><p>Subject + wasn’t/weren’t + V3/V(ed) + Object/agent(optional)</p><table class='table table-bordered text-white'><thead class='text-center'><tr><th scope='col'>Active</th><th scope='col'>Passive</th></tr></thead><tbody><tr><td>I didn’t play football yesterday.</td><td>Football wasn’t played yesterday.</td></tr><tr><td>He didn’t make a cake.</td><td>A cake wasn’t made.</td></tr><tr><td>There was a car accident.</td><td>We weren’t injured in a car accident.</td></tr></tbody></table></p><p>Question:</p><p><p>Was/were + Subject + V3/V(ed) + Object/agent(optional)</p><table class='table table-bordered text-white'><thead class='text-center'><tr><th scope='col'>Active</th><th scope='col'>Passive</th></tr></thead><tbody><tr><td>Did he make a cake?</td><td>Was a cake made?</td></tr><tr><td>Did he break his leg?</td><td>Was his leg broken?</td></tr><tr><td>Did you buy him some chocolate?</td><td>Were some chocolate bought to him?</td></tr></tbody></table></p></p></p></div></div>")

            $("#back").click(function() {
                draw_past_passive_screen()
            })
        }    
        function draw_continuous_screen() {
            var elContainer_1 = $("body").empty();
            elContainer_1.append("<div class='container'><div id='back' class='btn btn-outline-light btn-lg btn-block mb-4 mt-4' style='border-radius: 2rem;'>Back</div></div>")
            elContainer_1.append("<div class='container'><div class='d-flex justify-content-center mt-3 mb-3'><div class='h5 text-white p-3 text-center' style='border-radius: 2rem; border: 1px solid white; width:'>Past Continuous Passive Tense Definition</div></div><div class='pr-3 pl-3 text-white'><p><p>Passive voice is used when a speaker wants mainly to focus on an object of the sentence. You just replace SUBJECT with an OBJECT and change the structure a little. After we can use preposition “by” before previous main subject(optional). This is called agent. We will make it clear with examples. If you know tenses of English it is easy to understand Passive voice just with getting its structure.</p><p>As we know Past Progressive (Continuous) is used to indicate duration of action in the past. Passive form of this tense focus only on the object. Everything is the same.</p><p><p>Structure of Past Progressive (Continuous) Passive:</p><p>Positive:</p><p><p>Subject + was/were + being + V3/V(ed) + Object/agent(optional)</p><table class='table table-bordered text-white'><thead class='text-center'><tr><th scope='col'>Active</th><th scope='col'>Passive</th></tr></thead><tbody><tr><td>I was playing chess.</td><td>Chess was being played.</td></tr><tr><td>They were planning a strategy.</td><td>A strategy was being planned.</td></tr><tr><td>His mom was paying utility bills.</td><td>Utility bills were being paid.</td></tr></tbody></table></p><br><p>Negative:</p><p><p>Subject + wasn’t/weren’t + being + V3/V(ed) + Object/agent(optional)</p><table class='table table-bordered text-white'><thead class='text-center'><tr><th scope='col'>Active</th><th scope='col'>Passive</th></tr></thead><tbody><tr><td>I wasn’t playing chess.</td><td>Chess wasn’t being played.</td></tr><tr><td>They weren’t planning a strategy.</td><td>A strategy wasn’t being planned.</td></tr><tr><td>His mom wasn’t paying utility bills.</td><td>Utility bills weren’t being paid.</td></tr></tbody></table></p><p>Question:</p><p><p>Was/were + Subject + being + V3/V(ed) + Object/agent(optional)</p><table class='table table-bordered text-white'><thead class='text-center'><tr><th scope='col'>Active</th><th scope='col'>Passive</th></tr></thead><tbody><tr><td>I was playing chess.</td><td>Was chess being played.</td></tr><tr><td>They were planning a strategy.</td><td>Was a strategy being planned.</td></tr><tr><td>His mom was paying utility bills.</td><td>Were utility bills being payed.</td></tr></tbody></table></p></p></p></div></div>")

            $("#back").click(function() {
                draw_past_passive_screen()
            })
        }    
        function draw_perfect_screen() {
            var elContainer_1 = $("body").empty();
            elContainer_1.append("<div class='container'><div id='back' class='btn btn-outline-light btn-lg btn-block mb-4 mt-4' style='border-radius: 2rem;'>Back</div></div>")
            elContainer_1.append("<div class='container'><div class='d-flex justify-content-center mt-3 mb-3'><div class='h5 text-white p-3 text-center' style='border-radius: 2rem; border: 1px solid white; width:'>Past Perfect Passive Tense Definition</div></div><div class='pr-3 pl-3 text-white'><p><p>Passive voice is used when a speaker wants mainly to focus on an object of the sentence. You just replace SUBJECT with an OBJECT and change the structure a little. After we can use preposition “by” before previous main subject(optional). This is called agent. We will make it clear with examples. If you know tenses of English it is easy to understand Passive voice just with getting its structure. </p><p>As we know Past Perfect is used to indicate the action that happened before another action. Passive form of this tense focus only on the object. Everything is the same.</p><p><p>Structure of Past Perfect Passive:</p><p>Positive:</p><p><p>Subject + had + been + V3/V(ed) + Object/agent(optional)</p><table class='table table-bordered text-white'><thead class='text-center'><tr><th scope='col'>Active</th><th scope='col'>Passive</th></tr></thead><tbody><tr><td>She bought a car after the company had paid her a salary.</td><td>She bought a car after she had been paid a salary by the company.</td></tr><tr><td>He left home and remembered that he had forgotten a car key.</td><td>He left home and remembered that a car key had been forgotten.</td></tr><tr><td>I had watched this film before it was released.</td><td>This film had been watched before it was released.</td></tr></tbody></table></p><br><p>Negative:</p><p><p>Subject + hadn’t + been + V3/V(ed) + Object/agent(optional)</p><table class='table table-bordered text-white'><thead class='text-center'><tr><th scope='col'>Active</th><th scope='col'>Passive</th></tr></thead><tbody><tr><td>She couldn’t buy a car because the company hadn’t paid her a salary.</td><td>She couldn’t buy a car because she hadn’t been paid a salary by the company.</td></tr><tr><td>He left home and remembered that he hadn’t turned off the oven.</td><td>He left home and remembered that the oven hadn’t been turned off.</td></tr><tr><td>I hadn’t watched this film before it was released.</td><td>This film hadn’t been watched before it was released.</td></tr></tbody></table></p><p>Question:</p><p><p>Had + Subject + been + V3/V(ed) + Object/agent(optional)</p><table class='table table-bordered text-white'><thead class='text-center'><tr><th scope='col'>Active</th><th scope='col'>Passive</th></tr></thead><tbody><tr><td>Had a company paid her a salary before she bought a car?</td><td>Had she been paid a salary by the company before she bought a car?</td></tr><tr><td>Had he forgotten a car key when he left home?</td><td>Had a car key been forgotten when he left home?</td></tr><tr><td>Had you watched this film before it was released?</td><td>Had this film been watched before it was released?</td></tr></tbody></table></p></p></p></div></div>")

            $("#back").click(function() {
                draw_past_passive_screen()
            })
        }

        $("#back").click(function() {
            draw_passive_screen()
        })
        $("#past_passive_simple").click(function() {
            draw_simple_screen()
        })
        $("#past_passive_continuous").click(function() {
            draw_continuous_screen()
        })
        $("#past_passive_perfect").click(function() {
            draw_perfect_screen()
        })
    }

    function draw_present_passive_screen() {
        var elContainer_1 = $("body").empty();
        elContainer_1.append('<div id="back" class="btn btn-outline-light btn-lg mt-2 ml-2 rounded-circle" style="position: absolute;"><i class="fas fa-angle-left" style="font-size: 30px;"></i></div>')
        elContainer_1.append('<div id="present_passive_screen" class="container d-flex align-items-center justify-content-center" style="height: 100vh;"><div class="row pr-5 pl-5" style="width: 500px"><div id="present_passive_simple" class="btn btn-outline-light btn-lg col-12 mb-3 btn-block" style="border-radius: 2rem;">Simple</div><div id="present_passive_continuous" class="btn btn-outline-light btn-lg col-12 mb-3 btn-block" style="border-radius: 2rem;">Continuous</div><div id="present_passive_perfect" class="btn btn-outline-light btn-lg col-12 mb-3 btn-block" style="border-radius: 2rem;">Perfect</div></div></div>')


        function draw_simple_screen() {
            var elContainer_1 = $("body").empty();
            elContainer_1.append("<div class='container'><div id='back' class='btn btn-outline-light btn-lg btn-block mb-4 mt-4' style='border-radius: 2rem;'>Back</div></div>")
            elContainer_1.append("<div class='container'><div class='d-flex justify-content-center mt-3 mb-3'><div class='h5 text-white p-3 text-center' style='border-radius: 2rem; border: 1px solid white; width:'>Present Simple Passive Tense Definition</div></div><div class='pr-3 pl-3 text-white'><p><p>Passive voice is used when a speaker wants mainly to focus on an object of the sentence. You just replace SUBJECT with an OBJECT and change the structure a little. After we can use preposition “by” before previous main subject(optional). This is called agent. We will make it clear with examples. If you know tenses of English it is easy to understand Passive voice just with getting its structure. </p><p>As we know Present tense is used to indicate general facts and habitual or every day activity. Passive form of this tense focus only on the object. Everything is the same.</p><p><p>Structure of Present Simple Passive:</p><p>Positive:</p><p><p>Subject + to be(am/is/are) + V3/V(ed) + Object/agent(optional)</p><table class='table table-bordered text-white'><thead class='text-center'><tr><th scope='col'>Active</th><th scope='col'>Passive</th></tr></thead><tbody><tr><td>I brush my teeth every day.</td><td>My teeth are brushed every day.</td></tr><tr><td>He often plays video games.</td><td>Video games are often played.</td></tr><tr><td>This chair is wooden.</td><td>This chair is made of wood.</td></tr></tbody></table></p><br><p>Negative:</p><p><p>Subject + to be + not (am not/isn’t/aren’t) + V3/V(ed) + Object/agent(optional)</p><table class='table table-bordered text-white'><thead class='text-center'><tr><th scope='col'>Active</th><th scope='col'>Passive</th></tr></thead><tbody><tr><td>I don’t brush my teeth every day.</td><td>My teeth aren’t brushed every day.</td></tr><tr><td>He doesn’t often play video games.</td><td>Video games aren’t often played.</td></tr><tr><td>This chair isn’t wooden.</td><td>This chair isn’t made of wood.</td></tr></tbody></table></p><p>Question:</p><p><p>To be(am/is/are) + Subject + + V3/V(ed) + Object/agent(optional)</p><table class='table table-bordered text-white'><thead class='text-center'><tr><th scope='col'>Active</th><th scope='col'>Passive</th></tr></thead><tbody><tr><td>Do you brush your teeth every day?</td><td>Are your teeth brushed every day?</td></tr><tr><td>Does he often play video games?</td><td>Are video games often played?</td></tr><tr><td>Is this chair wooden?</td><td>Is this chair made of wood?</td></tr></tbody></table></p></p></p></div></div>")

            $("#back").click(function() {
                draw_present_passive_screen()
            })
        }    
        function draw_continuous_screen() {
            var elContainer_1 = $("body").empty();
            elContainer_1.append("<div class='container'><div id='back' class='btn btn-outline-light btn-lg btn-block mb-4 mt-4' style='border-radius: 2rem;'>Back</div></div>")
            elContainer_1.append("<div class='container'><div class='d-flex justify-content-center mt-3 mb-3'><div class='h5 text-white p-3 text-center' style='border-radius: 2rem; border: 1px solid white; width:'>Present Continuous Passive Tense Definition</div></div><div class='pr-3 pl-3 text-white'><p><p>Passive voice is used when a speaker wants mainly to focus on an object of the sentence. You just replace SUBJECT with an OBJECT and change the structure a little. After we can use preposition “by” before previous main subject(optional). This is called agent. We will make it clear with examples. If you know tenses of English it is easy to understand Passive voice just with getting its structure. </p><p>As we know Present Progressive (Continuous) is used to indicate an activity is being done at the moment. Passive form of this tense focus only on the object. Everything is the same.</p><p><p>Structure of Present Progressive (Continuous) Passive:</p><p>Positive:</p><p><p>Subject + to be(am/is/are) + being + V3/V(ed) + Object/agent(optional)</p><table class='table table-bordered text-white'><thead class='text-center'><tr><th scope='col'>Active</th><th scope='col'>Passive</th></tr></thead><tbody><tr><td>He is doing the homework.</td><td>The homework is being done.</td></tr><tr><td>I’m washing some dishes.</td><td>Some dishes are being washed.</td></tr><tr><td>She is playing tennis.</td><td>Tennis is being played.</td></tr></tbody></table></p><br><p>Negative:</p><p><p>Subject + to be + not (am not/isn’t/aren’t) + being + V3/V(ed) + Object/agent(optional)</p><table class='table table-bordered text-white'><thead class='text-center'><tr><th scope='col'>Active</th><th scope='col'>Passive</th></tr></thead><tbody><tr><td>He isn’t doing the homework.</td><td>The homework isn’t being done.</td></tr><tr><td>I’m not washing the dishes.</td><td>The dishes aren’t being washed.</td></tr><tr><td>She isn’t playing tennis.</td><td>Tennis isn’t being played.</td></tr></tbody></table></p><p>Question:</p><p><p>To be (am/is/are) + Subject + being + V3/V(ed) + Object/agent(optional)</p><table class='table table-bordered text-white'><thead class='text-center'><tr><th scope='col'>Active</th><th scope='col'>Passive</th></tr></thead><tbody><tr><td>Is he doing the homework?</td><td>Is the homework being done?</td></tr><tr><td>Are you washing the dishes?</td><td>Are the dishes being washed?</td></tr><tr><td>Is she playing tennis?</td><td>Is tennis being played?</td></tr></tbody></table></p></p></p></div></div>")

            $("#back").click(function() {
                draw_present_passive_screen()
            })
        }
        function draw_perfect_screen() {
            var elContainer_1 = $("body").empty();
            elContainer_1.append("<div class='container'><div id='back' class='btn btn-outline-light btn-lg btn-block mb-4 mt-4' style='border-radius: 2rem;'>Back</div></div>")
            elContainer_1.append("<div class='container'><div class='d-flex justify-content-center mt-3 mb-3'><div class='h5 text-white p-3 text-center' style='border-radius: 2rem; border: 1px solid white; width:'>Present Perfect Passive Tense Definition</div></div><div class='pr-3 pl-3 text-white'><p><p>Passive voice is used when a speaker wants mainly to focus on an object of the sentence. You just replace SUBJECT with an OBJECT and change the structure a little. After we can use preposition “by” before previous main subject(optional). This is called agent. We will make it clear with examples. If you know tenses of English it is easy to understand Passive voice just with getting its structure.</p><p>As we know Present Perfect is used to indicate actions that started in the past and continue up to the present. Passive form of this tense focus only on the object. Everything is the same.</p><p><p>Structure of Present Perfect Passive:</p><p>Positive:</p><p><p>Subject + have/has + been + V3/V(ed) + Object/agent(optional)</p><table class='table table-bordered text-white'><thead class='text-center'><tr><th scope='col'>Active</th><th scope='col'>Passive</th></tr></thead><tbody><tr><td>I have studied this course recently.</td><td>This course has been studied recently.</td></tr><tr><td>He has just finished cleaning.</td><td>Cleaning has just been finished.</td></tr><tr><td>She has already brought bread.</td><td>Bread has already been brought.</td></tr></tbody></table></p><br><p>Negative:</p><p><p>Subject + haven’t/hasn’t + been + V3/V(ed) + Object/agent(optional)</p><table class='table table-bordered text-white'><thead class='text-center'><tr><th scope='col'>Active</th><th scope='col'>Passive</th></tr></thead><tbody><tr><td>I haven’t studied this course before.</td><td>This course hasn’t been studied before.</td></tr><tr><td>He hasn’t finished cleaning yet.</td><td>Cleaning hasn’t been finished yet.</td></tr><tr><td>She hasn’t brought bread yet.</td><td>Bread hasn’t been brought yet.</td></tr></tbody></table></p><p>Question:</p><p><p>Have/has + Subject + been + V3/V(ed) + Object/agent(optional)</p><table class='table table-bordered text-white'><thead class='text-center'><tr><th scope='col'>Active</th><th scope='col'>Passive</th></tr></thead><tbody><tr><td>Have you studied this course before?</td><td>Has this course been studied recently?</td></tr><tr><td>Has he finished cleaning yet?</td><td>Has cleaning been finished yet?</td></tr><tr><td>Has she already brought bread?</td><td>Has bread already been brought?</td></tr></tbody></table></p></p></p></div></div>")

            $("#back").click(function() {
                draw_present_passive_screen()
            })
        }

        $("#back").click(function() {
            draw_passive_screen()
        })
        $("#present_passive_simple").click(function() {
            draw_simple_screen()
        })
        $("#present_passive_continuous").click(function() {
            draw_continuous_screen()
        })
        $("#present_passive_perfect").click(function() {
            draw_perfect_screen()
        })
    }

    function draw_future_passive_screen() {
        var elContainer_1 = $("body").empty();
        elContainer_1.append('<div id="back" class="btn btn-outline-light btn-lg mt-2 ml-2 rounded-circle" style="position: absolute;"><i class="fas fa-angle-left" style="font-size: 30px;"></i></div>')
        elContainer_1.append('<div id="future_screen" class="container d-flex align-items-center justify-content-center" style="height: 100vh;"><div class="row pr-5 pl-5" style="width: 500px"><div id="future_passive_simple" class="btn btn-outline-light btn-lg col-12 mb-3 btn-block" style="border-radius: 2rem;">Simple</div><div id="future_passive_continuous" class="btn btn-outline-light btn-lg col-12 mb-3 btn-block" style="border-radius: 2rem;">Continuous</div><div id="future_passive_perfect" class="btn btn-outline-light btn-lg col-12 mb-3 btn-block" style="border-radius: 2rem;">Perfect</div></div></div>')


        function draw_simple_screen() {
            var elContainer_1 = $("body").empty();
            elContainer_1.append("<div class='container'><div id='back' class='btn btn-outline-light btn-lg btn-block mb-4 mt-4' style='border-radius: 2rem;'>Back</div></div>")
            elContainer_1.append("<div class='container'><div class='d-flex justify-content-center mt-3 mb-3'><div class='h5 text-white p-3 text-center' style='border-radius: 2rem; border: 1px solid white; width:'>Future Simple Passive Tense Definition</div></div><div class='pr-3 pl-3 text-white'><p><p>Passive voice is used when a speaker wants mainly to focus on an object of the sentence. You just replace SUBJECT with an OBJECT and change the structure a little. After we can use preposition “by” before previous main subject(optional). This is called agent. We will make it clear with examples. If you know tenses of English it is easy to understand Passive voice just with getting its structure. </p><p>As we know Future tense is used to indicate an action in the future. Passive form of this tense focus only on the object. Everything is the same.</p><p><p>Structure of Future Simple Passive:</p><p>Positive:</p><p><p>Subject + will + be + V3/V(ed) + Object/agent(optional)</p><table class='table table-bordered text-white'><thead class='text-center'><tr><th scope='col'>Active</th><th scope='col'>Passive</th></tr></thead><tbody><tr><td>I will play tennis next Sunday.</td><td>Tennis will be played next Sunday by me.</td></tr><tr><td>She will cook a cake.</td><td>A cake will be cooked.</td></tr><tr><td>University will hold an exam tomorrow.</td><td>An exam will be held tomorrow.</td></tr></tbody></table></p><br><p>Negative:</p><p><p>Subject + won’t + be + V3/V(ed) + Object/agent(optional).</p><table class='table table-bordered text-white'><thead class='text-center'><tr><th scope='col'>Active</th><th scope='col'>Passive</th></tr></thead><tbody><tr><td>I won’t play tennis next Sunday.</td><td>Tennis won’t be played next Sunday by me.</td></tr><tr><td>She won’t cook a cake.</td><td>A cake won’t be cooked.</td></tr><tr><td>University won’t hold an exam tomorrow.</td><td>An exam won’t be held tomorrow.</td></tr></tbody></table></p><p>Question:</p><p><p>Will + Subject + be + V3 + Object/agent(optional).</p><table class='table table-bordered text-white'><thead class='text-center'><tr><th scope='col'>Active</th><th scope='col'>Passive</th></tr></thead><tbody><tr><td>Will you play tennis next Sunday?</td><td>Will tennis be played next Sunday by me?</td></tr><tr><td>Will she cook a cake?</td><td>Will a cake be cooked?</td></tr><tr><td>Will university hold an exam tomorrow?  </td><td>Will an exam be held tomorrow?</td></tr></tbody></table></p></p></p></div></div>")

            $("#back").click(function() {
                draw_future_passive_screen()
            })
        }    
        function draw_continuous_screen() {
            var elContainer_1 = $("body").empty();
            elContainer_1.append("<div class='container'><div id='back' class='btn btn-outline-light btn-lg btn-block mb-4 mt-4' style='border-radius: 2rem;'>Back</div></div>")
            elContainer_1.append("<div class='container'><div class='d-flex justify-content-center mt-3 mb-3'><div class='h5 text-white p-3 text-center' style='border-radius: 2rem; border: 1px solid white; width:'>Future Continuous Passive Tense Definition</div></div><div class='pr-3 pl-3 text-white'><p><p>Passive voice is used when a speaker wants mainly to focus on an object of the sentence. You just replace SUBJECT with an OBJECT and change the structure a little. After we can use preposition “by” before previous main subject(optional). This is called agent. We will make it clear with examples. If you know tenses of English it is easy to understand Passive voice just with getting its structure. </p><p>As we know future progressive indicates a duration of an action in the future. Passive form of this tense focus only on the object. Everything is the same.</p><p><p>Structure of Future Progressive (Continuous) Passive:</p><p>Positive:</p><p><p>Subject + to be(am/is/are) going to + be + V3/V(ed) + Object/agent(optional)</p><table class='table table-bordered text-white'><thead class='text-center'><tr><th scope='col'>Active</th><th scope='col'>Passive</th></tr></thead><tbody><tr><td>They are going to help you.</td><td>You’re going to be helped.</td></tr><tr><td>She is going to cook a cake.</td><td>A cake is going to be cooked.</td></tr><tr><td>My father is going to buy a car.</td><td>A car is going to be bought by my father.</td></tr></tbody></table></p><br><p>Negative:</p><p><p>Subject + to be + not (am not/isn’t/aren’t) going to + be + V3/V(ed) + Object/agent(optional)</p><table class='table table-bordered text-white'><thead class='text-center'><tr><th scope='col'>Active</th><th scope='col'>Passive</th></tr></thead><tbody><tr><td>They aren’t going to help you.</td><td>You aren’t going to be helped.</td></tr><tr><td>She isn’t going to cook a cake.</td><td>A cake isn’t going to be cooked.</td></tr><tr><td>My father isn’t going to buy a car.</td><td>A car isn’t going to be bought by my father.</td></tr></tbody></table></p><p>Question:</p><p><p>To be(am/is/are) + Subject + going to + be + V3/V(ed) + Object/agent(optional)</p><table class='table table-bordered text-white'><thead class='text-center'><tr><th scope='col'>Active</th><th scope='col'>Passive</th></tr></thead><tbody><tr><td>Are they going to help you?</td><td>Are you going to be helped?</td></tr><tr><td>She is going to cook a cake.</td><td>Is a cake going to be cooked?</td></tr><tr><td>Is your father going to buy a car?</td><td>Is a car going to be bought by your father?</td></tr></tbody></table></p></p></p></div></div>")

            $("#back").click(function() {
                draw_future_passive_screen()
            })
        }    
        function draw_perfect_screen() {
            var elContainer_1 = $("body").empty();
            elContainer_1.append("<div class='container'><div id='back' class='btn btn-outline-light btn-lg btn-block mb-4 mt-4' style='border-radius: 2rem;'>Back</div></div>")
            elContainer_1.append("<div class='container'><div class='d-flex justify-content-center mt-3 mb-3'><div class='h5 text-white p-3 text-center' style='border-radius: 2rem; border: 1px solid white; width:'>Future Perfect Passive Tense Definition</div></div><div class='pr-3 pl-3 text-white'><p><p>Passive voice is used when a speaker wants mainly to focus on an object of the sentence. You just replace SUBJECT with an OBJECT and change the structure a little. After we can use preposition “by” before previous main subject(optional). This is called agent. We will make it clear with examples. If you know tenses of English it is easy to understand Passive voice just with getting its structure. </p><p>As we know future perfect indicates an action that will be completed before another action in the future. Passive form of this tense focus only on the object. Everything is the same.</p><p><p>Structure of Future Perfect Passive:</p><p>Positive:</p><p><p>Subject + will + have + been + V3/V(ed) + Object/agent(optional)</p><table class='table table-bordered text-white'><thead class='text-center'><tr><th scope='col'>Active</th><th scope='col'>Passive</th></tr></thead><tbody><tr><td>By the time I graduate the university, I will have spoken 4 languages.</td><td>By the time I graduate the university, 4 languages will have been spoken by me.</td></tr><tr><td>Before Michele retires, he will have saved up one hundred thousand dollars.</td><td>Before Michele retires, one hundred thousand dollars will have been saved up by Michele.</td></tr><tr><td>By the time she returns next Thursday, her mom will have cooked the dinner.</td><td>By the time she returns next Thursday, the dinner will have been cooked.</td></tr></tbody></table></p></p></p></div></div>")

            $("#back").click(function() {
                draw_future_passive_screen()
            })
        }

        $("#back").click(function() {
            draw_passive_screen()
        })
        $("#future_passive_simple").click(function() {
            draw_simple_screen()
        })
        $("#future_passive_continuous").click(function() {
            draw_continuous_screen()
        })
        $("#future_passive_perfect").click(function() {
            draw_perfect_screen()
        })
    }



    $("#back").click(function() {
        draw_main_screen()
    })
    $("#past_passive").click(function() {
        draw_past_passive_screen()
    })
    $("#present_passive").click(function() {
        draw_present_passive_screen()
    })
    $("#future_passive").click(function() {
        draw_future_passive_screen()
    })

}

draw_main_screen()