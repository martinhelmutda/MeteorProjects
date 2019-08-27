import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import { Accounts } from 'meteor/accounts-base';

Meteor.startup(() => {
  // code to run on server at startup
Accounts.validateNewUser((user) => {
  const email = user.emails[0].address;
  // console.log(email);

  try {
    new SimpleSchema({
      email:{
        type: String,
        regEx: SimpleSchema.RegEx.Email
      }
    }).validate({ email })
  } catch (e) {
    throw Meteor.Error(400, e.message);
  }
  return true;
})


  // const petSchema = new SimpleSchema({
  //   name:{
  //     type: String,
  //     min: 1,
  //     max: 200
  //   },
  //   age: {
  //     type: Number,
  //     min: 0,
  //     optional: true
  //   },
  //   contactNumber: {
  //     type: String,
  //     optional: true,
  //     regEx: SimpleSchema.RegEx.Phone
  //   }
  // });
  //
  // petSchema.validate({
  //   name: 'Andrew',
  //   // age: 23,
  //   contactNumber: '1234'
  // });

});
