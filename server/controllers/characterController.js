module.exports={

    // getBio(req,res){
    //     let db = req.app.get('db')
    //     db.get_bio().then(dbRes=>{
    //         res.status(200).send(dbRes)
    //     })
    // },
    // getAbilities(req,res){

    //     let db = req.app.get('db')

    //     db.get_abilities().then(dbRes=>{
    //         res.status(200).send(dbRes)
    //     })
    // },
    // getDetails(req,res){

    //     let db = req.app.get('db')

    //     db.get_details().then(dbRes=>{
    //         res.status(200).send(dbRes)
    //     })
    // },
    // getHp(req,res){

    //     let db = req.app.get('db')

    //     db.get_hp().then(dbRes=>{
    //         res.status(200).send(dbRes)
    //     })
    // },
    // getPowers(req,res){

    //     let db = req.app.get('db')

    //     db.get_powers().then(dbRes=>{
    //         res.status(200).send(dbRes)
    //     })
    // },

    // getSkills(req,res){
    //     let db = req.app.get('db')

    //     db.get_skills().then(dbRes=>{
    //         res.status(200).send(dbRes)
    //     })
    // },

    getCharacterById(req,res){
        let db = req.app.get('db')
        let {id} = req.params
        db.get_character_by_id({id}).then(dbRes=>{
            res.status(200).send(dbRes)
        })
    },
    addBio(req,res){
        let db = req.app.get('db')
        let {personalitytraits,background,mannersappear,compantions} = req.body
        let {id}=req.session.user
        db.add_bio({id,personalitytraits, background, mannersappear, compantions}).then(dbRes=>{
            res.status(200).send(dbRes[0])
        })
    },

    addAbilities(req,res){
        let db = req.app.get('db')
        let {strength, constitution, charisma, dexterity, intelligence, wisdom} = req.body
        let {id} = req.session.user
        db.add_abilities({strength, constitution, charisma, dexterity, intelligence, wisdom,  id}).then(dbRes=>{
            res.status(200).send(dbRes)
        })
    },
    addPowers(req,res){
        let db = req.app.get('db')
        let {encounter,atwill,daily,utility}= req.body
        let {id} = req.session.user
        db.add_powers({id,encounter,atwill,daily,utility}).then(dbRes=>{
            res.status(200).send(dbRes[0])
        }).catch(err => console.log(err))
    },
    addDetails(req,res){

        let db = req.app.get('db')
        let {charactername,level,characterclass,paragon, destiny, totalxp, race, size, age, gender, height, weight, alignment, diety}
        = req.body
        let {id} = req.session.user
        console.log(111111, req.body, id)
        db.add_details({id, charactername, level, characterclass, paragon, destiny, totalxp, race, size, age, gender, height, weight, alignment, diety})
        .then(dbRes=>{
            res.status(200).send(dbRes)
            
        })
    },
    addSkills(req,res){
        let db = req.app.get('db')
        let {acrobatics, arcana, athletics, bluff, diplomacy, dungeoneering, endurance, heal, history, insight, intimidate, nature, perception, religion, stealth, streetwise, thievery}
        = req.body 
        
        let {id}= req.session.user
        
        db.add_skills({id,acrobatics, arcana, athletics, bluff, diplomacy, dungeoneering, endurance, heal, history, insight, intimidate, nature, perception, religion, stealth, streetwise, thievery})
        .then(dbRes=>{
            res.status(200).send(dbRes)
        })
    },
    addOther(req,res){
        let db = req.app.get('db')
        let {initiative, health, ac, fort, reflexes, will, speed} = req.body
        let {id}=req.session.user
        db.add_other({initiative, health, ac, fort, reflexes, will, speed, id}).then(dbRes=>{
            res.status(200).send(dbRes)
        })
    },
    addInventory(req,res){
        let db = req.app.get('db')
        let {weapons, armor, magicitems, otherequipment, misc, gold}=req.body
        let{id}=req.session.user
        db.add_inventory({id,weapons,armor,magicitems,otherequipment,misc,gold}).then(dbRes=>{
            res.status(200).send(dbRes[0])
        })
    }
}