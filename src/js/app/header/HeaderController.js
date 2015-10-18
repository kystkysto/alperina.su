//public/js/app/header/HeaderContrller.js

;(function() {

	angular.module('Alperina.controllers')
		.controller('HeaderContrller', HeaderContrller);

	function HeaderContrller($rootScope, $scope, $location, $interval, $timeout, Header) {

		var self = this,
			observers = {
				updateTitle: function() {
					self.title = Header.title;
				},
				updatequote: function() {
					self.quote = Header.quote;
				},
				updateShowTags: function() {
					self.showTags = Header.showTags;
				},
				updateTags: function() {
					self.tags = Header.tags;
				}
			},
			method = null,
			quotes = [
				{
					id: 1,
					content: '<p>Чуть – чуть литературы,</p><p>И музыки немного,</p><p>И чертова натура,</p><p>И лирика – от Бога</p>'
				},
				{
					id: 2,
					content: '<p>Тест,</p><p>И музыки немного,</p><p>Чуть чуть</p><p>Ещё</p>'
				},
			];

		for (method in observers) {
			Header.registerObserverCallback(observers[method]);
		}

		self.path = $location.path();

		$rootScope.$on('$routeChangeSuccess', function () {
			var q = $location.search();
			if(q.hasOwnProperty('tag')) Header.setTags(q.tag);
		});

		$scope.quoteClass = 'quote_show';

		Header.setQuoteRotation = function() {
			var list = new  DoublyLinkedList();

			quotes.forEach(function(qoute, i) {

				var node = list.append(qoute.content);
				if(i === 0) {
					head = node;
				}
			});

			//var head = list.head();

			Header.setQuote(head.data);

			var nextQoute = head.next;

			$scope.quoteClass = 'quote_show';
			$interval(function() {

		    	$scope.quoteClass = 'quote_hide';

		    	console.log('quote_hide');
	    	
		    	$timeout(function() {
			    	
			    	Header.setQuote(nextQoute.data);
			    	$scope.quoteClass = 'quote_show';
			    	console.log('quote_show');
			    	nextQoute = nextQoute.next;
			    }, 2000);
	    	}, 10000);
		};
	}

	/*
	 * Constructor. Takes no arguments.
	*/

	  function DoublyLinkedList() {
	    // pointer to first item
	    this._head = null;
	    // pointer to the last item
	    this._tail = null;
	    // length of list
	    this._length = 0;
	  }

	  // Wraps data in a node object.
	  DoublyLinkedList.prototype._createNewNode = function (data) {
	    var node = {
	      data: data,
	      next: null,
	      prev: null
	    };
	    return node;
	  };

	/*
	 * Appends a node to the end of the list.
	*/
	  DoublyLinkedList.prototype.append = function (data) {
	    var node = this._createNewNode(data);

	    if (this._length === 0) {

	      // first node, so all pointers to this
	      this._head = node;
	      this._tail = node;
	    } else {

	      // put on the tail
	      this._tail.next = node;
	      node.prev = this._tail;
	      this._tail = node;
	    }

	    // update count
	    this._length++;

	    return node;
	  };

	/*
	 * Prepends a node to the end of the list.
	*/
	  DoublyLinkedList.prototype.prepend = function (data) {
	    var node = this._createNewNode(data);

	    if (this.first === null) {

	      // we are empty, so this is the first node
	      // use the same logic as append
	      this.append(data);
	      return;
	    } else {

	      // place before head
	      this._head.prev = node;
	      node.next = this._head;
	      this._head = node;
	    }

	    // update count
	    this._length++;

	    return node;
	  };

	/*
	 * Returns the node at the specified index. The index starts at 0.
	*/
	  DoublyLinkedList.prototype.item = function (index) {
	    if (index >= 0 && index < this._length) {
	      var node = this._head;
	      while (index--) {
	        node = node.next;
	      }
	      return node;
	    }
	  };

	/*
	 * Returns the node at the head of the list.
	*/
	  DoublyLinkedList.prototype.head = function () {
	    return this._head;
	  };

	/*
	 * Returns the node at the tail of the list.
	*/
	  DoublyLinkedList.prototype.tail = function () {
	    return this._tail;
	  };

	/*
	 * Returns the size of the list.
	*/
	  DoublyLinkedList.prototype.size = function () {
	    return this._length;
	  };

	/*
	 * Removes the item at the index.
	*/
	  DoublyLinkedList.prototype.remove = function (index) {
	    throw "Not implemented";
	  };
})();