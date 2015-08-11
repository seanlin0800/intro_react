describe('NameBox', function() {

  var TestUtils = React.addons.TestUtils;
  var nameBox;

  beforeEach(function() {
    nameBox = TestUtils.renderIntoDocument(<NameBox />);
  });

  it('should have two items initially', function() {
    var nameItems = TestUtils.scryRenderedDOMComponentsWithClass(
      nameBox,
      'list-group-item'
    );
    expect(nameItems.length).toEqual(2);
  });

  describe('Form submitting', function() {
    var inputText = '123';

    beforeEach(function() {
      var form = TestUtils.findRenderedDOMComponentWithTag(nameBox, 'form');
      var input = TestUtils.findRenderedDOMComponentWithTag(nameBox, 'input');
      React.findDOMNode(input).value = inputText;
      TestUtils.Simulate.submit(form);
    });

    it('should add a new item', function() {
      var nameItems = TestUtils.scryRenderedDOMComponentsWithClass(
        nameBox,
        'list-group-item'
      );
      expect(nameItems.length).toEqual(3);
    });

    it('last item should equal input text', function() {
      var items = TestUtils.scryRenderedDOMComponentsWithTag(
        nameBox,
        'span'
      );
      var last = React.findDOMNode(items[items.length - 1]);
      expect(last.innerHTML).toEqual(inputText);
    });

  });

});
