var monolog = new Monolog({
  loader  : false,
  close: true,
  onOpening: function() {
    console.log('OPENING ...');
  },
  onOpened: function() {
    console.log('... OPENED !');
    return this.setContent('<section id="five" class="wrapper style2 special fade"><div class="container"><header><h2>Contact Us</h2></header><form method="post" action="http://formspree.io/info@alkami.io"><div class="row uniform 50%"><div class="6u 12u$(xsmall)"><input type="number" number="number" id="number" value="" placeholder="Phone Number" /></div><div class="6u$ 12u$(xsmall)"><input type="email" name="email" id="email" value="" placeholder="Email" /></div><div class="6u 12u$(xsmall)"><input type="text" name="name" id="username" value="" placeholder="Name" /></div><div class="6u$ 12u$(xsmall)"><div class="select-wrapper"><select name="category" id="category"><option value="">- Category -</option><option value="1">Web Site</option><option value="1">Web App</option><option value="1">API</option><option value="1">Other</option></select></div></div><textarea style="margin-top: 2%; margin-left: 1.5%;" name="message" id="message" placeholder="Tell us a little about your project..." rows="6"></textarea></div><input type="text" name="_gotcha" style="display:none" /><input type="hidden" name="_next" value="/" /><input type="hidden" name="_subject" value="NOT Home Page Form" /><div class="12u$"><ul class="actions"><li><input style="margin-top: 1em;" type="submit" value="Send" class="special" /></li><li><input style="margin-top: 1em;" type="reset" value="Reset" /></li></ul></div></div></form></div></section>');
  },
  onClosing: function() {
    console.log('CLOSING ...');
  },
  onClosed : function () {
    console.log('... CLOSED !');
  }
});
