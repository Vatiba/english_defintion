function draw_main_screen() {
    var elContainer_1 = $("#screen").empty();
    var elContainer_2 = $("#back").empty();
    elContainer_1.append('<div id="main_screen" class="container d-flex align-items-center justify-content-center" style="height: 100vh;"><div class="row pr-4 pl-4"><div id="past" class="btn btn-outline-light btn-lg col-12 mb-3" style="border-radius: 2rem; width: 100px">Past</div><div id="present" class="btn btn-outline-light btn-lg col-12 mb-3" style="border-radius: 2rem; width: 100px">Present</div><div id="future" class="btn btn-outline-light btn-lg col-12 mb-3" style="border-radius: 2rem; width: 100px">Future</div><div id="passive" class="btn btn-outline-light btn-lg col-12 mb-3" style="border-radius: 2rem; width: 100px">Passive</div></div></div>')

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
}

function draw_past_screen() {
    var elContainer_1 = $("#screen").empty();
    var elContainer_2 = $("#back").empty();
    elContainer_1.append('<div id="past_screen" class="container d-flex align-items-center justify-content-center" style="height: 100vh;"><div class="row pr-4 pl-4"><div id="past_simple" class="btn btn-outline-light btn-lg col-12 mb-3" style="border-radius: 2rem; width: 100px">Simple</div><div id="continuous" class="btn btn-outline-light btn-lg col-12 mb-3" style="border-radius: 2rem; width: 100px">Continuous</div><div id="perfect" class="btn btn-outline-light btn-lg col-12 mb-3" style="border-radius: 2rem; width: 100px">Perfect</div><div id="perfect_continuous" class="btn btn-outline-light btn-lg col-12 mb-3" style="border-radius: 2rem; width: 100px">Perfect continuous</div></div></div>')
    elContainer_2.append('<div id="back" class="btn btn-outline-light btn-lg mt-2 ml-2" style="border-radius: 50%; position: absolute;"><i class="fas fa-angle-left" style="font-size: 24px;"></i></div>')
    
   
    function draw_simple_screen() {
        var elContainer_1 = $("#screen").empty();
        var elContainer_2 = $("#back").empty();
        elContainer_1.append("<div class='container'><div class='d-flex justify-content-center mt-3 mb-3' style='width: 100%'><div class='h5 text-white p-3' style='border-radius: 2rem; border: 1px solid white; width:'>Past Simple Tense Definition</div></div><div class='pr-3 pl-3 text-white'><p>Past Simple shows finished action which began and finished in the past. Auxiliary verb of Past Simple is (Did in positive, Didn't is in negative). These are time expressions: Yesterday, ago, last.</p><p>Verb to be turns into was/were in the Past Simple. Was is used with (I, He, She, It). Were is used with (They, We, You). Negative form of was/were is wasn't/weren't.</p><p>Question form auxiliary verb (did) to the beginning of the sentence or if there is a verb to be in the sentence. Ex:I was at the metting three hours ago. Verb to be moves to the beginning. Ex: Were you at the metting thre hours ago?</p><p>Structure of Past Simple.</p><p>Positive: Subject + V2(ed) + Object.</p><p>For example: I watched TV yesterday. We were in USA last year.</p><p>Negative:</p><p>Subject + didn't/wasn't/weren't + V1 + Object.</p><p>Notice after (didn't) we use only V1, we can't use V2(ed) because we already have auxiliary verb of Past Simple (didn't).</p><p>He didn't bring his laptop two days ago. I wasn't at the party last week. The test didn't start a minute ago. It started five minutes ago.</p><p>Question:</p><p>Did/Was/Were/Didn't/Wasn't/Weren't + Subject + V1 + Object.</p><p>Did you play tennis yesterday evening? Didn't you visit your friend at the hospital? Were you at the meeting?</p></div><div>")
        elContainer_2.append("<div id='back' class='btn btn-outline-light mb-4 btn-block mt-4' style='border-radius: 2rem;'>Back</div>")

        $("#back").click(function() {
            draw_past_screen()
        })
    }    
    function draw_continuous_screen() {
        var elContainer_1 = $("#screen").empty();
        var elContainer_2 = $("#back").empty();
        elContainer_1.append("<div class='container'><div class='d-flex justify-content-center mt-3 mb-3' style='width: 100%'><div class='h5 text-white p-3' style='border-radius: 2rem; border: 1px solid white; width:'>Past Continuous Tense Definition</div></div><div class='pr-3 pl-3 text-white'><p>Past Simple shows finished action which began and finished in the past. Auxiliary verb of Past Simple is (Did in positive, Didn't is in negative). These are time expressions: Yesterday, ago, last.</p><p>Verb to be turns into was/were in the Past Simple. Was is used with (I, He, She, It). Were is used with (They, We, You). Negative form of was/were is wasn't/weren't.</p><p>Question form auxiliary verb (did) to the beginning of the sentence or if there is a verb to be in the sentence. Ex:I was at the metting three hours ago. Verb to be moves to the beginning. Ex: Were you at the metting thre hours ago?</p><p>Structure of Past Simple.</p><p>Positive: Subject + V2(ed) + Object.</p><p>For example: I watched TV yesterday. We were in USA last year.</p><p>Negative:</p><p>Subject + didn't/wasn't/weren't + V1 + Object.</p><p>Notice after (didn't) we use only V1, we can't use V2(ed) because we already have auxiliary verb of Past Simple (didn't).</p><p>He didn't bring his laptop two days ago. I wasn't at the party last week. The test didn't start a minute ago. It started five minutes ago.</p><p>Question:</p><p>Did/Was/Were/Didn't/Wasn't/Weren't + Subject + V1 + Object.</p><p>Did you play tennis yesterday evening? Didn't you visit your friend at the hospital? Were you at the meeting?</p></div><div>")
        elContainer_2.append("<div id='back' class='btn btn-outline-light mb-4 btn-block mt-4' style='border-radius: 2rem;'>Back</div>")

        $("#back").click(function() {
            draw_past_screen()
        })
    }    
    function draw_perfect_screen() {
        var elContainer_1 = $("#screen").empty();
        var elContainer_2 = $("#back").empty();
        elContainer_1.append("<div class='container'><div class='d-flex justify-content-center mt-3 mb-3' style='width: 100%'><div class='h5 text-white p-3' style='border-radius: 2rem; border: 1px solid white; width:'>Past Perfect Tense Definition</div></div><div class='pr-3 pl-3 text-white'><p>Past Simple shows finished action which began and finished in the past. Auxiliary verb of Past Simple is (Did in positive, Didn't is in negative). These are time expressions: Yesterday, ago, last.</p><p>Verb to be turns into was/were in the Past Simple. Was is used with (I, He, She, It). Were is used with (They, We, You). Negative form of was/were is wasn't/weren't.</p><p>Question form auxiliary verb (did) to the beginning of the sentence or if there is a verb to be in the sentence. Ex:I was at the metting three hours ago. Verb to be moves to the beginning. Ex: Were you at the metting thre hours ago?</p><p>Structure of Past Simple.</p><p>Positive: Subject + V2(ed) + Object.</p><p>For example: I watched TV yesterday. We were in USA last year.</p><p>Negative:</p><p>Subject + didn't/wasn't/weren't + V1 + Object.</p><p>Notice after (didn't) we use only V1, we can't use V2(ed) because we already have auxiliary verb of Past Simple (didn't).</p><p>He didn't bring his laptop two days ago. I wasn't at the party last week. The test didn't start a minute ago. It started five minutes ago.</p><p>Question:</p><p>Did/Was/Were/Didn't/Wasn't/Weren't + Subject + V1 + Object.</p><p>Did you play tennis yesterday evening? Didn't you visit your friend at the hospital? Were you at the meeting?</p></div><div>")
        elContainer_2.append("<div id='back' class='btn btn-outline-light mb-4 btn-block mt-4' style='border-radius: 2rem;'>Back</div>")

        $("#back").click(function() {
            draw_past_screen()
        })
    }     
    function draw_perfect_continuous_screen() {
        var elContainer_1 = $("#screen").empty();
        var elContainer_2 = $("#back").empty();
        elContainer_1.append("<div class='container'><div class='d-flex justify-content-center mt-3 mb-3' style='width: 100%'><div class='h5 text-white p-3' style='border-radius: 2rem; border: 1px solid white; width:'>Past Perfect Continuous Tense Definition</div></div><div class='pr-3 pl-3 text-white'><p>Past Simple shows finished action which began and finished in the past. Auxiliary verb of Past Simple is (Did in positive, Didn't is in negative). These are time expressions: Yesterday, ago, last.</p><p>Verb to be turns into was/were in the Past Simple. Was is used with (I, He, She, It). Were is used with (They, We, You). Negative form of was/were is wasn't/weren't.</p><p>Question form auxiliary verb (did) to the beginning of the sentence or if there is a verb to be in the sentence. Ex:I was at the metting three hours ago. Verb to be moves to the beginning. Ex: Were you at the metting thre hours ago?</p><p>Structure of Past Simple.</p><p>Positive: Subject + V2(ed) + Object.</p><p>For example: I watched TV yesterday. We were in USA last year.</p><p>Negative:</p><p>Subject + didn't/wasn't/weren't + V1 + Object.</p><p>Notice after (didn't) we use only V1, we can't use V2(ed) because we already have auxiliary verb of Past Simple (didn't).</p><p>He didn't bring his laptop two days ago. I wasn't at the party last week. The test didn't start a minute ago. It started five minutes ago.</p><p>Question:</p><p>Did/Was/Were/Didn't/Wasn't/Weren't + Subject + V1 + Object.</p><p>Did you play tennis yesterday evening? Didn't you visit your friend at the hospital? Were you at the meeting?</p></div><div>")
        elContainer_2.append("<div id='back' class='btn btn-outline-light mb-4 btn-block mt-4' style='border-radius: 2rem;'>Back</div>")

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

    $("#continuous").click(function() {
        draw_continuous_screen()
    })

    $("#perfect").click(function() {
        draw_perfect_screen()
    })

    $("#perfect_continuous").click(function() {
        draw_perfect_continuous_screen()
    })
}




function draw_present_screen() {
    var elContainer_1 = $("#screen").empty();
    var elContainer_2 = $("#back").empty();
    elContainer_1.append('<div id="present_screen" class="container d-flex align-items-center justify-content-center" style="height: 100vh;"><div class="row pr-4 pl-4"><div id="present_simple" class="btn btn-outline-light btn-lg col-12 mb-3" style="border-radius: 2rem; width: 100px">Simple</div><div id="present_continuous" class="btn btn-outline-light btn-lg col-12 mb-3" style="border-radius: 2rem; width: 100px">Continuous</div><div id="present_perfect" class="btn btn-outline-light btn-lg col-12 mb-3" style="border-radius: 2rem; width: 100px">Perfect</div><div id="present_perfect_continuous" class="btn btn-outline-light btn-lg col-12 mb-3" style="border-radius: 2rem; width: 100px">Perfect continuous</div></div></div>')
    elContainer_2.append('<div id="back" class="btn btn-outline-light btn-lg mt-2 ml-2" style="border-radius: 50%; position: absolute;"><i class="fas fa-angle-left" style="font-size: 24px;"></i></div>')

    
   
    function draw_simple_screen() {
        var elContainer_1 = $("#screen").empty();
        var elContainer_2 = $("#back").empty();
        elContainer_1.append("<div class='container'><div class='d-flex justify-content-center mt-3 mb-3' style='width: 100%'><div class='h5 text-white p-3' style='border-radius: 2rem; border: 1px solid white; width:'>Present Simple Tense Definition</div></div><div class='pr-3 pl-3 text-white'><p>Past Simple shows finished action which began and finished in the past. Auxiliary verb of Past Simple is (Did in positive, Didn't is in negative). These are time expressions: Yesterday, ago, last.</p><p>Verb to be turns into was/were in the Past Simple. Was is used with (I, He, She, It). Were is used with (They, We, You). Negative form of was/were is wasn't/weren't.</p><p>Question form auxiliary verb (did) to the beginning of the sentence or if there is a verb to be in the sentence. Ex:I was at the metting three hours ago. Verb to be moves to the beginning. Ex: Were you at the metting thre hours ago?</p><p>Structure of Past Simple.</p><p>Positive: Subject + V2(ed) + Object.</p><p>For example: I watched TV yesterday. We were in USA last year.</p><p>Negative:</p><p>Subject + didn't/wasn't/weren't + V1 + Object.</p><p>Notice after (didn't) we use only V1, we can't use V2(ed) because we already have auxiliary verb of Past Simple (didn't).</p><p>He didn't bring his laptop two days ago. I wasn't at the party last week. The test didn't start a minute ago. It started five minutes ago.</p><p>Question:</p><p>Did/Was/Were/Didn't/Wasn't/Weren't + Subject + V1 + Object.</p><p>Did you play tennis yesterday evening? Didn't you visit your friend at the hospital? Were you at the meeting?</p></div><div>")
        elContainer_2.append("<div id='back' class='btn btn-outline-light mb-4 btn-block mt-4' style='border-radius: 2rem;'>Back</div>")

        $("#back").click(function() {
            draw_present_screen()
        })
    }    
    function draw_continuous_screen() {
        var elContainer_1 = $("#screen").empty();
        var elContainer_2 = $("#back").empty();
        elContainer_1.append("<div class='container'><div class='d-flex justify-content-center mt-3 mb-3' style='width: 100%'><div class='h5 text-white p-3' style='border-radius: 2rem; border: 1px solid white; width:'>Present Continuous Tense Definition</div></div><div class='pr-3 pl-3 text-white'><p>Past Simple shows finished action which began and finished in the past. Auxiliary verb of Past Simple is (Did in positive, Didn't is in negative). These are time expressions: Yesterday, ago, last.</p><p>Verb to be turns into was/were in the Past Simple. Was is used with (I, He, She, It). Were is used with (They, We, You). Negative form of was/were is wasn't/weren't.</p><p>Question form auxiliary verb (did) to the beginning of the sentence or if there is a verb to be in the sentence. Ex:I was at the metting three hours ago. Verb to be moves to the beginning. Ex: Were you at the metting thre hours ago?</p><p>Structure of Past Simple.</p><p>Positive: Subject + V2(ed) + Object.</p><p>For example: I watched TV yesterday. We were in USA last year.</p><p>Negative:</p><p>Subject + didn't/wasn't/weren't + V1 + Object.</p><p>Notice after (didn't) we use only V1, we can't use V2(ed) because we already have auxiliary verb of Past Simple (didn't).</p><p>He didn't bring his laptop two days ago. I wasn't at the party last week. The test didn't start a minute ago. It started five minutes ago.</p><p>Question:</p><p>Did/Was/Were/Didn't/Wasn't/Weren't + Subject + V1 + Object.</p><p>Did you play tennis yesterday evening? Didn't you visit your friend at the hospital? Were you at the meeting?</p></div><div>")
        elContainer_2.append("<div id='back' class='btn btn-outline-light mb-4 btn-block mt-4' style='border-radius: 2rem;'>Back</div>")

        $("#back").click(function() {
            draw_present_screen()
        })
    }    
    function draw_perfect_screen() {
        var elContainer_1 = $("#screen").empty();
        var elContainer_2 = $("#back").empty();
        elContainer_1.append("<div class='container'><div class='d-flex justify-content-center mt-3 mb-3' style='width: 100%'><div class='h5 text-white p-3' style='border-radius: 2rem; border: 1px solid white; width:'>Present Perfect Tense Definition</div></div><div class='pr-3 pl-3 text-white'><p>Past Simple shows finished action which began and finished in the past. Auxiliary verb of Past Simple is (Did in positive, Didn't is in negative). These are time expressions: Yesterday, ago, last.</p><p>Verb to be turns into was/were in the Past Simple. Was is used with (I, He, She, It). Were is used with (They, We, You). Negative form of was/were is wasn't/weren't.</p><p>Question form auxiliary verb (did) to the beginning of the sentence or if there is a verb to be in the sentence. Ex:I was at the metting three hours ago. Verb to be moves to the beginning. Ex: Were you at the metting thre hours ago?</p><p>Structure of Past Simple.</p><p>Positive: Subject + V2(ed) + Object.</p><p>For example: I watched TV yesterday. We were in USA last year.</p><p>Negative:</p><p>Subject + didn't/wasn't/weren't + V1 + Object.</p><p>Notice after (didn't) we use only V1, we can't use V2(ed) because we already have auxiliary verb of Past Simple (didn't).</p><p>He didn't bring his laptop two days ago. I wasn't at the party last week. The test didn't start a minute ago. It started five minutes ago.</p><p>Question:</p><p>Did/Was/Were/Didn't/Wasn't/Weren't + Subject + V1 + Object.</p><p>Did you play tennis yesterday evening? Didn't you visit your friend at the hospital? Were you at the meeting?</p></div><div>")
        elContainer_2.append("<div id='back' class='btn btn-outline-light mb-4 btn-block mt-4' style='border-radius: 2rem;'>Back</div>")

        $("#back").click(function() {
            draw_present_screen()
        })
    }     
    function draw_perfect_continuous_screen() {
        var elContainer_1 = $("#screen").empty();
        var elContainer_2 = $("#back").empty();
        elContainer_1.append("<div class='container'><div class='d-flex justify-content-center mt-3 mb-3' style='width: 100%'><div class='h5 text-white p-3' style='border-radius: 2rem; border: 1px solid white; width:'>Present Perfect Continuous Tense Definition</div></div><div class='pr-3 pl-3 text-white'><p>Past Simple shows finished action which began and finished in the past. Auxiliary verb of Past Simple is (Did in positive, Didn't is in negative). These are time expressions: Yesterday, ago, last.</p><p>Verb to be turns into was/were in the Past Simple. Was is used with (I, He, She, It). Were is used with (They, We, You). Negative form of was/were is wasn't/weren't.</p><p>Question form auxiliary verb (did) to the beginning of the sentence or if there is a verb to be in the sentence. Ex:I was at the metting three hours ago. Verb to be moves to the beginning. Ex: Were you at the metting thre hours ago?</p><p>Structure of Past Simple.</p><p>Positive: Subject + V2(ed) + Object.</p><p>For example: I watched TV yesterday. We were in USA last year.</p><p>Negative:</p><p>Subject + didn't/wasn't/weren't + V1 + Object.</p><p>Notice after (didn't) we use only V1, we can't use V2(ed) because we already have auxiliary verb of Past Simple (didn't).</p><p>He didn't bring his laptop two days ago. I wasn't at the party last week. The test didn't start a minute ago. It started five minutes ago.</p><p>Question:</p><p>Did/Was/Were/Didn't/Wasn't/Weren't + Subject + V1 + Object.</p><p>Did you play tennis yesterday evening? Didn't you visit your friend at the hospital? Were you at the meeting?</p></div><div>")
        elContainer_2.append("<div id='back' class='btn btn-outline-light mb-4 btn-block mt-4' style='border-radius: 2rem;'>Back</div>")

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
    var elContainer_1 = $("#screen").empty();
    var elContainer_2 = $("#back").empty();
    elContainer_1.append('<div id="future_screen" class="container d-flex align-items-center justify-content-center" style="height: 100vh;"><div class="row pr-4 pl-4"><div id="future_simple" class="btn btn-outline-light btn-lg col-12 mb-3" style="border-radius: 2rem; width: 100px">Simple</div><div id="future_continuous" class="btn btn-outline-light btn-lg col-12 mb-3" style="border-radius: 2rem; width: 100px">Continuous</div><div id="future_perfect" class="btn btn-outline-light btn-lg col-12 mb-3" style="border-radius: 2rem; width: 100px">Perfect</div><div id="future_perfect_continuous" class="btn btn-outline-light btn-lg col-12 mb-3" style="border-radius: 2rem; width: 100px">Perfect continuous</div></div></div>')
    elContainer_2.append('<div id="back" class="btn btn-outline-light btn-lg mt-2 ml-2" style="border-radius: 50%; position: absolute;"><i class="fas fa-angle-left" style="font-size: 24px;"></i></div>')

    
   
    function draw_simple_screen() {
        var elContainer_1 = $("#screen").empty();
        var elContainer_2 = $("#back").empty();
        elContainer_1.append("<div class='container'><div class='d-flex justify-content-center mt-3 mb-3' style='width: 100%'><div class='h5 text-white p-3' style='border-radius: 2rem; border: 1px solid white; width:'>Future Simple Tense Definition</div></div><div class='pr-3 pl-3 text-white'><p>Past Simple shows finished action which began and finished in the past. Auxiliary verb of Past Simple is (Did in positive, Didn't is in negative). These are time expressions: Yesterday, ago, last.</p><p>Verb to be turns into was/were in the Past Simple. Was is used with (I, He, She, It). Were is used with (They, We, You). Negative form of was/were is wasn't/weren't.</p><p>Question form auxiliary verb (did) to the beginning of the sentence or if there is a verb to be in the sentence. Ex:I was at the metting three hours ago. Verb to be moves to the beginning. Ex: Were you at the metting thre hours ago?</p><p>Structure of Past Simple.</p><p>Positive: Subject + V2(ed) + Object.</p><p>For example: I watched TV yesterday. We were in USA last year.</p><p>Negative:</p><p>Subject + didn't/wasn't/weren't + V1 + Object.</p><p>Notice after (didn't) we use only V1, we can't use V2(ed) because we already have auxiliary verb of Past Simple (didn't).</p><p>He didn't bring his laptop two days ago. I wasn't at the party last week. The test didn't start a minute ago. It started five minutes ago.</p><p>Question:</p><p>Did/Was/Were/Didn't/Wasn't/Weren't + Subject + V1 + Object.</p><p>Did you play tennis yesterday evening? Didn't you visit your friend at the hospital? Were you at the meeting?</p></div><div>")
        elContainer_2.append("<div id='back' class='btn btn-outline-light mb-4 btn-block mt-4' style='border-radius: 2rem;'>Back</div>")

        $("#back").click(function() {
            draw_future_screen()
        })
    }    
    function draw_continuous_screen() {
        var elContainer_1 = $("#screen").empty();
        var elContainer_2 = $("#back").empty();
        elContainer_1.append("<div class='container'><div class='d-flex justify-content-center mt-3 mb-3' style='width: 100%'><div class='h5 text-white p-3' style='border-radius: 2rem; border: 1px solid white; width:'>Future Continuous Tense Definition</div></div><div class='pr-3 pl-3 text-white'><p>Past Simple shows finished action which began and finished in the past. Auxiliary verb of Past Simple is (Did in positive, Didn't is in negative). These are time expressions: Yesterday, ago, last.</p><p>Verb to be turns into was/were in the Past Simple. Was is used with (I, He, She, It). Were is used with (They, We, You). Negative form of was/were is wasn't/weren't.</p><p>Question form auxiliary verb (did) to the beginning of the sentence or if there is a verb to be in the sentence. Ex:I was at the metting three hours ago. Verb to be moves to the beginning. Ex: Were you at the metting thre hours ago?</p><p>Structure of Past Simple.</p><p>Positive: Subject + V2(ed) + Object.</p><p>For example: I watched TV yesterday. We were in USA last year.</p><p>Negative:</p><p>Subject + didn't/wasn't/weren't + V1 + Object.</p><p>Notice after (didn't) we use only V1, we can't use V2(ed) because we already have auxiliary verb of Past Simple (didn't).</p><p>He didn't bring his laptop two days ago. I wasn't at the party last week. The test didn't start a minute ago. It started five minutes ago.</p><p>Question:</p><p>Did/Was/Were/Didn't/Wasn't/Weren't + Subject + V1 + Object.</p><p>Did you play tennis yesterday evening? Didn't you visit your friend at the hospital? Were you at the meeting?</p></div><div>")
        elContainer_2.append("<div id='back' class='btn btn-outline-light mb-4 btn-block mt-4' style='border-radius: 2rem;'>Back</div>")

        $("#back").click(function() {
            draw_future_screen()
        })
    }    
    function draw_perfect_screen() {
        var elContainer_1 = $("#screen").empty();
        var elContainer_2 = $("#back").empty();
        elContainer_1.append("<div class='container'><div class='d-flex justify-content-center mt-3 mb-3' style='width: 100%'><div class='h5 text-white p-3' style='border-radius: 2rem; border: 1px solid white; width:'>Future Perfect Tense Definition</div></div><div class='pr-3 pl-3 text-white'><p>Past Simple shows finished action which began and finished in the past. Auxiliary verb of Past Simple is (Did in positive, Didn't is in negative). These are time expressions: Yesterday, ago, last.</p><p>Verb to be turns into was/were in the Past Simple. Was is used with (I, He, She, It). Were is used with (They, We, You). Negative form of was/were is wasn't/weren't.</p><p>Question form auxiliary verb (did) to the beginning of the sentence or if there is a verb to be in the sentence. Ex:I was at the metting three hours ago. Verb to be moves to the beginning. Ex: Were you at the metting thre hours ago?</p><p>Structure of Past Simple.</p><p>Positive: Subject + V2(ed) + Object.</p><p>For example: I watched TV yesterday. We were in USA last year.</p><p>Negative:</p><p>Subject + didn't/wasn't/weren't + V1 + Object.</p><p>Notice after (didn't) we use only V1, we can't use V2(ed) because we already have auxiliary verb of Past Simple (didn't).</p><p>He didn't bring his laptop two days ago. I wasn't at the party last week. The test didn't start a minute ago. It started five minutes ago.</p><p>Question:</p><p>Did/Was/Were/Didn't/Wasn't/Weren't + Subject + V1 + Object.</p><p>Did you play tennis yesterday evening? Didn't you visit your friend at the hospital? Were you at the meeting?</p></div><div>")
        elContainer_2.append("<div id='back' class='btn btn-outline-light mb-4 btn-block mt-4' style='border-radius: 2rem;'>Back</div>")

        $("#back").click(function() {
            draw_future_screen()
        })
    }     
    function draw_perfect_continuous_screen() {
        var elContainer_1 = $("#screen").empty();
        var elContainer_2 = $("#back").empty();
        elContainer_1.append("<div class='container'><div class='d-flex justify-content-center mt-3 mb-3' style='width: 100%'><div class='h5 text-white p-3' style='border-radius: 2rem; border: 1px solid white; width:'>Future Perfect Continuous Tense Definition</div></div><div class='pr-3 pl-3 text-white'><p>Past Simple shows finished action which began and finished in the past. Auxiliary verb of Past Simple is (Did in positive, Didn't is in negative). These are time expressions: Yesterday, ago, last.</p><p>Verb to be turns into was/were in the Past Simple. Was is used with (I, He, She, It). Were is used with (They, We, You). Negative form of was/were is wasn't/weren't.</p><p>Question form auxiliary verb (did) to the beginning of the sentence or if there is a verb to be in the sentence. Ex:I was at the metting three hours ago. Verb to be moves to the beginning. Ex: Were you at the metting thre hours ago?</p><p>Structure of Past Simple.</p><p>Positive: Subject + V2(ed) + Object.</p><p>For example: I watched TV yesterday. We were in USA last year.</p><p>Negative:</p><p>Subject + didn't/wasn't/weren't + V1 + Object.</p><p>Notice after (didn't) we use only V1, we can't use V2(ed) because we already have auxiliary verb of Past Simple (didn't).</p><p>He didn't bring his laptop two days ago. I wasn't at the party last week. The test didn't start a minute ago. It started five minutes ago.</p><p>Question:</p><p>Did/Was/Were/Didn't/Wasn't/Weren't + Subject + V1 + Object.</p><p>Did you play tennis yesterday evening? Didn't you visit your friend at the hospital? Were you at the meeting?</p></div><div>")
        elContainer_2.append("<div id='back' class='btn btn-outline-light mb-4 btn-block mt-4' style='border-radius: 2rem;'>Back</div>")

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
    var elContainer_1 = $("#screen").empty();
    var elContainer_2 = $("#back").empty();
    elContainer_1.append('<div id="passive_screen" class="container d-flex align-items-center justify-content-center" style="height: 100vh;"><div class="row pr-4 pl-4"><div id="passive_simple" class="btn btn-outline-light btn-lg col-12 mb-3" style="border-radius: 2rem; width: 100px">Simple</div><div id="passive_continuous" class="btn btn-outline-light btn-lg col-12 mb-3" style="border-radius: 2rem; width: 100px">Continuous</div><div id="passive_perfect" class="btn btn-outline-light btn-lg col-12 mb-3" style="border-radius: 2rem; width: 100px">Perfect</div><div id="passive_perfect_continuous" class="btn btn-outline-light btn-lg col-12 mb-3" style="border-radius: 2rem; width: 100px">Perfect continuous</div></div></div>')
    elContainer_2.append('<div id="back" class="btn btn-outline-light btn-lg mt-2 ml-2" style="border-radius: 50%; position: absolute;"><i class="fas fa-angle-left" style="font-size: 24px;"></i></div>')
   
   
    function draw_simple_screen() {
        var elContainer_1 = $("#screen").empty();
        var elContainer_2 = $("#back").empty();
        elContainer_1.append("<div class='container'><div class='d-flex justify-content-center mt-3 mb-3' style='width: 100%'><div class='h5 text-white p-3' style='border-radius: 2rem; border: 1px solid white; width:'>Passive Simple Tense Definition</div></div><div class='pr-3 pl-3 text-white'><p>Past Simple shows finished action which began and finished in the past. Auxiliary verb of Past Simple is (Did in positive, Didn't is in negative). These are time expressions: Yesterday, ago, last.</p><p>Verb to be turns into was/were in the Past Simple. Was is used with (I, He, She, It). Were is used with (They, We, You). Negative form of was/were is wasn't/weren't.</p><p>Question form auxiliary verb (did) to the beginning of the sentence or if there is a verb to be in the sentence. Ex:I was at the metting three hours ago. Verb to be moves to the beginning. Ex: Were you at the metting thre hours ago?</p><p>Structure of Past Simple.</p><p>Positive: Subject + V2(ed) + Object.</p><p>For example: I watched TV yesterday. We were in USA last year.</p><p>Negative:</p><p>Subject + didn't/wasn't/weren't + V1 + Object.</p><p>Notice after (didn't) we use only V1, we can't use V2(ed) because we already have auxiliary verb of Past Simple (didn't).</p><p>He didn't bring his laptop two days ago. I wasn't at the party last week. The test didn't start a minute ago. It started five minutes ago.</p><p>Question:</p><p>Did/Was/Were/Didn't/Wasn't/Weren't + Subject + V1 + Object.</p><p>Did you play tennis yesterday evening? Didn't you visit your friend at the hospital? Were you at the meeting?</p></div><div>")
        elContainer_2.append("<div id='back' class='btn btn-outline-light mb-4 btn-block mt-4' style='border-radius: 2rem;'>Back</div>")

        $("#back").click(function() {
            draw_passive_screen()
        })
    }    
    function draw_continuous_screen() {
        var elContainer_1 = $("#screen").empty();
        var elContainer_2 = $("#back").empty();
        elContainer_1.append("<div class='container'><div class='d-flex justify-content-center mt-3 mb-3' style='width: 100%'><div class='h5 text-white p-3' style='border-radius: 2rem; border: 1px solid white; width:'>Passive Continuous Tense Definition</div></div><div class='pr-3 pl-3 text-white'><p>Past Simple shows finished action which began and finished in the past. Auxiliary verb of Past Simple is (Did in positive, Didn't is in negative). These are time expressions: Yesterday, ago, last.</p><p>Verb to be turns into was/were in the Past Simple. Was is used with (I, He, She, It). Were is used with (They, We, You). Negative form of was/were is wasn't/weren't.</p><p>Question form auxiliary verb (did) to the beginning of the sentence or if there is a verb to be in the sentence. Ex:I was at the metting three hours ago. Verb to be moves to the beginning. Ex: Were you at the metting thre hours ago?</p><p>Structure of Past Simple.</p><p>Positive: Subject + V2(ed) + Object.</p><p>For example: I watched TV yesterday. We were in USA last year.</p><p>Negative:</p><p>Subject + didn't/wasn't/weren't + V1 + Object.</p><p>Notice after (didn't) we use only V1, we can't use V2(ed) because we already have auxiliary verb of Past Simple (didn't).</p><p>He didn't bring his laptop two days ago. I wasn't at the party last week. The test didn't start a minute ago. It started five minutes ago.</p><p>Question:</p><p>Did/Was/Were/Didn't/Wasn't/Weren't + Subject + V1 + Object.</p><p>Did you play tennis yesterday evening? Didn't you visit your friend at the hospital? Were you at the meeting?</p></div><div>")
        elContainer_2.append("<div id='back' class='btn btn-outline-light mb-4 btn-block mt-4' style='border-radius: 2rem;'>Back</div>")

        $("#back").click(function() {
            draw_passive_screen()
        })
    }    
    function draw_perfect_screen() {
        var elContainer_1 = $("#screen").empty();
        var elContainer_2 = $("#back").empty();
        elContainer_1.append("<div class='container'><div class='d-flex justify-content-center mt-3 mb-3' style='width: 100%'><div class='h5 text-white p-3' style='border-radius: 2rem; border: 1px solid white; width:'>Passive Perfect Tense Definition</div></div><div class='pr-3 pl-3 text-white'><p>Past Simple shows finished action which began and finished in the past. Auxiliary verb of Past Simple is (Did in positive, Didn't is in negative). These are time expressions: Yesterday, ago, last.</p><p>Verb to be turns into was/were in the Past Simple. Was is used with (I, He, She, It). Were is used with (They, We, You). Negative form of was/were is wasn't/weren't.</p><p>Question form auxiliary verb (did) to the beginning of the sentence or if there is a verb to be in the sentence. Ex:I was at the metting three hours ago. Verb to be moves to the beginning. Ex: Were you at the metting thre hours ago?</p><p>Structure of Past Simple.</p><p>Positive: Subject + V2(ed) + Object.</p><p>For example: I watched TV yesterday. We were in USA last year.</p><p>Negative:</p><p>Subject + didn't/wasn't/weren't + V1 + Object.</p><p>Notice after (didn't) we use only V1, we can't use V2(ed) because we already have auxiliary verb of Past Simple (didn't).</p><p>He didn't bring his laptop two days ago. I wasn't at the party last week. The test didn't start a minute ago. It started five minutes ago.</p><p>Question:</p><p>Did/Was/Were/Didn't/Wasn't/Weren't + Subject + V1 + Object.</p><p>Did you play tennis yesterday evening? Didn't you visit your friend at the hospital? Were you at the meeting?</p></div><div>")
        elContainer_2.append("<div id='back' class='btn btn-outline-light mb-4 btn-block mt-4' style='border-radius: 2rem;'>Back</div>")

        $("#back").click(function() {
            draw_passive_screen()
        })
    }     
    function draw_perfect_continuous_screen() {
        var elContainer_1 = $("#screen").empty();
        var elContainer_2 = $("#back").empty();
        elContainer_1.append("<div class='container'><div class='d-flex justify-content-center mt-3 mb-3' style='width: 100%'><div class='h5 text-white p-3' style='border-radius: 2rem; border: 1px solid white; width:'>Passive Perfect Continuous Tense Definition</div></div><div class='pr-3 pl-3 text-white'><p>Past Simple shows finished action which began and finished in the past. Auxiliary verb of Past Simple is (Did in positive, Didn't is in negative). These are time expressions: Yesterday, ago, last.</p><p>Verb to be turns into was/were in the Past Simple. Was is used with (I, He, She, It). Were is used with (They, We, You). Negative form of was/were is wasn't/weren't.</p><p>Question form auxiliary verb (did) to the beginning of the sentence or if there is a verb to be in the sentence. Ex:I was at the metting three hours ago. Verb to be moves to the beginning. Ex: Were you at the metting thre hours ago?</p><p>Structure of Past Simple.</p><p>Positive: Subject + V2(ed) + Object.</p><p>For example: I watched TV yesterday. We were in USA last year.</p><p>Negative:</p><p>Subject + didn't/wasn't/weren't + V1 + Object.</p><p>Notice after (didn't) we use only V1, we can't use V2(ed) because we already have auxiliary verb of Past Simple (didn't).</p><p>He didn't bring his laptop two days ago. I wasn't at the party last week. The test didn't start a minute ago. It started five minutes ago.</p><p>Question:</p><p>Did/Was/Were/Didn't/Wasn't/Weren't + Subject + V1 + Object.</p><p>Did you play tennis yesterday evening? Didn't you visit your friend at the hospital? Were you at the meeting?</p></div><div>")
        elContainer_2.append("<div id='back' class='btn btn-outline-light mb-4 btn-block mt-4' style='border-radius: 2rem;'>Back</div>")

        $("#back").click(function() {
            draw_passive_screen()
        })
    }


    $("#back").click(function() {
        draw_main_screen()
    })
    $("#passive_simple").click(function() {
        draw_simple_screen()
    })

    $("#passive_continuous").click(function() {
        draw_continuous_screen()
    })

    $("#passive_perfect").click(function() {
        draw_perfect_screen()
    })

    $("#passive_perfect_continuous").click(function() {
        draw_perfect_continuous_screen()
    })

}

draw_main_screen()



