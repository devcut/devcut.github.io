(function (factory) {
	typeof define === 'function' && define.amd ? define(factory) :
	factory();
}((function () { 'use strict';

	/*!
	 * jQuery JavaScript Library v3.6.0
	 * https://jquery.com/
	 *
	 * Includes Sizzle.js
	 * https://sizzlejs.com/
	 *
	 * Copyright OpenJS Foundation and other contributors
	 * Released under the MIT license
	 * https://jquery.org/license
	 *
	 * Date: 2021-03-02T17:08Z
	 */
	( function( global, factory ) {

		if ( typeof module === "object" && typeof module.exports === "object" ) {

			// For CommonJS and CommonJS-like environments where a proper `window`
			// is present, execute the factory and get jQuery.
			// For environments that do not have a `window` with a `document`
			// (such as Node.js), expose a factory as module.exports.
			// This accentuates the need for the creation of a real `window`.
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info.
			module.exports = global.document ?
				factory( global, true ) :
				function( w ) {
					if ( !w.document ) {
						throw new Error( "jQuery requires a window with a document" );
					}
					return factory( w );
				};
		} else {
			factory( global );
		}

	// Pass this if window is not defined yet
	} )( typeof window !== "undefined" ? window : undefined, function( window, noGlobal ) {

	var arr = [];

	var getProto = Object.getPrototypeOf;

	var slice = arr.slice;

	var flat = function( array ) {
		return arr.concat.apply( [], array );
	};


	var push = arr.push;

	var indexOf = arr.indexOf;

	var class2type = {};

	var toString = class2type.toString;

	var hasOwn = class2type.hasOwnProperty;

	var fnToString = hasOwn.toString;

	var ObjectFunctionString = fnToString.call( Object );

	var support = {};

	var isFunction = function isFunction( obj ) {

			// Support: Chrome <=57, Firefox <=52
			// In some browsers, typeof returns "function" for HTML <object> elements
			// (i.e., `typeof document.createElement( "object" ) === "function"`).
			// We don't want to classify *any* DOM node as a function.
			// Support: QtWeb <=3.8.5, WebKit <=534.34, wkhtmltopdf tool <=0.12.5
			// Plus for old WebKit, typeof returns "function" for HTML collections
			// (e.g., `typeof document.getElementsByTagName("div") === "function"`). (gh-4756)
			return typeof obj === "function" && typeof obj.nodeType !== "number" &&
				typeof obj.item !== "function";
		};


	var isWindow = function isWindow( obj ) {
			return obj != null && obj === obj.window;
		};


	var document = window.document;



		var preservedScriptAttributes = {
			type: true,
			src: true,
			nonce: true,
			noModule: true
		};

		function DOMEval( code, node, doc ) {
			doc = doc || document;

			var i, val,
				script = doc.createElement( "script" );

			script.text = code;
			if ( node ) {
				for ( i in preservedScriptAttributes ) {

					// Support: Firefox 64+, Edge 18+
					// Some browsers don't support the "nonce" property on scripts.
					// On the other hand, just using `getAttribute` is not enough as
					// the `nonce` attribute is reset to an empty string whenever it
					// becomes browsing-context connected.
					// See https://github.com/whatwg/html/issues/2369
					// See https://html.spec.whatwg.org/#nonce-attributes
					// The `node.getAttribute` check was added for the sake of
					// `jQuery.globalEval` so that it can fake a nonce-containing node
					// via an object.
					val = node[ i ] || node.getAttribute && node.getAttribute( i );
					if ( val ) {
						script.setAttribute( i, val );
					}
				}
			}
			doc.head.appendChild( script ).parentNode.removeChild( script );
		}


	function toType( obj ) {
		if ( obj == null ) {
			return obj + "";
		}

		// Support: Android <=2.3 only (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call( obj ) ] || "object" :
			typeof obj;
	}
	/* global Symbol */
	// Defining this global in .eslintrc.json would create a danger of using the global
	// unguarded in another place, it seems safer to define global only for this module



	var
		version = "3.6.0",

		// Define a local copy of jQuery
		jQuery = function( selector, context ) {

			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init( selector, context );
		};

	jQuery.fn = jQuery.prototype = {

		// The current version of jQuery being used
		jquery: version,

		constructor: jQuery,

		// The default length of a jQuery object is 0
		length: 0,

		toArray: function() {
			return slice.call( this );
		},

		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {

			// Return all the elements in a clean array
			if ( num == null ) {
				return slice.call( this );
			}

			// Return just the one element from the set
			return num < 0 ? this[ num + this.length ] : this[ num ];
		},

		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {

			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );

			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;

			// Return the newly-formed element set
			return ret;
		},

		// Execute a callback for every element in the matched set.
		each: function( callback ) {
			return jQuery.each( this, callback );
		},

		map: function( callback ) {
			return this.pushStack( jQuery.map( this, function( elem, i ) {
				return callback.call( elem, i, elem );
			} ) );
		},

		slice: function() {
			return this.pushStack( slice.apply( this, arguments ) );
		},

		first: function() {
			return this.eq( 0 );
		},

		last: function() {
			return this.eq( -1 );
		},

		even: function() {
			return this.pushStack( jQuery.grep( this, function( _elem, i ) {
				return ( i + 1 ) % 2;
			} ) );
		},

		odd: function() {
			return this.pushStack( jQuery.grep( this, function( _elem, i ) {
				return i % 2;
			} ) );
		},

		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
		},

		end: function() {
			return this.prevObject || this.constructor();
		},

		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: arr.sort,
		splice: arr.splice
	};

	jQuery.extend = jQuery.fn.extend = function() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[ 0 ] || {},
			i = 1,
			length = arguments.length,
			deep = false;

		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;

			// Skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}

		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !isFunction( target ) ) {
			target = {};
		}

		// Extend jQuery itself if only one argument is passed
		if ( i === length ) {
			target = this;
			i--;
		}

		for ( ; i < length; i++ ) {

			// Only deal with non-null/undefined values
			if ( ( options = arguments[ i ] ) != null ) {

				// Extend the base object
				for ( name in options ) {
					copy = options[ name ];

					// Prevent Object.prototype pollution
					// Prevent never-ending loop
					if ( name === "__proto__" || target === copy ) {
						continue;
					}

					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
						( copyIsArray = Array.isArray( copy ) ) ) ) {
						src = target[ name ];

						// Ensure proper type for the source value
						if ( copyIsArray && !Array.isArray( src ) ) {
							clone = [];
						} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
							clone = {};
						} else {
							clone = src;
						}
						copyIsArray = false;

						// Never move original objects, clone them
						target[ name ] = jQuery.extend( deep, clone, copy );

					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}

		// Return the modified object
		return target;
	};

	jQuery.extend( {

		// Unique for each copy of jQuery on the page
		expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

		// Assume jQuery is ready without the ready module
		isReady: true,

		error: function( msg ) {
			throw new Error( msg );
		},

		noop: function() {},

		isPlainObject: function( obj ) {
			var proto, Ctor;

			// Detect obvious negatives
			// Use toString instead of jQuery.type to catch host objects
			if ( !obj || toString.call( obj ) !== "[object Object]" ) {
				return false;
			}

			proto = getProto( obj );

			// Objects with no prototype (e.g., `Object.create( null )`) are plain
			if ( !proto ) {
				return true;
			}

			// Objects with prototype are plain iff they were constructed by a global Object function
			Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
			return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
		},

		isEmptyObject: function( obj ) {
			var name;

			for ( name in obj ) {
				return false;
			}
			return true;
		},

		// Evaluates a script in a provided context; falls back to the global one
		// if not specified.
		globalEval: function( code, options, doc ) {
			DOMEval( code, { nonce: options && options.nonce }, doc );
		},

		each: function( obj, callback ) {
			var length, i = 0;

			if ( isArrayLike( obj ) ) {
				length = obj.length;
				for ( ; i < length; i++ ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			}

			return obj;
		},

		// results is for internal usage only
		makeArray: function( arr, results ) {
			var ret = results || [];

			if ( arr != null ) {
				if ( isArrayLike( Object( arr ) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
							[ arr ] : arr
					);
				} else {
					push.call( ret, arr );
				}
			}

			return ret;
		},

		inArray: function( elem, arr, i ) {
			return arr == null ? -1 : indexOf.call( arr, elem, i );
		},

		// Support: Android <=4.0 only, PhantomJS 1 only
		// push.apply(_, arraylike) throws on ancient WebKit
		merge: function( first, second ) {
			var len = +second.length,
				j = 0,
				i = first.length;

			for ( ; j < len; j++ ) {
				first[ i++ ] = second[ j ];
			}

			first.length = i;

			return first;
		},

		grep: function( elems, callback, invert ) {
			var callbackInverse,
				matches = [],
				i = 0,
				length = elems.length,
				callbackExpect = !invert;

			// Go through the array, only saving the items
			// that pass the validator function
			for ( ; i < length; i++ ) {
				callbackInverse = !callback( elems[ i ], i );
				if ( callbackInverse !== callbackExpect ) {
					matches.push( elems[ i ] );
				}
			}

			return matches;
		},

		// arg is for internal usage only
		map: function( elems, callback, arg ) {
			var length, value,
				i = 0,
				ret = [];

			// Go through the array, translating each of the items to their new values
			if ( isArrayLike( elems ) ) {
				length = elems.length;
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}

			// Go through every key on the object,
			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}
			}

			// Flatten any nested arrays
			return flat( ret );
		},

		// A global GUID counter for objects
		guid: 1,

		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	} );

	if ( typeof Symbol === "function" ) {
		jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
	}

	// Populate the class2type map
	jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
		function( _i, name ) {
			class2type[ "[object " + name + "]" ] = name.toLowerCase();
		} );

	function isArrayLike( obj ) {

		// Support: real iOS 8.2 only (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = !!obj && "length" in obj && obj.length,
			type = toType( obj );

		if ( isFunction( obj ) || isWindow( obj ) ) {
			return false;
		}

		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}
	var Sizzle =
	/*!
	 * Sizzle CSS Selector Engine v2.3.6
	 * https://sizzlejs.com/
	 *
	 * Copyright JS Foundation and other contributors
	 * Released under the MIT license
	 * https://js.foundation/
	 *
	 * Date: 2021-02-16
	 */
	( function( window ) {
	var i,
		support,
		Expr,
		getText,
		isXML,
		tokenize,
		compile,
		select,
		outermostContext,
		sortInput,
		hasDuplicate,

		// Local document vars
		setDocument,
		document,
		docElem,
		documentIsHTML,
		rbuggyQSA,
		rbuggyMatches,
		matches,
		contains,

		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		preferredDoc = window.document,
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
		nonnativeSelectorCache = createCache(),
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
			}
			return 0;
		},

		// Instance methods
		hasOwn = ( {} ).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		pushNative = arr.push,
		push = arr.push,
		slice = arr.slice,

		// Use a stripped-down indexOf as it's faster than native
		// https://jsperf.com/thor-indexof-vs-for/5
		indexOf = function( list, elem ) {
			var i = 0,
				len = list.length;
			for ( ; i < len; i++ ) {
				if ( list[ i ] === elem ) {
					return i;
				}
			}
			return -1;
		},

		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|" +
			"ismap|loop|multiple|open|readonly|required|scoped",

		// Regular expressions

		// http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",

		// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
		identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace +
			"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",

		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +

			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +

			// "Attribute values must be CSS identifiers [capture 5]
			// or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" +
			whitespace + "*\\]",

		pseudos = ":(" + identifier + ")(?:\\((" +

			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +

			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +

			// 3. anything else (capture 2)
			".*" +
			")\\)|)",

		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp( whitespace + "+", "g" ),
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" +
			whitespace + "+$", "g" ),

		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace +
			"*" ),
		rdescend = new RegExp( whitespace + "|>" ),

		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),

		matchExpr = {
			"ID": new RegExp( "^#(" + identifier + ")" ),
			"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
			"TAG": new RegExp( "^(" + identifier + "|[*])" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
				whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" +
				whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),

			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp( "^" + whitespace +
				"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace +
				"*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},

		rhtml = /HTML$/i,
		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,

		rnative = /^[^{]+\{\s*\[native \w/,

		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

		rsibling = /[+~]/,

		// CSS escapes
		// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp( "\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g" ),
		funescape = function( escape, nonHex ) {
			var high = "0x" + escape.slice( 1 ) - 0x10000;

			return nonHex ?

				// Strip the backslash prefix from a non-hex escape sequence
				nonHex :

				// Replace a hexadecimal escape sequence with the encoded Unicode code point
				// Support: IE <=11+
				// For values outside the Basic Multilingual Plane (BMP), manually construct a
				// surrogate pair
				high < 0 ?
					String.fromCharCode( high + 0x10000 ) :
					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		},

		// CSS string/identifier serialization
		// https://drafts.csswg.org/cssom/#common-serializing-idioms
		rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
		fcssescape = function( ch, asCodePoint ) {
			if ( asCodePoint ) {

				// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
				if ( ch === "\0" ) {
					return "\uFFFD";
				}

				// Control characters and (dependent upon position) numbers get escaped as code points
				return ch.slice( 0, -1 ) + "\\" +
					ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
			}

			// Other potentially-special ASCII characters get backslash-escaped
			return "\\" + ch;
		},

		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function() {
			setDocument();
		},

		inDisabledFieldset = addCombinator(
			function( elem ) {
				return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
			},
			{ dir: "parentNode", next: "legend" }
		);

	// Optimize for push.apply( _, NodeList )
	try {
		push.apply(
			( arr = slice.call( preferredDoc.childNodes ) ),
			preferredDoc.childNodes
		);

		// Support: Android<4.0
		// Detect silently failing push.apply
		// eslint-disable-next-line no-unused-expressions
		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = { apply: arr.length ?

			// Leverage slice if possible
			function( target, els ) {
				pushNative.apply( target, slice.call( els ) );
			} :

			// Support: IE<9
			// Otherwise append directly
			function( target, els ) {
				var j = target.length,
					i = 0;

				// Can't trust NodeList.length
				while ( ( target[ j++ ] = els[ i++ ] ) ) {}
				target.length = j - 1;
			}
		};
	}

	function Sizzle( selector, context, results, seed ) {
		var m, i, elem, nid, match, groups, newSelector,
			newContext = context && context.ownerDocument,

			// nodeType defaults to 9, since context defaults to document
			nodeType = context ? context.nodeType : 9;

		results = results || [];

		// Return early from calls with invalid selector or context
		if ( typeof selector !== "string" || !selector ||
			nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

			return results;
		}

		// Try to shortcut find operations (as opposed to filters) in HTML documents
		if ( !seed ) {
			setDocument( context );
			context = context || document;

			if ( documentIsHTML ) {

				// If the selector is sufficiently simple, try using a "get*By*" DOM method
				// (excepting DocumentFragment context, where the methods don't exist)
				if ( nodeType !== 11 && ( match = rquickExpr.exec( selector ) ) ) {

					// ID selector
					if ( ( m = match[ 1 ] ) ) {

						// Document context
						if ( nodeType === 9 ) {
							if ( ( elem = context.getElementById( m ) ) ) {

								// Support: IE, Opera, Webkit
								// TODO: identify versions
								// getElementById can match elements by name instead of ID
								if ( elem.id === m ) {
									results.push( elem );
									return results;
								}
							} else {
								return results;
							}

						// Element context
						} else {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( newContext && ( elem = newContext.getElementById( m ) ) &&
								contains( context, elem ) &&
								elem.id === m ) {

								results.push( elem );
								return results;
							}
						}

					// Type selector
					} else if ( match[ 2 ] ) {
						push.apply( results, context.getElementsByTagName( selector ) );
						return results;

					// Class selector
					} else if ( ( m = match[ 3 ] ) && support.getElementsByClassName &&
						context.getElementsByClassName ) {

						push.apply( results, context.getElementsByClassName( m ) );
						return results;
					}
				}

				// Take advantage of querySelectorAll
				if ( support.qsa &&
					!nonnativeSelectorCache[ selector + " " ] &&
					( !rbuggyQSA || !rbuggyQSA.test( selector ) ) &&

					// Support: IE 8 only
					// Exclude object elements
					( nodeType !== 1 || context.nodeName.toLowerCase() !== "object" ) ) {

					newSelector = selector;
					newContext = context;

					// qSA considers elements outside a scoping root when evaluating child or
					// descendant combinators, which is not what we want.
					// In such cases, we work around the behavior by prefixing every selector in the
					// list with an ID selector referencing the scope context.
					// The technique has to be used as well when a leading combinator is used
					// as such selectors are not recognized by querySelectorAll.
					// Thanks to Andrew Dupont for this technique.
					if ( nodeType === 1 &&
						( rdescend.test( selector ) || rcombinators.test( selector ) ) ) {

						// Expand context for sibling selectors
						newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
							context;

						// We can use :scope instead of the ID hack if the browser
						// supports it & if we're not changing the context.
						if ( newContext !== context || !support.scope ) {

							// Capture the context ID, setting it first if necessary
							if ( ( nid = context.getAttribute( "id" ) ) ) {
								nid = nid.replace( rcssescape, fcssescape );
							} else {
								context.setAttribute( "id", ( nid = expando ) );
							}
						}

						// Prefix every selector in the list
						groups = tokenize( selector );
						i = groups.length;
						while ( i-- ) {
							groups[ i ] = ( nid ? "#" + nid : ":scope" ) + " " +
								toSelector( groups[ i ] );
						}
						newSelector = groups.join( "," );
					}

					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
						nonnativeSelectorCache( selector, true );
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}

		// All others
		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}

	/**
	 * Create key-value caches of limited size
	 * @returns {function(string, object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var keys = [];

		function cache( key, value ) {

			// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
			if ( keys.push( key + " " ) > Expr.cacheLength ) {

				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return ( cache[ key + " " ] = value );
		}
		return cache;
	}

	/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}

	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created element and returns a boolean result
	 */
	function assert( fn ) {
		var el = document.createElement( "fieldset" );

		try {
			return !!fn( el );
		} catch ( e ) {
			return false;
		} finally {

			// Remove from its parent by default
			if ( el.parentNode ) {
				el.parentNode.removeChild( el );
			}

			// release memory in IE
			el = null;
		}
	}

	/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */
	function addHandle( attrs, handler ) {
		var arr = attrs.split( "|" ),
			i = arr.length;

		while ( i-- ) {
			Expr.attrHandle[ arr[ i ] ] = handler;
		}
	}

	/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */
	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
				a.sourceIndex - b.sourceIndex;

		// Use IE sourceIndex if available on both nodes
		if ( diff ) {
			return diff;
		}

		// Check if b follows a
		if ( cur ) {
			while ( ( cur = cur.nextSibling ) ) {
				if ( cur === b ) {
					return -1;
				}
			}
		}

		return a ? 1 : -1;
	}

	/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */
	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */
	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return ( name === "input" || name === "button" ) && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for :enabled/:disabled
	 * @param {Boolean} disabled true for :disabled; false for :enabled
	 */
	function createDisabledPseudo( disabled ) {

		// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
		return function( elem ) {

			// Only certain elements can match :enabled or :disabled
			// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
			// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
			if ( "form" in elem ) {

				// Check for inherited disabledness on relevant non-disabled elements:
				// * listed form-associated elements in a disabled fieldset
				//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
				//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
				// * option elements in a disabled optgroup
				//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
				// All such elements have a "form" property.
				if ( elem.parentNode && elem.disabled === false ) {

					// Option elements defer to a parent optgroup if present
					if ( "label" in elem ) {
						if ( "label" in elem.parentNode ) {
							return elem.parentNode.disabled === disabled;
						} else {
							return elem.disabled === disabled;
						}
					}

					// Support: IE 6 - 11
					// Use the isDisabled shortcut property to check for disabled fieldset ancestors
					return elem.isDisabled === disabled ||

						// Where there is no isDisabled, check manually
						/* jshint -W018 */
						elem.isDisabled !== !disabled &&
						inDisabledFieldset( elem ) === disabled;
				}

				return elem.disabled === disabled;

			// Try to winnow out elements that can't be disabled before trusting the disabled property.
			// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
			// even exist on them, let alone have a boolean value.
			} else if ( "label" in elem ) {
				return elem.disabled === disabled;
			}

			// Remaining elements are neither :enabled nor :disabled
			return false;
		};
	}

	/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */
	function createPositionalPseudo( fn ) {
		return markFunction( function( argument ) {
			argument = +argument;
			return markFunction( function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;

				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ ( j = matchIndexes[ i ] ) ] ) {
						seed[ j ] = !( matches[ j ] = seed[ j ] );
					}
				}
			} );
		} );
	}

	/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */
	function testContext( context ) {
		return context && typeof context.getElementsByTagName !== "undefined" && context;
	}

	// Expose support vars for convenience
	support = Sizzle.support = {};

	/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */
	isXML = Sizzle.isXML = function( elem ) {
		var namespace = elem && elem.namespaceURI,
			docElem = elem && ( elem.ownerDocument || elem ).documentElement;

		// Support: IE <=8
		// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
		// https://bugs.jquery.com/ticket/4833
		return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
	};

	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	setDocument = Sizzle.setDocument = function( node ) {
		var hasCompare, subWindow,
			doc = node ? node.ownerDocument || node : preferredDoc;

		// Return early if doc is invalid or already selected
		// Support: IE 11+, Edge 17 - 18+
		// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
		// two documents; shallow comparisons work.
		// eslint-disable-next-line eqeqeq
		if ( doc == document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}

		// Update global variables
		document = doc;
		docElem = document.documentElement;
		documentIsHTML = !isXML( document );

		// Support: IE 9 - 11+, Edge 12 - 18+
		// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
		// Support: IE 11+, Edge 17 - 18+
		// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
		// two documents; shallow comparisons work.
		// eslint-disable-next-line eqeqeq
		if ( preferredDoc != document &&
			( subWindow = document.defaultView ) && subWindow.top !== subWindow ) {

			// Support: IE 11, Edge
			if ( subWindow.addEventListener ) {
				subWindow.addEventListener( "unload", unloadHandler, false );

			// Support: IE 9 - 10 only
			} else if ( subWindow.attachEvent ) {
				subWindow.attachEvent( "onunload", unloadHandler );
			}
		}

		// Support: IE 8 - 11+, Edge 12 - 18+, Chrome <=16 - 25 only, Firefox <=3.6 - 31 only,
		// Safari 4 - 5 only, Opera <=11.6 - 12.x only
		// IE/Edge & older browsers don't support the :scope pseudo-class.
		// Support: Safari 6.0 only
		// Safari 6.0 supports :scope but it's an alias of :root there.
		support.scope = assert( function( el ) {
			docElem.appendChild( el ).appendChild( document.createElement( "div" ) );
			return typeof el.querySelectorAll !== "undefined" &&
				!el.querySelectorAll( ":scope fieldset div" ).length;
		} );

		/* Attributes
		---------------------------------------------------------------------- */

		// Support: IE<8
		// Verify that getAttribute really returns attributes and not properties
		// (excepting IE8 booleans)
		support.attributes = assert( function( el ) {
			el.className = "i";
			return !el.getAttribute( "className" );
		} );

		/* getElement(s)By*
		---------------------------------------------------------------------- */

		// Check if getElementsByTagName("*") returns only elements
		support.getElementsByTagName = assert( function( el ) {
			el.appendChild( document.createComment( "" ) );
			return !el.getElementsByTagName( "*" ).length;
		} );

		// Support: IE<9
		support.getElementsByClassName = rnative.test( document.getElementsByClassName );

		// Support: IE<10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programmatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert( function( el ) {
			docElem.appendChild( el ).id = expando;
			return !document.getElementsByName || !document.getElementsByName( expando ).length;
		} );

		// ID filter and find
		if ( support.getById ) {
			Expr.filter[ "ID" ] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute( "id" ) === attrId;
				};
			};
			Expr.find[ "ID" ] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var elem = context.getElementById( id );
					return elem ? [ elem ] : [];
				}
			};
		} else {
			Expr.filter[ "ID" ] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== "undefined" &&
						elem.getAttributeNode( "id" );
					return node && node.value === attrId;
				};
			};

			// Support: IE 6 - 7 only
			// getElementById is not reliable as a find shortcut
			Expr.find[ "ID" ] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var node, i, elems,
						elem = context.getElementById( id );

					if ( elem ) {

						// Verify the id attribute
						node = elem.getAttributeNode( "id" );
						if ( node && node.value === id ) {
							return [ elem ];
						}

						// Fall back on getElementsByName
						elems = context.getElementsByName( id );
						i = 0;
						while ( ( elem = elems[ i++ ] ) ) {
							node = elem.getAttributeNode( "id" );
							if ( node && node.value === id ) {
								return [ elem ];
							}
						}
					}

					return [];
				}
			};
		}

		// Tag
		Expr.find[ "TAG" ] = support.getElementsByTagName ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== "undefined" ) {
					return context.getElementsByTagName( tag );

				// DocumentFragment nodes don't have gEBTN
				} else if ( support.qsa ) {
					return context.querySelectorAll( tag );
				}
			} :

			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,

					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName( tag );

				// Filter out possible comments
				if ( tag === "*" ) {
					while ( ( elem = results[ i++ ] ) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}

					return tmp;
				}
				return results;
			};

		// Class
		Expr.find[ "CLASS" ] = support.getElementsByClassName && function( className, context ) {
			if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
				return context.getElementsByClassName( className );
			}
		};

		/* QSA/matchesSelector
		---------------------------------------------------------------------- */

		// QSA and matchesSelector support

		// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
		rbuggyMatches = [];

		// qSa(:focus) reports false when true (Chrome 21)
		// We allow this because of a bug in IE8/9 that throws an error
		// whenever `document.activeElement` is accessed on an iframe
		// So, we allow :focus to pass through QSA all the time to avoid the IE error
		// See https://bugs.jquery.com/ticket/13378
		rbuggyQSA = [];

		if ( ( support.qsa = rnative.test( document.querySelectorAll ) ) ) {

			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert( function( el ) {

				var input;

				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explicitly
				// setting a boolean content attribute,
				// since its presence should be enough
				// https://bugs.jquery.com/ticket/12359
				docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
					"<select id='" + expando + "-\r\\' msallowcapture=''>" +
					"<option selected=''></option></select>";

				// Support: IE8, Opera 11-12.16
				// Nothing should be selected when empty strings follow ^= or $= or *=
				// The test attribute must be unknown in Opera but "safe" for WinRT
				// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
				if ( el.querySelectorAll( "[msallowcapture^='']" ).length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}

				// Support: IE8
				// Boolean attributes and "value" are not treated correctly
				if ( !el.querySelectorAll( "[selected]" ).length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}

				// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
				if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
					rbuggyQSA.push( "~=" );
				}

				// Support: IE 11+, Edge 15 - 18+
				// IE 11/Edge don't find elements on a `[name='']` query in some cases.
				// Adding a temporary attribute to the document before the selection works
				// around the issue.
				// Interestingly, IE 10 & older don't seem to have the issue.
				input = document.createElement( "input" );
				input.setAttribute( "name", "" );
				el.appendChild( input );
				if ( !el.querySelectorAll( "[name='']" ).length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*name" + whitespace + "*=" +
						whitespace + "*(?:''|\"\")" );
				}

				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !el.querySelectorAll( ":checked" ).length ) {
					rbuggyQSA.push( ":checked" );
				}

				// Support: Safari 8+, iOS 8+
				// https://bugs.webkit.org/show_bug.cgi?id=136851
				// In-page `selector#id sibling-combinator selector` fails
				if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
					rbuggyQSA.push( ".#.+[+~]" );
				}

				// Support: Firefox <=3.6 - 5 only
				// Old Firefox doesn't throw on a badly-escaped identifier.
				el.querySelectorAll( "\\\f" );
				rbuggyQSA.push( "[\\r\\n\\f]" );
			} );

			assert( function( el ) {
				el.innerHTML = "<a href='' disabled='disabled'></a>" +
					"<select disabled='disabled'><option/></select>";

				// Support: Windows 8 Native Apps
				// The type and name attributes are restricted during .innerHTML assignment
				var input = document.createElement( "input" );
				input.setAttribute( "type", "hidden" );
				el.appendChild( input ).setAttribute( "name", "D" );

				// Support: IE8
				// Enforce case-sensitivity of name attribute
				if ( el.querySelectorAll( "[name=d]" ).length ) {
					rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
				}

				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( el.querySelectorAll( ":enabled" ).length !== 2 ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}

				// Support: IE9-11+
				// IE's :disabled selector does not pick up the children of disabled fieldsets
				docElem.appendChild( el ).disabled = true;
				if ( el.querySelectorAll( ":disabled" ).length !== 2 ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}

				// Support: Opera 10 - 11 only
				// Opera 10-11 does not throw on post-comma invalid pseudos
				el.querySelectorAll( "*,:x" );
				rbuggyQSA.push( ",.*:" );
			} );
		}

		if ( ( support.matchesSelector = rnative.test( ( matches = docElem.matches ||
			docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector ) ) ) ) {

			assert( function( el ) {

				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( el, "*" );

				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( el, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			} );
		}

		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join( "|" ) );
		rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join( "|" ) );

		/* Contains
		---------------------------------------------------------------------- */
		hasCompare = rnative.test( docElem.compareDocumentPosition );

		// Element contains another
		// Purposefully self-exclusive
		// As in, an element does not contain itself
		contains = hasCompare || rnative.test( docElem.contains ) ?
			function( a, b ) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				) );
			} :
			function( a, b ) {
				if ( b ) {
					while ( ( b = b.parentNode ) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};

		/* Sorting
		---------------------------------------------------------------------- */

		// Document order sorting
		sortOrder = hasCompare ?
		function( a, b ) {

			// Flag for duplicate removal
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			// Sort on method existence if only one input has compareDocumentPosition
			var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
			if ( compare ) {
				return compare;
			}

			// Calculate position if both inputs belong to the same document
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			compare = ( a.ownerDocument || a ) == ( b.ownerDocument || b ) ?
				a.compareDocumentPosition( b ) :

				// Otherwise we know they are disconnected
				1;

			// Disconnected nodes
			if ( compare & 1 ||
				( !support.sortDetached && b.compareDocumentPosition( a ) === compare ) ) {

				// Choose the first element that is related to our preferred document
				// Support: IE 11+, Edge 17 - 18+
				// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
				// two documents; shallow comparisons work.
				// eslint-disable-next-line eqeqeq
				if ( a == document || a.ownerDocument == preferredDoc &&
					contains( preferredDoc, a ) ) {
					return -1;
				}

				// Support: IE 11+, Edge 17 - 18+
				// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
				// two documents; shallow comparisons work.
				// eslint-disable-next-line eqeqeq
				if ( b == document || b.ownerDocument == preferredDoc &&
					contains( preferredDoc, b ) ) {
					return 1;
				}

				// Maintain original order
				return sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
			}

			return compare & 4 ? -1 : 1;
		} :
		function( a, b ) {

			// Exit early if the nodes are identical
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];

			// Parentless nodes are either documents or disconnected
			if ( !aup || !bup ) {

				// Support: IE 11+, Edge 17 - 18+
				// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
				// two documents; shallow comparisons work.
				/* eslint-disable eqeqeq */
				return a == document ? -1 :
					b == document ? 1 :
					/* eslint-enable eqeqeq */
					aup ? -1 :
					bup ? 1 :
					sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;

			// If the nodes are siblings, we can do a quick check
			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}

			// Otherwise we need full lists of their ancestors for comparison
			cur = a;
			while ( ( cur = cur.parentNode ) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( ( cur = cur.parentNode ) ) {
				bp.unshift( cur );
			}

			// Walk down the tree looking for a discrepancy
			while ( ap[ i ] === bp[ i ] ) {
				i++;
			}

			return i ?

				// Do a sibling check if the nodes have a common ancestor
				siblingCheck( ap[ i ], bp[ i ] ) :

				// Otherwise nodes in our document sort first
				// Support: IE 11+, Edge 17 - 18+
				// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
				// two documents; shallow comparisons work.
				/* eslint-disable eqeqeq */
				ap[ i ] == preferredDoc ? -1 :
				bp[ i ] == preferredDoc ? 1 :
				/* eslint-enable eqeqeq */
				0;
		};

		return document;
	};

	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};

	Sizzle.matchesSelector = function( elem, expr ) {
		setDocument( elem );

		if ( support.matchesSelector && documentIsHTML &&
			!nonnativeSelectorCache[ expr + " " ] &&
			( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
			( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

			try {
				var ret = matches.call( elem, expr );

				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||

					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch ( e ) {
				nonnativeSelectorCache( expr, true );
			}
		}

		return Sizzle( expr, document, null, [ elem ] ).length > 0;
	};

	Sizzle.contains = function( context, elem ) {

		// Set document vars if needed
		// Support: IE 11+, Edge 17 - 18+
		// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
		// two documents; shallow comparisons work.
		// eslint-disable-next-line eqeqeq
		if ( ( context.ownerDocument || context ) != document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};

	Sizzle.attr = function( elem, name ) {

		// Set document vars if needed
		// Support: IE 11+, Edge 17 - 18+
		// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
		// two documents; shallow comparisons work.
		// eslint-disable-next-line eqeqeq
		if ( ( elem.ownerDocument || elem ) != document ) {
			setDocument( elem );
		}

		var fn = Expr.attrHandle[ name.toLowerCase() ],

			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;

		return val !== undefined ?
			val :
			support.attributes || !documentIsHTML ?
				elem.getAttribute( name ) :
				( val = elem.getAttributeNode( name ) ) && val.specified ?
					val.value :
					null;
	};

	Sizzle.escape = function( sel ) {
		return ( sel + "" ).replace( rcssescape, fcssescape );
	};

	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};

	/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */
	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;

		// Unless we *know* we can detect duplicates, assume their presence
		hasDuplicate = !support.detectDuplicates;
		sortInput = !support.sortStable && results.slice( 0 );
		results.sort( sortOrder );

		if ( hasDuplicate ) {
			while ( ( elem = results[ i++ ] ) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}

		// Clear input after sorting to release objects
		// See https://github.com/jquery/sizzle/pull/225
		sortInput = null;

		return results;
	};

	/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */
	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;

		if ( !nodeType ) {

			// If no nodeType, this is expected to be an array
			while ( ( node = elem[ i++ ] ) ) {

				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {

			// Use textContent for elements
			// innerText usage removed for consistency of new lines (jQuery #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {

				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}

		// Do not include comment or processing instruction nodes

		return ret;
	};

	Expr = Sizzle.selectors = {

		// Can be adjusted by the user
		cacheLength: 50,

		createPseudo: markFunction,

		match: matchExpr,

		attrHandle: {},

		find: {},

		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},

		preFilter: {
			"ATTR": function( match ) {
				match[ 1 ] = match[ 1 ].replace( runescape, funescape );

				// Move the given value to match[3] whether quoted or unquoted
				match[ 3 ] = ( match[ 3 ] || match[ 4 ] ||
					match[ 5 ] || "" ).replace( runescape, funescape );

				if ( match[ 2 ] === "~=" ) {
					match[ 3 ] = " " + match[ 3 ] + " ";
				}

				return match.slice( 0, 4 );
			},

			"CHILD": function( match ) {

				/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
				match[ 1 ] = match[ 1 ].toLowerCase();

				if ( match[ 1 ].slice( 0, 3 ) === "nth" ) {

					// nth-* requires argument
					if ( !match[ 3 ] ) {
						Sizzle.error( match[ 0 ] );
					}

					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[ 4 ] = +( match[ 4 ] ?
						match[ 5 ] + ( match[ 6 ] || 1 ) :
						2 * ( match[ 3 ] === "even" || match[ 3 ] === "odd" ) );
					match[ 5 ] = +( ( match[ 7 ] + match[ 8 ] ) || match[ 3 ] === "odd" );

					// other types prohibit arguments
				} else if ( match[ 3 ] ) {
					Sizzle.error( match[ 0 ] );
				}

				return match;
			},

			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[ 6 ] && match[ 2 ];

				if ( matchExpr[ "CHILD" ].test( match[ 0 ] ) ) {
					return null;
				}

				// Accept quoted arguments as-is
				if ( match[ 3 ] ) {
					match[ 2 ] = match[ 4 ] || match[ 5 ] || "";

				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&

					// Get excess from tokenize (recursively)
					( excess = tokenize( unquoted, true ) ) &&

					// advance to the next closing parenthesis
					( excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length ) ) {

					// excess is a negative index
					match[ 0 ] = match[ 0 ].slice( 0, excess );
					match[ 2 ] = unquoted.slice( 0, excess );
				}

				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},

		filter: {

			"TAG": function( nodeNameSelector ) {
				var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() {
						return true;
					} :
					function( elem ) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
			},

			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];

				return pattern ||
					( pattern = new RegExp( "(^|" + whitespace +
						")" + className + "(" + whitespace + "|$)" ) ) && classCache(
							className, function( elem ) {
								return pattern.test(
									typeof elem.className === "string" && elem.className ||
									typeof elem.getAttribute !== "undefined" &&
										elem.getAttribute( "class" ) ||
									""
								);
					} );
			},

			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );

					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}

					result += "";

					/* eslint-disable max-len */

					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
					/* eslint-enable max-len */

				};
			},

			"CHILD": function( type, what, _argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";

				return first === 1 && last === 0 ?

					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :

					function( elem, _context, xml ) {
						var cache, uniqueCache, outerCache, node, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType,
							diff = false;

						if ( parent ) {

							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( ( node = node[ dir ] ) ) {
										if ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) {

											return false;
										}
									}

									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}

							start = [ forward ? parent.firstChild : parent.lastChild ];

							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {

								// Seek `elem` from a previously-cached index

								// ...in a gzip-friendly way
								node = parent;
								outerCache = node[ expando ] || ( node[ expando ] = {} );

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									( outerCache[ node.uniqueID ] = {} );

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex && cache[ 2 ];
								node = nodeIndex && parent.childNodes[ nodeIndex ];

								while ( ( node = ++nodeIndex && node && node[ dir ] ||

									// Fallback to seeking `elem` from the start
									( diff = nodeIndex = 0 ) || start.pop() ) ) {

									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}

							} else {

								// Use previously-cached element index if available
								if ( useCache ) {

									// ...in a gzip-friendly way
									node = elem;
									outerCache = node[ expando ] || ( node[ expando ] = {} );

									// Support: IE <9 only
									// Defend against cloned attroperties (jQuery gh-1709)
									uniqueCache = outerCache[ node.uniqueID ] ||
										( outerCache[ node.uniqueID ] = {} );

									cache = uniqueCache[ type ] || [];
									nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
									diff = nodeIndex;
								}

								// xml :nth-child(...)
								// or :nth-last-child(...) or :nth(-last)?-of-type(...)
								if ( diff === false ) {

									// Use the same loop as above to seek `elem` from the start
									while ( ( node = ++nodeIndex && node && node[ dir ] ||
										( diff = nodeIndex = 0 ) || start.pop() ) ) {

										if ( ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) &&
											++diff ) {

											// Cache the index of each encountered element
											if ( useCache ) {
												outerCache = node[ expando ] ||
													( node[ expando ] = {} );

												// Support: IE <9 only
												// Defend against cloned attroperties (jQuery gh-1709)
												uniqueCache = outerCache[ node.uniqueID ] ||
													( outerCache[ node.uniqueID ] = {} );

												uniqueCache[ type ] = [ dirruns, diff ];
											}

											if ( node === elem ) {
												break;
											}
										}
									}
								}
							}

							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},

			"PSEUDO": function( pseudo, argument ) {

				// pseudo-class names are case-insensitive
				// http://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );

				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as Sizzle does
				if ( fn[ expando ] ) {
					return fn( argument );
				}

				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction( function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf( seed, matched[ i ] );
								seed[ idx ] = !( matches[ idx ] = matched[ i ] );
							}
						} ) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}

				return fn;
			}
		},

		pseudos: {

			// Potentially complex pseudos
			"not": markFunction( function( selector ) {

				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );

				return matcher[ expando ] ?
					markFunction( function( seed, matches, _context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;

						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( ( elem = unmatched[ i ] ) ) {
								seed[ i ] = !( matches[ i ] = elem );
							}
						}
					} ) :
					function( elem, _context, xml ) {
						input[ 0 ] = elem;
						matcher( input, null, xml, results );

						// Don't keep the element (issue #299)
						input[ 0 ] = null;
						return !results.pop();
					};
			} ),

			"has": markFunction( function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			} ),

			"contains": markFunction( function( text ) {
				text = text.replace( runescape, funescape );
				return function( elem ) {
					return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
				};
			} ),

			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// http://www.w3.org/TR/selectors/#lang-pseudo
			"lang": markFunction( function( lang ) {

				// lang value must be a valid identifier
				if ( !ridentifier.test( lang || "" ) ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( ( elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute( "xml:lang" ) || elem.getAttribute( "lang" ) ) ) {

							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( ( elem = elem.parentNode ) && elem.nodeType === 1 );
					return false;
				};
			} ),

			// Miscellaneous
			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},

			"root": function( elem ) {
				return elem === docElem;
			},

			"focus": function( elem ) {
				return elem === document.activeElement &&
					( !document.hasFocus || document.hasFocus() ) &&
					!!( elem.type || elem.href || ~elem.tabIndex );
			},

			// Boolean properties
			"enabled": createDisabledPseudo( false ),
			"disabled": createDisabledPseudo( true ),

			"checked": function( elem ) {

				// In CSS3, :checked should return both checked and selected elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				var nodeName = elem.nodeName.toLowerCase();
				return ( nodeName === "input" && !!elem.checked ) ||
					( nodeName === "option" && !!elem.selected );
			},

			"selected": function( elem ) {

				// Accessing this property makes selected-by-default
				// options in Safari work properly
				if ( elem.parentNode ) {
					// eslint-disable-next-line no-unused-expressions
					elem.parentNode.selectedIndex;
				}

				return elem.selected === true;
			},

			// Contents
			"empty": function( elem ) {

				// http://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
				//   but not by others (comment: 8; processing instruction: 7; etc.)
				// nodeType < 6 works because attributes (2) do not appear as children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeType < 6 ) {
						return false;
					}
				}
				return true;
			},

			"parent": function( elem ) {
				return !Expr.pseudos[ "empty" ]( elem );
			},

			// Element/input types
			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},

			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},

			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},

			"text": function( elem ) {
				var attr;
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&

					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					( ( attr = elem.getAttribute( "type" ) ) == null ||
						attr.toLowerCase() === "text" );
			},

			// Position-in-collection
			"first": createPositionalPseudo( function() {
				return [ 0 ];
			} ),

			"last": createPositionalPseudo( function( _matchIndexes, length ) {
				return [ length - 1 ];
			} ),

			"eq": createPositionalPseudo( function( _matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			} ),

			"even": createPositionalPseudo( function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			} ),

			"odd": createPositionalPseudo( function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			} ),

			"lt": createPositionalPseudo( function( matchIndexes, length, argument ) {
				var i = argument < 0 ?
					argument + length :
					argument > length ?
						length :
						argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			} ),

			"gt": createPositionalPseudo( function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			} )
		}
	};

	Expr.pseudos[ "nth" ] = Expr.pseudos[ "eq" ];

	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}

	// Easy API for creating new setFilters
	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();

	tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];

		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}

		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;

		while ( soFar ) {

			// Comma and first run
			if ( !matched || ( match = rcomma.exec( soFar ) ) ) {
				if ( match ) {

					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[ 0 ].length ) || soFar;
				}
				groups.push( ( tokens = [] ) );
			}

			matched = false;

			// Combinators
			if ( ( match = rcombinators.exec( soFar ) ) ) {
				matched = match.shift();
				tokens.push( {
					value: matched,

					// Cast descendant combinators to space
					type: match[ 0 ].replace( rtrim, " " )
				} );
				soFar = soFar.slice( matched.length );
			}

			// Filters
			for ( type in Expr.filter ) {
				if ( ( match = matchExpr[ type ].exec( soFar ) ) && ( !preFilters[ type ] ||
					( match = preFilters[ type ]( match ) ) ) ) {
					matched = match.shift();
					tokens.push( {
						value: matched,
						type: type,
						matches: match
					} );
					soFar = soFar.slice( matched.length );
				}
			}

			if ( !matched ) {
				break;
			}
		}

		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :

				// Cache the tokens
				tokenCache( selector, groups ).slice( 0 );
	};

	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[ i ].value;
		}
		return selector;
	}

	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			skip = combinator.next,
			key = skip || dir,
			checkNonElements = base && key === "parentNode",
			doneName = done++;

		return combinator.first ?

			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
				return false;
			} :

			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var oldCache, uniqueCache, outerCache,
					newCache = [ dirruns, doneName ];

				// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
				if ( xml ) {
					while ( ( elem = elem[ dir ] ) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( ( elem = elem[ dir ] ) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || ( elem[ expando ] = {} );

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ elem.uniqueID ] ||
								( outerCache[ elem.uniqueID ] = {} );

							if ( skip && skip === elem.nodeName.toLowerCase() ) {
								elem = elem[ dir ] || elem;
							} else if ( ( oldCache = uniqueCache[ key ] ) &&
								oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

								// Assign to newCache so results back-propagate to previous elements
								return ( newCache[ 2 ] = oldCache[ 2 ] );
							} else {

								// Reuse newcache so results back-propagate to previous elements
								uniqueCache[ key ] = newCache;

								// A match means we're done; a fail means we have to keep checking
								if ( ( newCache[ 2 ] = matcher( elem, context, xml ) ) ) {
									return true;
								}
							}
						}
					}
				}
				return false;
			};
	}

	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[ i ]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[ 0 ];
	}

	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[ i ], results );
		}
		return results;
	}

	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;

		for ( ; i < len; i++ ) {
			if ( ( elem = unmatched[ i ] ) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}

		return newUnmatched;
	}

	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction( function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,

				// Get initial elements from seed or context
				elems = seed || multipleContexts(
					selector || "*",
					context.nodeType ? [ context ] : context,
					[]
				),

				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,

				matcherOut = matcher ?

					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

						// ...intermediate processing is necessary
						[] :

						// ...otherwise use results directly
						results :
					matcherIn;

			// Find primary matches
			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}

			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );

				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( ( elem = temp[ i ] ) ) {
						matcherOut[ postMap[ i ] ] = !( matcherIn[ postMap[ i ] ] = elem );
					}
				}
			}

			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {

						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( ( elem = matcherOut[ i ] ) ) {

								// Restore matcherIn since elem is not yet a final match
								temp.push( ( matcherIn[ i ] = elem ) );
							}
						}
						postFinder( null, ( matcherOut = [] ), temp, xml );
					}

					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( ( elem = matcherOut[ i ] ) &&
							( temp = postFinder ? indexOf( seed, elem ) : preMap[ i ] ) > -1 ) {

							seed[ temp ] = !( results[ temp ] = elem );
						}
					}
				}

			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		} );
	}

	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[ 0 ].type ],
			implicitRelative = leadingRelative || Expr.relative[ " " ],
			i = leadingRelative ? 1 : 0,

			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					( checkContext = context ).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );

				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			} ];

		for ( ; i < len; i++ ) {
			if ( ( matcher = Expr.relative[ tokens[ i ].type ] ) ) {
				matchers = [ addCombinator( elementMatcher( matchers ), matcher ) ];
			} else {
				matcher = Expr.filter[ tokens[ i ].type ].apply( null, tokens[ i ].matches );

				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {

					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[ j ].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(

						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens
							.slice( 0, i - 1 )
							.concat( { value: tokens[ i - 2 ].type === " " ? "*" : "" } )
						).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( ( tokens = tokens.slice( j ) ) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}

		return elementMatcher( matchers );
	}

	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		var bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, outermost ) {
				var elem, j, matcher,
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					setMatched = [],
					contextBackup = outermostContext,

					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find[ "TAG" ]( "*", outermost ),

					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = ( dirruns += contextBackup == null ? 1 : Math.random() || 0.1 ),
					len = elems.length;

				if ( outermost ) {

					// Support: IE 11+, Edge 17 - 18+
					// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
					// two documents; shallow comparisons work.
					// eslint-disable-next-line eqeqeq
					outermostContext = context == document || context || outermost;
				}

				// Add elements passing elementMatchers directly to results
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for ( ; i !== len && ( elem = elems[ i ] ) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;

						// Support: IE 11+, Edge 17 - 18+
						// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
						// two documents; shallow comparisons work.
						// eslint-disable-next-line eqeqeq
						if ( !context && elem.ownerDocument != document ) {
							setDocument( elem );
							xml = !documentIsHTML;
						}
						while ( ( matcher = elementMatchers[ j++ ] ) ) {
							if ( matcher( elem, context || document, xml ) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
						}
					}

					// Track unmatched elements for set filters
					if ( bySet ) {

						// They will have gone through all possible matchers
						if ( ( elem = !matcher && elem ) ) {
							matchedCount--;
						}

						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}

				// `i` is now the count of elements visited above, and adding it to `matchedCount`
				// makes the latter nonnegative.
				matchedCount += i;

				// Apply set filters to unmatched elements
				// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
				// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
				// no element matchers and no seed.
				// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
				// case, which will result in a "00" `matchedCount` that differs from `i` but is also
				// numerically zero.
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( ( matcher = setMatchers[ j++ ] ) ) {
						matcher( unmatched, setMatched, context, xml );
					}

					if ( seed ) {

						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !( unmatched[ i ] || setMatched[ i ] ) ) {
									setMatched[ i ] = pop.call( results );
								}
							}
						}

						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}

					// Add matches to results
					push.apply( results, setMatched );

					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {

						Sizzle.uniqueSort( results );
					}
				}

				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}

				return unmatched;
			};

		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}

	compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];

		if ( !cached ) {

			// Generate a function of recursive functions that can be used to check each element
			if ( !match ) {
				match = tokenize( selector );
			}
			i = match.length;
			while ( i-- ) {
				cached = matcherFromTokens( match[ i ] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}

			// Cache the compiled function
			cached = compilerCache(
				selector,
				matcherFromGroupMatchers( elementMatchers, setMatchers )
			);

			// Save selector and tokenization
			cached.selector = selector;
		}
		return cached;
	};

	/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */
	select = Sizzle.select = function( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			compiled = typeof selector === "function" && selector,
			match = !seed && tokenize( ( selector = compiled.selector || selector ) );

		results = results || [];

		// Try to minimize operations if there is only one selector in the list and no seed
		// (the latter of which guarantees us context)
		if ( match.length === 1 ) {

			// Reduce context if the leading compound selector is an ID
			tokens = match[ 0 ] = match[ 0 ].slice( 0 );
			if ( tokens.length > 2 && ( token = tokens[ 0 ] ).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[ 1 ].type ] ) {

				context = ( Expr.find[ "ID" ]( token.matches[ 0 ]
					.replace( runescape, funescape ), context ) || [] )[ 0 ];
				if ( !context ) {
					return results;

				// Precompiled matchers will still verify ancestry, so step up a level
				} else if ( compiled ) {
					context = context.parentNode;
				}

				selector = selector.slice( tokens.shift().value.length );
			}

			// Fetch a seed set for right-to-left matching
			i = matchExpr[ "needsContext" ].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[ i ];

				// Abort if we hit a combinator
				if ( Expr.relative[ ( type = token.type ) ] ) {
					break;
				}
				if ( ( find = Expr.find[ type ] ) ) {

					// Search, expanding context for leading sibling combinators
					if ( ( seed = find(
						token.matches[ 0 ].replace( runescape, funescape ),
						rsibling.test( tokens[ 0 ].type ) && testContext( context.parentNode ) ||
							context
					) ) ) {

						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}

						break;
					}
				}
			}
		}

		// Compile and execute a filtering function if one is not provided
		// Provide `match` to avoid retokenization if we modified the selector above
		( compiled || compile( selector, match ) )(
			seed,
			context,
			!documentIsHTML,
			results,
			!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
		);
		return results;
	};

	// One-time assignments

	// Sort stability
	support.sortStable = expando.split( "" ).sort( sortOrder ).join( "" ) === expando;

	// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = !!hasDuplicate;

	// Initialize against the default document
	setDocument();

	// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert( function( el ) {

		// Should return 1, but returns 4 (following)
		return el.compareDocumentPosition( document.createElement( "fieldset" ) ) & 1;
	} );

	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !assert( function( el ) {
		el.innerHTML = "<a href='#'></a>";
		return el.firstChild.getAttribute( "href" ) === "#";
	} ) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		} );
	}

	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if ( !support.attributes || !assert( function( el ) {
		el.innerHTML = "<input/>";
		el.firstChild.setAttribute( "value", "" );
		return el.firstChild.getAttribute( "value" ) === "";
	} ) ) {
		addHandle( "value", function( elem, _name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		} );
	}

	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if ( !assert( function( el ) {
		return el.getAttribute( "disabled" ) == null;
	} ) ) {
		addHandle( booleans, function( elem, name, isXML ) {
			var val;
			if ( !isXML ) {
				return elem[ name ] === true ? name.toLowerCase() :
					( val = elem.getAttributeNode( name ) ) && val.specified ?
						val.value :
						null;
			}
		} );
	}

	return Sizzle;

	} )( window );



	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;

	// Deprecated
	jQuery.expr[ ":" ] = jQuery.expr.pseudos;
	jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;
	jQuery.escapeSelector = Sizzle.escape;




	var dir = function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;

		while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	};


	var siblings = function( n, elem ) {
		var matched = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}

		return matched;
	};


	var rneedsContext = jQuery.expr.match.needsContext;



	function nodeName( elem, name ) {

		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

	}
	var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				return !!qualifier.call( elem, i, elem ) !== not;
			} );
		}

		// Single element
		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			} );
		}

		// Arraylike of elements (jQuery, arguments, Array)
		if ( typeof qualifier !== "string" ) {
			return jQuery.grep( elements, function( elem ) {
				return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
			} );
		}

		// Filtered directly for both simple and complex selectors
		return jQuery.filter( qualifier, elements, not );
	}

	jQuery.filter = function( expr, elems, not ) {
		var elem = elems[ 0 ];

		if ( not ) {
			expr = ":not(" + expr + ")";
		}

		if ( elems.length === 1 && elem.nodeType === 1 ) {
			return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
		}

		return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
			return elem.nodeType === 1;
		} ) );
	};

	jQuery.fn.extend( {
		find: function( selector ) {
			var i, ret,
				len = this.length,
				self = this;

			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter( function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				} ) );
			}

			ret = this.pushStack( [] );

			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}

			return len > 1 ? jQuery.uniqueSort( ret ) : ret;
		},
		filter: function( selector ) {
			return this.pushStack( winnow( this, selector || [], false ) );
		},
		not: function( selector ) {
			return this.pushStack( winnow( this, selector || [], true ) );
		},
		is: function( selector ) {
			return !!winnow(
				this,

				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		}
	} );


	// Initialize a jQuery object


	// A central reference to the root jQuery(document)
	var rootjQuery,

		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		// Shortcut simple #id case for speed
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

		init = jQuery.fn.init = function( selector, context, root ) {
			var match, elem;

			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}

			// Method init() accepts an alternate rootjQuery
			// so migrate can support jQuery.sub (gh-2101)
			root = root || rootjQuery;

			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector[ 0 ] === "<" &&
					selector[ selector.length - 1 ] === ">" &&
					selector.length >= 3 ) {

					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];

				} else {
					match = rquickExpr.exec( selector );
				}

				// Match html or make sure no context is specified for #id
				if ( match && ( match[ 1 ] || !context ) ) {

					// HANDLE: $(html) -> $(array)
					if ( match[ 1 ] ) {
						context = context instanceof jQuery ? context[ 0 ] : context;

						// Option to run scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge( this, jQuery.parseHTML(
							match[ 1 ],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );

						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {

								// Properties of context are called as methods if possible
								if ( isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );

								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}

						return this;

					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[ 2 ] );

						if ( elem ) {

							// Inject the element directly into the jQuery object
							this[ 0 ] = elem;
							this.length = 1;
						}
						return this;
					}

				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || root ).find( selector );

				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}

			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this[ 0 ] = selector;
				this.length = 1;
				return this;

			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( isFunction( selector ) ) {
				return root.ready !== undefined ?
					root.ready( selector ) :

					// Execute immediately if ready is not present
					selector( jQuery );
			}

			return jQuery.makeArray( selector, this );
		};

	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;

	// Initialize central reference
	rootjQuery = jQuery( document );


	var rparentsprev = /^(?:parents|prev(?:Until|All))/,

		// Methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};

	jQuery.fn.extend( {
		has: function( target ) {
			var targets = jQuery( target, this ),
				l = targets.length;

			return this.filter( function() {
				var i = 0;
				for ( ; i < l; i++ ) {
					if ( jQuery.contains( this, targets[ i ] ) ) {
						return true;
					}
				}
			} );
		},

		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				targets = typeof selectors !== "string" && jQuery( selectors );

			// Positional selectors never match, since there's no _selection_ context
			if ( !rneedsContext.test( selectors ) ) {
				for ( ; i < l; i++ ) {
					for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

						// Always skip document fragments
						if ( cur.nodeType < 11 && ( targets ?
							targets.index( cur ) > -1 :

							// Don't pass non-elements to Sizzle
							cur.nodeType === 1 &&
								jQuery.find.matchesSelector( cur, selectors ) ) ) {

							matched.push( cur );
							break;
						}
					}
				}
			}

			return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
		},

		// Determine the position of an element within the set
		index: function( elem ) {

			// No argument, return index in parent
			if ( !elem ) {
				return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
			}

			// Index in selector
			if ( typeof elem === "string" ) {
				return indexOf.call( jQuery( elem ), this[ 0 ] );
			}

			// Locate the position of the desired element
			return indexOf.call( this,

				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[ 0 ] : elem
			);
		},

		add: function( selector, context ) {
			return this.pushStack(
				jQuery.uniqueSort(
					jQuery.merge( this.get(), jQuery( selector, context ) )
				)
			);
		},

		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter( selector )
			);
		}
	} );

	function sibling( cur, dir ) {
		while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
		return cur;
	}

	jQuery.each( {
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, _i, until ) {
			return dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, _i, until ) {
			return dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, _i, until ) {
			return dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return siblings( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return siblings( elem.firstChild );
		},
		contents: function( elem ) {
			if ( elem.contentDocument != null &&

				// Support: IE 11+
				// <object> elements with no `data` attribute has an object
				// `contentDocument` with a `null` prototype.
				getProto( elem.contentDocument ) ) {

				return elem.contentDocument;
			}

			// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
			// Treat the template element as a regular one in browsers that
			// don't support it.
			if ( nodeName( elem, "template" ) ) {
				elem = elem.content || elem;
			}

			return jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var matched = jQuery.map( this, fn, until );

			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}

			if ( selector && typeof selector === "string" ) {
				matched = jQuery.filter( selector, matched );
			}

			if ( this.length > 1 ) {

				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					jQuery.uniqueSort( matched );
				}

				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					matched.reverse();
				}
			}

			return this.pushStack( matched );
		};
	} );
	var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



	// Convert String-formatted options into Object-formatted ones
	function createOptions( options ) {
		var object = {};
		jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		} );
		return object;
	}

	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function( options ) {

		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			createOptions( options ) :
			jQuery.extend( {}, options );

		var // Flag to know if list is currently firing
			firing,

			// Last fire value for non-forgettable lists
			memory,

			// Flag to know if list was already fired
			fired,

			// Flag to prevent firing
			locked,

			// Actual callback list
			list = [],

			// Queue of execution data for repeatable lists
			queue = [],

			// Index of currently firing callback (modified by add/remove as needed)
			firingIndex = -1,

			// Fire callbacks
			fire = function() {

				// Enforce single-firing
				locked = locked || options.once;

				// Execute callbacks for all pending executions,
				// respecting firingIndex overrides and runtime changes
				fired = firing = true;
				for ( ; queue.length; firingIndex = -1 ) {
					memory = queue.shift();
					while ( ++firingIndex < list.length ) {

						// Run callback and check for early termination
						if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
							options.stopOnFalse ) {

							// Jump to end and forget the data so .add doesn't re-fire
							firingIndex = list.length;
							memory = false;
						}
					}
				}

				// Forget the data if we're done with it
				if ( !options.memory ) {
					memory = false;
				}

				firing = false;

				// Clean up if we're done firing for good
				if ( locked ) {

					// Keep an empty list if we have data for future add calls
					if ( memory ) {
						list = [];

					// Otherwise, this object is spent
					} else {
						list = "";
					}
				}
			},

			// Actual Callbacks object
			self = {

				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {

						// If we have memory from a past run, we should fire after adding
						if ( memory && !firing ) {
							firingIndex = list.length - 1;
							queue.push( memory );
						}

						( function add( args ) {
							jQuery.each( args, function( _, arg ) {
								if ( isFunction( arg ) ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && toType( arg ) !== "string" ) {

									// Inspect recursively
									add( arg );
								}
							} );
						} )( arguments );

						if ( memory && !firing ) {
							fire();
						}
					}
					return this;
				},

				// Remove a callback from the list
				remove: function() {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );

							// Handle firing indexes
							if ( index <= firingIndex ) {
								firingIndex--;
							}
						}
					} );
					return this;
				},

				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ?
						jQuery.inArray( fn, list ) > -1 :
						list.length > 0;
				},

				// Remove all callbacks from the list
				empty: function() {
					if ( list ) {
						list = [];
					}
					return this;
				},

				// Disable .fire and .add
				// Abort any current/pending executions
				// Clear all callbacks and values
				disable: function() {
					locked = queue = [];
					list = memory = "";
					return this;
				},
				disabled: function() {
					return !list;
				},

				// Disable .fire
				// Also disable .add unless we have memory (since it would have no effect)
				// Abort any pending executions
				lock: function() {
					locked = queue = [];
					if ( !memory && !firing ) {
						list = memory = "";
					}
					return this;
				},
				locked: function() {
					return !!locked;
				},

				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					if ( !locked ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						queue.push( args );
						if ( !firing ) {
							fire();
						}
					}
					return this;
				},

				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},

				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};

		return self;
	};


	function Identity( v ) {
		return v;
	}
	function Thrower( ex ) {
		throw ex;
	}

	function adoptValue( value, resolve, reject, noValue ) {
		var method;

		try {

			// Check for promise aspect first to privilege synchronous behavior
			if ( value && isFunction( ( method = value.promise ) ) ) {
				method.call( value ).done( resolve ).fail( reject );

			// Other thenables
			} else if ( value && isFunction( ( method = value.then ) ) ) {
				method.call( value, resolve, reject );

			// Other non-thenables
			} else {

				// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
				// * false: [ value ].slice( 0 ) => resolve( value )
				// * true: [ value ].slice( 1 ) => resolve()
				resolve.apply( undefined, [ value ].slice( noValue ) );
			}

		// For Promises/A+, convert exceptions into rejections
		// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
		// Deferred#then to conditionally suppress rejection.
		} catch ( value ) {

			// Support: Android 4.0 only
			// Strict mode functions invoked without .call/.apply get global-object context
			reject.apply( undefined, [ value ] );
		}
	}

	jQuery.extend( {

		Deferred: function( func ) {
			var tuples = [

					// action, add listener, callbacks,
					// ... .then handlers, argument index, [final state]
					[ "notify", "progress", jQuery.Callbacks( "memory" ),
						jQuery.Callbacks( "memory" ), 2 ],
					[ "resolve", "done", jQuery.Callbacks( "once memory" ),
						jQuery.Callbacks( "once memory" ), 0, "resolved" ],
					[ "reject", "fail", jQuery.Callbacks( "once memory" ),
						jQuery.Callbacks( "once memory" ), 1, "rejected" ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					"catch": function( fn ) {
						return promise.then( null, fn );
					},

					// Keep pipe for back-compat
					pipe: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;

						return jQuery.Deferred( function( newDefer ) {
							jQuery.each( tuples, function( _i, tuple ) {

								// Map tuples (progress, done, fail) to arguments (done, fail, progress)
								var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

								// deferred.progress(function() { bind to newDefer or newDefer.notify })
								// deferred.done(function() { bind to newDefer or newDefer.resolve })
								// deferred.fail(function() { bind to newDefer or newDefer.reject })
								deferred[ tuple[ 1 ] ]( function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && isFunction( returned.promise ) ) {
										returned.promise()
											.progress( newDefer.notify )
											.done( newDefer.resolve )
											.fail( newDefer.reject );
									} else {
										newDefer[ tuple[ 0 ] + "With" ](
											this,
											fn ? [ returned ] : arguments
										);
									}
								} );
							} );
							fns = null;
						} ).promise();
					},
					then: function( onFulfilled, onRejected, onProgress ) {
						var maxDepth = 0;
						function resolve( depth, deferred, handler, special ) {
							return function() {
								var that = this,
									args = arguments,
									mightThrow = function() {
										var returned, then;

										// Support: Promises/A+ section 2.3.3.3.3
										// https://promisesaplus.com/#point-59
										// Ignore double-resolution attempts
										if ( depth < maxDepth ) {
											return;
										}

										returned = handler.apply( that, args );

										// Support: Promises/A+ section 2.3.1
										// https://promisesaplus.com/#point-48
										if ( returned === deferred.promise() ) {
											throw new TypeError( "Thenable self-resolution" );
										}

										// Support: Promises/A+ sections 2.3.3.1, 3.5
										// https://promisesaplus.com/#point-54
										// https://promisesaplus.com/#point-75
										// Retrieve `then` only once
										then = returned &&

											// Support: Promises/A+ section 2.3.4
											// https://promisesaplus.com/#point-64
											// Only check objects and functions for thenability
											( typeof returned === "object" ||
												typeof returned === "function" ) &&
											returned.then;

										// Handle a returned thenable
										if ( isFunction( then ) ) {

											// Special processors (notify) just wait for resolution
											if ( special ) {
												then.call(
													returned,
													resolve( maxDepth, deferred, Identity, special ),
													resolve( maxDepth, deferred, Thrower, special )
												);

											// Normal processors (resolve) also hook into progress
											} else {

												// ...and disregard older resolution values
												maxDepth++;

												then.call(
													returned,
													resolve( maxDepth, deferred, Identity, special ),
													resolve( maxDepth, deferred, Thrower, special ),
													resolve( maxDepth, deferred, Identity,
														deferred.notifyWith )
												);
											}

										// Handle all other returned values
										} else {

											// Only substitute handlers pass on context
											// and multiple values (non-spec behavior)
											if ( handler !== Identity ) {
												that = undefined;
												args = [ returned ];
											}

											// Process the value(s)
											// Default process is resolve
											( special || deferred.resolveWith )( that, args );
										}
									},

									// Only normal processors (resolve) catch and reject exceptions
									process = special ?
										mightThrow :
										function() {
											try {
												mightThrow();
											} catch ( e ) {

												if ( jQuery.Deferred.exceptionHook ) {
													jQuery.Deferred.exceptionHook( e,
														process.stackTrace );
												}

												// Support: Promises/A+ section 2.3.3.3.4.1
												// https://promisesaplus.com/#point-61
												// Ignore post-resolution exceptions
												if ( depth + 1 >= maxDepth ) {

													// Only substitute handlers pass on context
													// and multiple values (non-spec behavior)
													if ( handler !== Thrower ) {
														that = undefined;
														args = [ e ];
													}

													deferred.rejectWith( that, args );
												}
											}
										};

								// Support: Promises/A+ section 2.3.3.3.1
								// https://promisesaplus.com/#point-57
								// Re-resolve promises immediately to dodge false rejection from
								// subsequent errors
								if ( depth ) {
									process();
								} else {

									// Call an optional hook to record the stack, in case of exception
									// since it's otherwise lost when execution goes async
									if ( jQuery.Deferred.getStackHook ) {
										process.stackTrace = jQuery.Deferred.getStackHook();
									}
									window.setTimeout( process );
								}
							};
						}

						return jQuery.Deferred( function( newDefer ) {

							// progress_handlers.add( ... )
							tuples[ 0 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									isFunction( onProgress ) ?
										onProgress :
										Identity,
									newDefer.notifyWith
								)
							);

							// fulfilled_handlers.add( ... )
							tuples[ 1 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									isFunction( onFulfilled ) ?
										onFulfilled :
										Identity
								)
							);

							// rejected_handlers.add( ... )
							tuples[ 2 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									isFunction( onRejected ) ?
										onRejected :
										Thrower
								)
							);
						} ).promise();
					},

					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};

			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 5 ];

				// promise.progress = list.add
				// promise.done = list.add
				// promise.fail = list.add
				promise[ tuple[ 1 ] ] = list.add;

				// Handle state
				if ( stateString ) {
					list.add(
						function() {

							// state = "resolved" (i.e., fulfilled)
							// state = "rejected"
							state = stateString;
						},

						// rejected_callbacks.disable
						// fulfilled_callbacks.disable
						tuples[ 3 - i ][ 2 ].disable,

						// rejected_handlers.disable
						// fulfilled_handlers.disable
						tuples[ 3 - i ][ 3 ].disable,

						// progress_callbacks.lock
						tuples[ 0 ][ 2 ].lock,

						// progress_handlers.lock
						tuples[ 0 ][ 3 ].lock
					);
				}

				// progress_handlers.fire
				// fulfilled_handlers.fire
				// rejected_handlers.fire
				list.add( tuple[ 3 ].fire );

				// deferred.notify = function() { deferred.notifyWith(...) }
				// deferred.resolve = function() { deferred.resolveWith(...) }
				// deferred.reject = function() { deferred.rejectWith(...) }
				deferred[ tuple[ 0 ] ] = function() {
					deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
					return this;
				};

				// deferred.notifyWith = list.fireWith
				// deferred.resolveWith = list.fireWith
				// deferred.rejectWith = list.fireWith
				deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
			} );

			// Make the deferred a promise
			promise.promise( deferred );

			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}

			// All done!
			return deferred;
		},

		// Deferred helper
		when: function( singleValue ) {
			var

				// count of uncompleted subordinates
				remaining = arguments.length,

				// count of unprocessed arguments
				i = remaining,

				// subordinate fulfillment data
				resolveContexts = Array( i ),
				resolveValues = slice.call( arguments ),

				// the primary Deferred
				primary = jQuery.Deferred(),

				// subordinate callback factory
				updateFunc = function( i ) {
					return function( value ) {
						resolveContexts[ i ] = this;
						resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
						if ( !( --remaining ) ) {
							primary.resolveWith( resolveContexts, resolveValues );
						}
					};
				};

			// Single- and empty arguments are adopted like Promise.resolve
			if ( remaining <= 1 ) {
				adoptValue( singleValue, primary.done( updateFunc( i ) ).resolve, primary.reject,
					!remaining );

				// Use .then() to unwrap secondary thenables (cf. gh-3000)
				if ( primary.state() === "pending" ||
					isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

					return primary.then();
				}
			}

			// Multiple arguments are aggregated like Promise.all array elements
			while ( i-- ) {
				adoptValue( resolveValues[ i ], updateFunc( i ), primary.reject );
			}

			return primary.promise();
		}
	} );


	// These usually indicate a programmer mistake during development,
	// warn about them ASAP rather than swallowing them by default.
	var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

	jQuery.Deferred.exceptionHook = function( error, stack ) {

		// Support: IE 8 - 9 only
		// Console exists when dev tools are open, which can happen at any time
		if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
			window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
		}
	};




	jQuery.readyException = function( error ) {
		window.setTimeout( function() {
			throw error;
		} );
	};




	// The deferred used on DOM ready
	var readyList = jQuery.Deferred();

	jQuery.fn.ready = function( fn ) {

		readyList
			.then( fn )

			// Wrap jQuery.readyException in a function so that the lookup
			// happens at the time of error handling instead of callback
			// registration.
			.catch( function( error ) {
				jQuery.readyException( error );
			} );

		return this;
	};

	jQuery.extend( {

		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,

		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,

		// Handle when the DOM is ready
		ready: function( wait ) {

			// Abort if there are pending holds or we're already ready
			if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
				return;
			}

			// Remember that the DOM is ready
			jQuery.isReady = true;

			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}

			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );
		}
	} );

	jQuery.ready.then = readyList.then;

	// The ready event handler and self cleanup method
	function completed() {
		document.removeEventListener( "DOMContentLoaded", completed );
		window.removeEventListener( "load", completed );
		jQuery.ready();
	}

	// Catch cases where $(document).ready() is called
	// after the browser event has already occurred.
	// Support: IE <=9 - 10 only
	// Older IE sometimes signals "interactive" too soon
	if ( document.readyState === "complete" ||
		( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

		// Handle it asynchronously to allow scripts the opportunity to delay ready
		window.setTimeout( jQuery.ready );

	} else {

		// Use the handy event callback
		document.addEventListener( "DOMContentLoaded", completed );

		// A fallback to window.onload, that will always work
		window.addEventListener( "load", completed );
	}




	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			len = elems.length,
			bulk = key == null;

		// Sets many values
		if ( toType( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				access( elems, fn, i, key[ i ], true, emptyGet, raw );
			}

		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;

			if ( !isFunction( value ) ) {
				raw = true;
			}

			if ( bulk ) {

				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;

				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, _key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}

			if ( fn ) {
				for ( ; i < len; i++ ) {
					fn(
						elems[ i ], key, raw ?
							value :
							value.call( elems[ i ], i, fn( elems[ i ], key ) )
					);
				}
			}
		}

		if ( chainable ) {
			return elems;
		}

		// Gets
		if ( bulk ) {
			return fn.call( elems );
		}

		return len ? fn( elems[ 0 ], key ) : emptyGet;
	};


	// Matches dashed string for camelizing
	var rmsPrefix = /^-ms-/,
		rdashAlpha = /-([a-z])/g;

	// Used by camelCase as callback to replace()
	function fcamelCase( _all, letter ) {
		return letter.toUpperCase();
	}

	// Convert dashed to camelCase; used by the css and data modules
	// Support: IE <=9 - 11, Edge 12 - 15
	// Microsoft forgot to hump their vendor prefix (#9572)
	function camelCase( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	}
	var acceptData = function( owner ) {

		// Accepts only:
		//  - Node
		//    - Node.ELEMENT_NODE
		//    - Node.DOCUMENT_NODE
		//  - Object
		//    - Any
		return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
	};




	function Data() {
		this.expando = jQuery.expando + Data.uid++;
	}

	Data.uid = 1;

	Data.prototype = {

		cache: function( owner ) {

			// Check if the owner object already has a cache
			var value = owner[ this.expando ];

			// If not, create one
			if ( !value ) {
				value = {};

				// We can accept data for non-element nodes in modern browsers,
				// but we should not, see #8335.
				// Always return an empty object.
				if ( acceptData( owner ) ) {

					// If it is a node unlikely to be stringify-ed or looped over
					// use plain assignment
					if ( owner.nodeType ) {
						owner[ this.expando ] = value;

					// Otherwise secure it in a non-enumerable property
					// configurable must be true to allow the property to be
					// deleted when data is removed
					} else {
						Object.defineProperty( owner, this.expando, {
							value: value,
							configurable: true
						} );
					}
				}
			}

			return value;
		},
		set: function( owner, data, value ) {
			var prop,
				cache = this.cache( owner );

			// Handle: [ owner, key, value ] args
			// Always use camelCase key (gh-2257)
			if ( typeof data === "string" ) {
				cache[ camelCase( data ) ] = value;

			// Handle: [ owner, { properties } ] args
			} else {

				// Copy the properties one-by-one to the cache object
				for ( prop in data ) {
					cache[ camelCase( prop ) ] = data[ prop ];
				}
			}
			return cache;
		},
		get: function( owner, key ) {
			return key === undefined ?
				this.cache( owner ) :

				// Always use camelCase key (gh-2257)
				owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
		},
		access: function( owner, key, value ) {

			// In cases where either:
			//
			//   1. No key was specified
			//   2. A string key was specified, but no value provided
			//
			// Take the "read" path and allow the get method to determine
			// which value to return, respectively either:
			//
			//   1. The entire cache object
			//   2. The data stored at the key
			//
			if ( key === undefined ||
					( ( key && typeof key === "string" ) && value === undefined ) ) {

				return this.get( owner, key );
			}

			// When the key is not a string, or both a key and value
			// are specified, set or extend (existing objects) with either:
			//
			//   1. An object of properties
			//   2. A key and value
			//
			this.set( owner, key, value );

			// Since the "set" path can have two possible entry points
			// return the expected data based on which path was taken[*]
			return value !== undefined ? value : key;
		},
		remove: function( owner, key ) {
			var i,
				cache = owner[ this.expando ];

			if ( cache === undefined ) {
				return;
			}

			if ( key !== undefined ) {

				// Support array or space separated string of keys
				if ( Array.isArray( key ) ) {

					// If key is an array of keys...
					// We always set camelCase keys, so remove that.
					key = key.map( camelCase );
				} else {
					key = camelCase( key );

					// If a key with the spaces exists, use it.
					// Otherwise, create an array by matching non-whitespace
					key = key in cache ?
						[ key ] :
						( key.match( rnothtmlwhite ) || [] );
				}

				i = key.length;

				while ( i-- ) {
					delete cache[ key[ i ] ];
				}
			}

			// Remove the expando if there's no more data
			if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

				// Support: Chrome <=35 - 45
				// Webkit & Blink performance suffers when deleting properties
				// from DOM nodes, so set to undefined instead
				// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
				if ( owner.nodeType ) {
					owner[ this.expando ] = undefined;
				} else {
					delete owner[ this.expando ];
				}
			}
		},
		hasData: function( owner ) {
			var cache = owner[ this.expando ];
			return cache !== undefined && !jQuery.isEmptyObject( cache );
		}
	};
	var dataPriv = new Data();

	var dataUser = new Data();



	//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /[A-Z]/g;

	function getData( data ) {
		if ( data === "true" ) {
			return true;
		}

		if ( data === "false" ) {
			return false;
		}

		if ( data === "null" ) {
			return null;
		}

		// Only convert to a number if it doesn't change the string
		if ( data === +data + "" ) {
			return +data;
		}

		if ( rbrace.test( data ) ) {
			return JSON.parse( data );
		}

		return data;
	}

	function dataAttr( elem, key, data ) {
		var name;

		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {
			name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
			data = elem.getAttribute( name );

			if ( typeof data === "string" ) {
				try {
					data = getData( data );
				} catch ( e ) {}

				// Make sure we set the data so it isn't changed later
				dataUser.set( elem, key, data );
			} else {
				data = undefined;
			}
		}
		return data;
	}

	jQuery.extend( {
		hasData: function( elem ) {
			return dataUser.hasData( elem ) || dataPriv.hasData( elem );
		},

		data: function( elem, name, data ) {
			return dataUser.access( elem, name, data );
		},

		removeData: function( elem, name ) {
			dataUser.remove( elem, name );
		},

		// TODO: Now that all calls to _data and _removeData have been replaced
		// with direct calls to dataPriv methods, these can be deprecated.
		_data: function( elem, name, data ) {
			return dataPriv.access( elem, name, data );
		},

		_removeData: function( elem, name ) {
			dataPriv.remove( elem, name );
		}
	} );

	jQuery.fn.extend( {
		data: function( key, value ) {
			var i, name, data,
				elem = this[ 0 ],
				attrs = elem && elem.attributes;

			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = dataUser.get( elem );

					if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
						i = attrs.length;
						while ( i-- ) {

							// Support: IE 11 only
							// The attrs elements can be null (#14894)
							if ( attrs[ i ] ) {
								name = attrs[ i ].name;
								if ( name.indexOf( "data-" ) === 0 ) {
									name = camelCase( name.slice( 5 ) );
									dataAttr( elem, name, data[ name ] );
								}
							}
						}
						dataPriv.set( elem, "hasDataAttrs", true );
					}
				}

				return data;
			}

			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each( function() {
					dataUser.set( this, key );
				} );
			}

			return access( this, function( value ) {
				var data;

				// The calling jQuery object (element matches) is not empty
				// (and therefore has an element appears at this[ 0 ]) and the
				// `value` parameter was not undefined. An empty jQuery object
				// will result in `undefined` for elem = this[ 0 ] which will
				// throw an exception if an attempt to read a data cache is made.
				if ( elem && value === undefined ) {

					// Attempt to get data from the cache
					// The key will always be camelCased in Data
					data = dataUser.get( elem, key );
					if ( data !== undefined ) {
						return data;
					}

					// Attempt to "discover" the data in
					// HTML5 custom data-* attrs
					data = dataAttr( elem, key );
					if ( data !== undefined ) {
						return data;
					}

					// We tried really hard, but the data doesn't exist.
					return;
				}

				// Set the data...
				this.each( function() {

					// We always store the camelCased key
					dataUser.set( this, key, value );
				} );
			}, null, value, arguments.length > 1, null, true );
		},

		removeData: function( key ) {
			return this.each( function() {
				dataUser.remove( this, key );
			} );
		}
	} );


	jQuery.extend( {
		queue: function( elem, type, data ) {
			var queue;

			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = dataPriv.get( elem, type );

				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || Array.isArray( data ) ) {
						queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},

		dequeue: function( elem, type ) {
			type = type || "fx";

			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};

			// If the fx queue is dequeued, always remove the progress sentinel
			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}

			if ( fn ) {

				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}

				// Clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}

			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},

		// Not public - generate a queueHooks object, or return the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
				empty: jQuery.Callbacks( "once memory" ).add( function() {
					dataPriv.remove( elem, [ type + "queue", key ] );
				} )
			} );
		}
	} );

	jQuery.fn.extend( {
		queue: function( type, data ) {
			var setter = 2;

			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}

			if ( arguments.length < setter ) {
				return jQuery.queue( this[ 0 ], type );
			}

			return data === undefined ?
				this :
				this.each( function() {
					var queue = jQuery.queue( this, type, data );

					// Ensure a hooks for this queue
					jQuery._queueHooks( this, type );

					if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				} );
		},
		dequeue: function( type ) {
			return this.each( function() {
				jQuery.dequeue( this, type );
			} );
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},

		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};

			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";

			while ( i-- ) {
				tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	} );
	var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

	var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


	var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

	var documentElement = document.documentElement;



		var isAttached = function( elem ) {
				return jQuery.contains( elem.ownerDocument, elem );
			},
			composed = { composed: true };

		// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
		// Check attachment across shadow DOM boundaries when possible (gh-3504)
		// Support: iOS 10.0-10.2 only
		// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
		// leading to errors. We need to check for `getRootNode`.
		if ( documentElement.getRootNode ) {
			isAttached = function( elem ) {
				return jQuery.contains( elem.ownerDocument, elem ) ||
					elem.getRootNode( composed ) === elem.ownerDocument;
			};
		}
	var isHiddenWithinTree = function( elem, el ) {

			// isHiddenWithinTree might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;

			// Inline style trumps all
			return elem.style.display === "none" ||
				elem.style.display === "" &&

				// Otherwise, check computed style
				// Support: Firefox <=43 - 45
				// Disconnected elements can have computed display: none, so first confirm that elem is
				// in the document.
				isAttached( elem ) &&

				jQuery.css( elem, "display" ) === "none";
		};



	function adjustCSS( elem, prop, valueParts, tween ) {
		var adjusted, scale,
			maxIterations = 20,
			currentValue = tween ?
				function() {
					return tween.cur();
				} :
				function() {
					return jQuery.css( elem, prop, "" );
				},
			initial = currentValue(),
			unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

			// Starting value computation is required for potential unit mismatches
			initialInUnit = elem.nodeType &&
				( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
				rcssNum.exec( jQuery.css( elem, prop ) );

		if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

			// Support: Firefox <=54
			// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
			initial = initial / 2;

			// Trust units reported by jQuery.css
			unit = unit || initialInUnit[ 3 ];

			// Iteratively approximate from a nonzero starting point
			initialInUnit = +initial || 1;

			while ( maxIterations-- ) {

				// Evaluate and update our best guess (doubling guesses that zero out).
				// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
				jQuery.style( elem, prop, initialInUnit + unit );
				if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
					maxIterations = 0;
				}
				initialInUnit = initialInUnit / scale;

			}

			initialInUnit = initialInUnit * 2;
			jQuery.style( elem, prop, initialInUnit + unit );

			// Make sure we update the tween properties later on
			valueParts = valueParts || [];
		}

		if ( valueParts ) {
			initialInUnit = +initialInUnit || +initial || 0;

			// Apply relative offset (+=/-=) if specified
			adjusted = valueParts[ 1 ] ?
				initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
				+valueParts[ 2 ];
			if ( tween ) {
				tween.unit = unit;
				tween.start = initialInUnit;
				tween.end = adjusted;
			}
		}
		return adjusted;
	}


	var defaultDisplayMap = {};

	function getDefaultDisplay( elem ) {
		var temp,
			doc = elem.ownerDocument,
			nodeName = elem.nodeName,
			display = defaultDisplayMap[ nodeName ];

		if ( display ) {
			return display;
		}

		temp = doc.body.appendChild( doc.createElement( nodeName ) );
		display = jQuery.css( temp, "display" );

		temp.parentNode.removeChild( temp );

		if ( display === "none" ) {
			display = "block";
		}
		defaultDisplayMap[ nodeName ] = display;

		return display;
	}

	function showHide( elements, show ) {
		var display, elem,
			values = [],
			index = 0,
			length = elements.length;

		// Determine new display value for elements that need to change
		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}

			display = elem.style.display;
			if ( show ) {

				// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
				// check is required in this first loop unless we have a nonempty display value (either
				// inline or about-to-be-restored)
				if ( display === "none" ) {
					values[ index ] = dataPriv.get( elem, "display" ) || null;
					if ( !values[ index ] ) {
						elem.style.display = "";
					}
				}
				if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
					values[ index ] = getDefaultDisplay( elem );
				}
			} else {
				if ( display !== "none" ) {
					values[ index ] = "none";

					// Remember what we're overwriting
					dataPriv.set( elem, "display", display );
				}
			}
		}

		// Set the display of the elements in a second loop to avoid constant reflow
		for ( index = 0; index < length; index++ ) {
			if ( values[ index ] != null ) {
				elements[ index ].style.display = values[ index ];
			}
		}

		return elements;
	}

	jQuery.fn.extend( {
		show: function() {
			return showHide( this, true );
		},
		hide: function() {
			return showHide( this );
		},
		toggle: function( state ) {
			if ( typeof state === "boolean" ) {
				return state ? this.show() : this.hide();
			}

			return this.each( function() {
				if ( isHiddenWithinTree( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			} );
		}
	} );
	var rcheckableType = ( /^(?:checkbox|radio)$/i );

	var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

	var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



	( function() {
		var fragment = document.createDocumentFragment(),
			div = fragment.appendChild( document.createElement( "div" ) ),
			input = document.createElement( "input" );

		// Support: Android 4.0 - 4.3 only
		// Check state lost if the name is set (#11217)
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input.setAttribute( "type", "radio" );
		input.setAttribute( "checked", "checked" );
		input.setAttribute( "name", "t" );

		div.appendChild( input );

		// Support: Android <=4.1 only
		// Older WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

		// Support: IE <=11 only
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

		// Support: IE <=9 only
		// IE <=9 replaces <option> tags with their contents when inserted outside of
		// the select element.
		div.innerHTML = "<option></option>";
		support.option = !!div.lastChild;
	} )();


	// We have to close these tags to support XHTML (#13200)
	var wrapMap = {

		// XHTML parsers do not magically insert elements in the
		// same way that tag soup parsers do. So we cannot shorten
		// this by omitting <tbody> or other required elements.
		thead: [ 1, "<table>", "</table>" ],
		col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

		_default: [ 0, "", "" ]
	};

	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;

	// Support: IE <=9 only
	if ( !support.option ) {
		wrapMap.optgroup = wrapMap.option = [ 1, "<select multiple='multiple'>", "</select>" ];
	}


	function getAll( context, tag ) {

		// Support: IE <=9 - 11 only
		// Use typeof to avoid zero-argument method invocation on host objects (#15151)
		var ret;

		if ( typeof context.getElementsByTagName !== "undefined" ) {
			ret = context.getElementsByTagName( tag || "*" );

		} else if ( typeof context.querySelectorAll !== "undefined" ) {
			ret = context.querySelectorAll( tag || "*" );

		} else {
			ret = [];
		}

		if ( tag === undefined || tag && nodeName( context, tag ) ) {
			return jQuery.merge( [ context ], ret );
		}

		return ret;
	}


	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			dataPriv.set(
				elems[ i ],
				"globalEval",
				!refElements || dataPriv.get( refElements[ i ], "globalEval" )
			);
		}
	}


	var rhtml = /<|&#?\w+;/;

	function buildFragment( elems, context, scripts, selection, ignored ) {
		var elem, tmp, tag, wrap, attached, j,
			fragment = context.createDocumentFragment(),
			nodes = [],
			i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			elem = elems[ i ];

			if ( elem || elem === 0 ) {

				// Add nodes directly
				if ( toType( elem ) === "object" ) {

					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );

				// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}

					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, tmp.childNodes );

					// Remember the top-level container
					tmp = fragment.firstChild;

					// Ensure the created nodes are orphaned (#12392)
					tmp.textContent = "";
				}
			}
		}

		// Remove wrapper from fragment
		fragment.textContent = "";

		i = 0;
		while ( ( elem = nodes[ i++ ] ) ) {

			// Skip elements already in the context collection (trac-4087)
			if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
				if ( ignored ) {
					ignored.push( elem );
				}
				continue;
			}

			attached = isAttached( elem );

			// Append to fragment
			tmp = getAll( fragment.appendChild( elem ), "script" );

			// Preserve script evaluation history
			if ( attached ) {
				setGlobalEval( tmp );
			}

			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( ( elem = tmp[ j++ ] ) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}

		return fragment;
	}


	var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

	function returnTrue() {
		return true;
	}

	function returnFalse() {
		return false;
	}

	// Support: IE <=9 - 11+
	// focus() and blur() are asynchronous, except when they are no-op.
	// So expect focus to be synchronous when the element is already active,
	// and blur to be synchronous when the element is not already active.
	// (focus and blur are always synchronous in other supported browsers,
	// this just defines when we can count on it).
	function expectSync( elem, type ) {
		return ( elem === safeActiveElement() ) === ( type === "focus" );
	}

	// Support: IE <=9 only
	// Accessing document.activeElement can throw unexpectedly
	// https://bugs.jquery.com/ticket/13393
	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}

	function on( elem, types, selector, data, fn, one ) {
		var origFn, type;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {

			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {

				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				on( elem, type, selector, data, types[ type ], one );
			}
			return elem;
		}

		if ( data == null && fn == null ) {

			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {

				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {

				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return elem;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {

				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};

			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return elem.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		} );
	}

	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {

		global: {},

		add: function( elem, types, handler, data, selector ) {

			var handleObjIn, eventHandle, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.get( elem );

			// Only attach events to objects that accept data
			if ( !acceptData( elem ) ) {
				return;
			}

			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}

			// Ensure that invalid selectors throw exceptions at attach time
			// Evaluate against documentElement in case elem is a non-element node (e.g., document)
			if ( selector ) {
				jQuery.find.matchesSelector( documentElement, selector );
			}

			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}

			// Init the element's event structure and main handler, if this is the first
			if ( !( events = elemData.events ) ) {
				events = elemData.events = Object.create( null );
			}
			if ( !( eventHandle = elemData.handle ) ) {
				eventHandle = elemData.handle = function( e ) {

					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
						jQuery.event.dispatch.apply( elem, arguments ) : undefined;
				};
			}

			// Handle multiple events separated by a space
			types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// There *must* be a type, no attaching namespace-only handlers
				if ( !type ) {
					continue;
				}

				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};

				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;

				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};

				// handleObj is passed to all event handlers
				handleObj = jQuery.extend( {
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join( "." )
				}, handleObjIn );

				// Init the event handler queue if we're the first
				if ( !( handlers = events[ type ] ) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;

					// Only use addEventListener if the special events handler returns false
					if ( !special.setup ||
						special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle );
						}
					}
				}

				if ( special.add ) {
					special.add.call( elem, handleObj );

					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}

				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}

				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}

		},

		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {

			var j, origCount, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

			if ( !elemData || !( events = elemData.events ) ) {
				return;
			}

			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}

				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[ 2 ] &&
					new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];

					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector ||
							selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );

						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}

				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown ||
						special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

						jQuery.removeEvent( elem, type, elemData.handle );
					}

					delete events[ type ];
				}
			}

			// Remove data and the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				dataPriv.remove( elem, "handle events" );
			}
		},

		dispatch: function( nativeEvent ) {

			var i, j, ret, matched, handleObj, handlerQueue,
				args = new Array( arguments.length ),

				// Make a writable jQuery.Event from the native event object
				event = jQuery.event.fix( nativeEvent ),

				handlers = (
					dataPriv.get( this, "events" ) || Object.create( null )
				)[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};

			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[ 0 ] = event;

			for ( i = 1; i < arguments.length; i++ ) {
				args[ i ] = arguments[ i ];
			}

			event.delegateTarget = this;

			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}

			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );

			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;

				j = 0;
				while ( ( handleObj = matched.handlers[ j++ ] ) &&
					!event.isImmediatePropagationStopped() ) {

					// If the event is namespaced, then each handler is only invoked if it is
					// specially universal or its namespaces are a superset of the event's.
					if ( !event.rnamespace || handleObj.namespace === false ||
						event.rnamespace.test( handleObj.namespace ) ) {

						event.handleObj = handleObj;
						event.data = handleObj.data;

						ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
							handleObj.handler ).apply( matched.elem, args );

						if ( ret !== undefined ) {
							if ( ( event.result = ret ) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}

			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}

			return event.result;
		},

		handlers: function( event, handlers ) {
			var i, handleObj, sel, matchedHandlers, matchedSelectors,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;

			// Find delegate handlers
			if ( delegateCount &&

				// Support: IE <=9
				// Black-hole SVG <use> instance trees (trac-13180)
				cur.nodeType &&

				// Support: Firefox <=42
				// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
				// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
				// Support: IE 11 only
				// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
				!( event.type === "click" && event.button >= 1 ) ) {

				for ( ; cur !== this; cur = cur.parentNode || this ) {

					// Don't check non-elements (#13208)
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
						matchedHandlers = [];
						matchedSelectors = {};
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];

							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";

							if ( matchedSelectors[ sel ] === undefined ) {
								matchedSelectors[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) > -1 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matchedSelectors[ sel ] ) {
								matchedHandlers.push( handleObj );
							}
						}
						if ( matchedHandlers.length ) {
							handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
						}
					}
				}
			}

			// Add the remaining (directly-bound) handlers
			cur = this;
			if ( delegateCount < handlers.length ) {
				handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
			}

			return handlerQueue;
		},

		addProp: function( name, hook ) {
			Object.defineProperty( jQuery.Event.prototype, name, {
				enumerable: true,
				configurable: true,

				get: isFunction( hook ) ?
					function() {
						if ( this.originalEvent ) {
							return hook( this.originalEvent );
						}
					} :
					function() {
						if ( this.originalEvent ) {
							return this.originalEvent[ name ];
						}
					},

				set: function( value ) {
					Object.defineProperty( this, name, {
						enumerable: true,
						configurable: true,
						writable: true,
						value: value
					} );
				}
			} );
		},

		fix: function( originalEvent ) {
			return originalEvent[ jQuery.expando ] ?
				originalEvent :
				new jQuery.Event( originalEvent );
		},

		special: {
			load: {

				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			click: {

				// Utilize native event to ensure correct state for checkable inputs
				setup: function( data ) {

					// For mutual compressibility with _default, replace `this` access with a local var.
					// `|| data` is dead code meant only to preserve the variable through minification.
					var el = this || data;

					// Claim the first handler
					if ( rcheckableType.test( el.type ) &&
						el.click && nodeName( el, "input" ) ) {

						// dataPriv.set( el, "click", ... )
						leverageNative( el, "click", returnTrue );
					}

					// Return false to allow normal processing in the caller
					return false;
				},
				trigger: function( data ) {

					// For mutual compressibility with _default, replace `this` access with a local var.
					// `|| data` is dead code meant only to preserve the variable through minification.
					var el = this || data;

					// Force setup before triggering a click
					if ( rcheckableType.test( el.type ) &&
						el.click && nodeName( el, "input" ) ) {

						leverageNative( el, "click" );
					}

					// Return non-false to allow normal event-path propagation
					return true;
				},

				// For cross-browser consistency, suppress native .click() on links
				// Also prevent it if we're currently inside a leveraged native-event stack
				_default: function( event ) {
					var target = event.target;
					return rcheckableType.test( target.type ) &&
						target.click && nodeName( target, "input" ) &&
						dataPriv.get( target, "click" ) ||
						nodeName( target, "a" );
				}
			},

			beforeunload: {
				postDispatch: function( event ) {

					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if ( event.result !== undefined && event.originalEvent ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		}
	};

	// Ensure the presence of an event listener that handles manually-triggered
	// synthetic events by interrupting progress until reinvoked in response to
	// *native* events that it fires directly, ensuring that state changes have
	// already occurred before other listeners are invoked.
	function leverageNative( el, type, expectSync ) {

		// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
		if ( !expectSync ) {
			if ( dataPriv.get( el, type ) === undefined ) {
				jQuery.event.add( el, type, returnTrue );
			}
			return;
		}

		// Register the controller as a special universal handler for all event namespaces
		dataPriv.set( el, type, false );
		jQuery.event.add( el, type, {
			namespace: false,
			handler: function( event ) {
				var notAsync, result,
					saved = dataPriv.get( this, type );

				if ( ( event.isTrigger & 1 ) && this[ type ] ) {

					// Interrupt processing of the outer synthetic .trigger()ed event
					// Saved data should be false in such cases, but might be a leftover capture object
					// from an async native handler (gh-4350)
					if ( !saved.length ) {

						// Store arguments for use when handling the inner native event
						// There will always be at least one argument (an event object), so this array
						// will not be confused with a leftover capture object.
						saved = slice.call( arguments );
						dataPriv.set( this, type, saved );

						// Trigger the native event and capture its result
						// Support: IE <=9 - 11+
						// focus() and blur() are asynchronous
						notAsync = expectSync( this, type );
						this[ type ]();
						result = dataPriv.get( this, type );
						if ( saved !== result || notAsync ) {
							dataPriv.set( this, type, false );
						} else {
							result = {};
						}
						if ( saved !== result ) {

							// Cancel the outer synthetic event
							event.stopImmediatePropagation();
							event.preventDefault();

							// Support: Chrome 86+
							// In Chrome, if an element having a focusout handler is blurred by
							// clicking outside of it, it invokes the handler synchronously. If
							// that handler calls `.remove()` on the element, the data is cleared,
							// leaving `result` undefined. We need to guard against this.
							return result && result.value;
						}

					// If this is an inner synthetic event for an event with a bubbling surrogate
					// (focus or blur), assume that the surrogate already propagated from triggering the
					// native event and prevent that from happening again here.
					// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
					// bubbling surrogate propagates *after* the non-bubbling base), but that seems
					// less bad than duplication.
					} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
						event.stopPropagation();
					}

				// If this is a native event triggered above, everything is now in order
				// Fire an inner synthetic event with the original arguments
				} else if ( saved.length ) {

					// ...and capture the result
					dataPriv.set( this, type, {
						value: jQuery.event.trigger(

							// Support: IE <=9 - 11+
							// Extend with the prototype to reset the above stopImmediatePropagation()
							jQuery.extend( saved[ 0 ], jQuery.Event.prototype ),
							saved.slice( 1 ),
							this
						)
					} );

					// Abort handling of the native event
					event.stopImmediatePropagation();
				}
			}
		} );
	}

	jQuery.removeEvent = function( elem, type, handle ) {

		// This "if" is needed for plain objects
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle );
		}
	};

	jQuery.Event = function( src, props ) {

		// Allow instantiation without the 'new' keyword
		if ( !( this instanceof jQuery.Event ) ) {
			return new jQuery.Event( src, props );
		}

		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;

			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented ||
					src.defaultPrevented === undefined &&

					// Support: Android <=2.3 only
					src.returnValue === false ?
				returnTrue :
				returnFalse;

			// Create target properties
			// Support: Safari <=6 - 7 only
			// Target should not be a text node (#504, #13143)
			this.target = ( src.target && src.target.nodeType === 3 ) ?
				src.target.parentNode :
				src.target;

			this.currentTarget = src.currentTarget;
			this.relatedTarget = src.relatedTarget;

		// Event type
		} else {
			this.type = src;
		}

		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}

		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || Date.now();

		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};

	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		constructor: jQuery.Event,
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,
		isSimulated: false,

		preventDefault: function() {
			var e = this.originalEvent;

			this.isDefaultPrevented = returnTrue;

			if ( e && !this.isSimulated ) {
				e.preventDefault();
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;

			this.isPropagationStopped = returnTrue;

			if ( e && !this.isSimulated ) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;

			this.isImmediatePropagationStopped = returnTrue;

			if ( e && !this.isSimulated ) {
				e.stopImmediatePropagation();
			}

			this.stopPropagation();
		}
	};

	// Includes all common event props including KeyEvent and MouseEvent specific props
	jQuery.each( {
		altKey: true,
		bubbles: true,
		cancelable: true,
		changedTouches: true,
		ctrlKey: true,
		detail: true,
		eventPhase: true,
		metaKey: true,
		pageX: true,
		pageY: true,
		shiftKey: true,
		view: true,
		"char": true,
		code: true,
		charCode: true,
		key: true,
		keyCode: true,
		button: true,
		buttons: true,
		clientX: true,
		clientY: true,
		offsetX: true,
		offsetY: true,
		pointerId: true,
		pointerType: true,
		screenX: true,
		screenY: true,
		targetTouches: true,
		toElement: true,
		touches: true,
		which: true
	}, jQuery.event.addProp );

	jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
		jQuery.event.special[ type ] = {

			// Utilize native event if possible so blur/focus sequence is correct
			setup: function() {

				// Claim the first handler
				// dataPriv.set( this, "focus", ... )
				// dataPriv.set( this, "blur", ... )
				leverageNative( this, type, expectSync );

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function() {

				// Force setup before trigger
				leverageNative( this, type );

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// Suppress native focus or blur as it's already being fired
			// in leverageNative.
			_default: function() {
				return true;
			},

			delegateType: delegateType
		};
	} );

	// Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each( {
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,

			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;

				// For mouseenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	} );

	jQuery.fn.extend( {

		on: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn );
		},
		one: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {

				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ?
						handleObj.origType + "." + handleObj.namespace :
						handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {

				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {

				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each( function() {
				jQuery.event.remove( this, types, fn, selector );
			} );
		}
	} );


	var

		// Support: IE <=10 - 11, Edge 12 - 13 only
		// In IE/Edge using regex groups here causes severe slowdowns.
		// See https://connect.microsoft.com/IE/feedback/details/1736512/
		rnoInnerhtml = /<script|<style|<link/i,

		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

	// Prefer a tbody over its parent table for containing new rows
	function manipulationTarget( elem, content ) {
		if ( nodeName( elem, "table" ) &&
			nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

			return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
		}

		return elem;
	}

	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
			elem.type = elem.type.slice( 5 );
		} else {
			elem.removeAttribute( "type" );
		}

		return elem;
	}

	function cloneCopyEvent( src, dest ) {
		var i, l, type, pdataOld, udataOld, udataCur, events;

		if ( dest.nodeType !== 1 ) {
			return;
		}

		// 1. Copy private data: events, handlers, etc.
		if ( dataPriv.hasData( src ) ) {
			pdataOld = dataPriv.get( src );
			events = pdataOld.events;

			if ( events ) {
				dataPriv.remove( dest, "handle events" );

				for ( type in events ) {
					for ( i = 0, l = events[ type ].length; i < l; i++ ) {
						jQuery.event.add( dest, type, events[ type ][ i ] );
					}
				}
			}
		}

		// 2. Copy user data
		if ( dataUser.hasData( src ) ) {
			udataOld = dataUser.access( src );
			udataCur = jQuery.extend( {}, udataOld );

			dataUser.set( dest, udataCur );
		}
	}

	// Fix IE bugs, see support tests
	function fixInput( src, dest ) {
		var nodeName = dest.nodeName.toLowerCase();

		// Fails to persist the checked state of a cloned checkbox or radio button.
		if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
			dest.checked = src.checked;

		// Fails to return the selected option to the default selected state when cloning options
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}

	function domManip( collection, args, callback, ignored ) {

		// Flatten any nested arrays
		args = flat( args );

		var fragment, first, scripts, hasScripts, node, doc,
			i = 0,
			l = collection.length,
			iNoClone = l - 1,
			value = args[ 0 ],
			valueIsFunction = isFunction( value );

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( valueIsFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return collection.each( function( index ) {
				var self = collection.eq( index );
				if ( valueIsFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				domManip( self, args, callback, ignored );
			} );
		}

		if ( l ) {
			fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
			first = fragment.firstChild;

			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}

			// Require either new content or an interest in ignored elements to invoke the callback
			if ( first || ignored ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;

				// Use the original fragment for the last item
				// instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;

					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );

						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {

							// Support: Android <=4.0 only, PhantomJS 1 only
							// push.apply(_, arraylike) throws on ancient WebKit
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}

					callback.call( collection[ i ], node, i );
				}

				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;

					// Reenable scripts
					jQuery.map( scripts, restoreScript );

					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!dataPriv.access( node, "globalEval" ) &&
							jQuery.contains( doc, node ) ) {

							if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl && !node.noModule ) {
									jQuery._evalUrl( node.src, {
										nonce: node.nonce || node.getAttribute( "nonce" )
									}, doc );
								}
							} else {
								DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
							}
						}
					}
				}
			}
		}

		return collection;
	}

	function remove( elem, selector, keepData ) {
		var node,
			nodes = selector ? jQuery.filter( selector, elem ) : elem,
			i = 0;

		for ( ; ( node = nodes[ i ] ) != null; i++ ) {
			if ( !keepData && node.nodeType === 1 ) {
				jQuery.cleanData( getAll( node ) );
			}

			if ( node.parentNode ) {
				if ( keepData && isAttached( node ) ) {
					setGlobalEval( getAll( node, "script" ) );
				}
				node.parentNode.removeChild( node );
			}
		}

		return elem;
	}

	jQuery.extend( {
		htmlPrefilter: function( html ) {
			return html;
		},

		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var i, l, srcElements, destElements,
				clone = elem.cloneNode( true ),
				inPage = isAttached( elem );

			// Fix IE cloning issues
			if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
					!jQuery.isXMLDoc( elem ) ) {

				// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					fixInput( srcElements[ i ], destElements[ i ] );
				}
			}

			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );

					for ( i = 0, l = srcElements.length; i < l; i++ ) {
						cloneCopyEvent( srcElements[ i ], destElements[ i ] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}

			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}

			// Return the cloned set
			return clone;
		},

		cleanData: function( elems ) {
			var data, elem, type,
				special = jQuery.event.special,
				i = 0;

			for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
				if ( acceptData( elem ) ) {
					if ( ( data = elem[ dataPriv.expando ] ) ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );

								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}

						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataPriv.expando ] = undefined;
					}
					if ( elem[ dataUser.expando ] ) {

						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataUser.expando ] = undefined;
					}
				}
			}
		}
	} );

	jQuery.fn.extend( {
		detach: function( selector ) {
			return remove( this, selector, true );
		},

		remove: function( selector ) {
			return remove( this, selector );
		},

		text: function( value ) {
			return access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().each( function() {
						if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
							this.textContent = value;
						}
					} );
			}, null, value, arguments.length );
		},

		append: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			} );
		},

		prepend: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			} );
		},

		before: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			} );
		},

		after: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			} );
		},

		empty: function() {
			var elem,
				i = 0;

			for ( ; ( elem = this[ i ] ) != null; i++ ) {
				if ( elem.nodeType === 1 ) {

					// Prevent memory leaks
					jQuery.cleanData( getAll( elem, false ) );

					// Remove any remaining nodes
					elem.textContent = "";
				}
			}

			return this;
		},

		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

			return this.map( function() {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			} );
		},

		html: function( value ) {
			return access( this, function( value ) {
				var elem = this[ 0 ] || {},
					i = 0,
					l = this.length;

				if ( value === undefined && elem.nodeType === 1 ) {
					return elem.innerHTML;
				}

				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

					value = jQuery.htmlPrefilter( value );

					try {
						for ( ; i < l; i++ ) {
							elem = this[ i ] || {};

							// Remove element nodes and prevent memory leaks
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}

						elem = 0;

					// If using innerHTML throws an exception, use the fallback method
					} catch ( e ) {}
				}

				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},

		replaceWith: function() {
			var ignored = [];

			// Make the changes, replacing each non-ignored context element with the new content
			return domManip( this, arguments, function( elem ) {
				var parent = this.parentNode;

				if ( jQuery.inArray( this, ignored ) < 0 ) {
					jQuery.cleanData( getAll( this ) );
					if ( parent ) {
						parent.replaceChild( elem, this );
					}
				}

			// Force callback invocation
			}, ignored );
		}
	} );

	jQuery.each( {
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1,
				i = 0;

			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone( true );
				jQuery( insert[ i ] )[ original ]( elems );

				// Support: Android <=4.0 only, PhantomJS 1 only
				// .get() because push.apply(_, arraylike) throws on ancient WebKit
				push.apply( ret, elems.get() );
			}

			return this.pushStack( ret );
		};
	} );
	var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

	var getStyles = function( elem ) {

			// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			var view = elem.ownerDocument.defaultView;

			if ( !view || !view.opener ) {
				view = window;
			}

			return view.getComputedStyle( elem );
		};

	var swap = function( elem, options, callback ) {
		var ret, name,
			old = {};

		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}

		ret = callback.call( elem );

		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}

		return ret;
	};


	var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



	( function() {

		// Executing both pixelPosition & boxSizingReliable tests require only one layout
		// so they're executed at the same time to save the second computation.
		function computeStyleTests() {

			// This is a singleton, we need to execute it only once
			if ( !div ) {
				return;
			}

			container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
				"margin-top:1px;padding:0;border:0";
			div.style.cssText =
				"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
				"margin:auto;border:1px;padding:1px;" +
				"width:60%;top:1%";
			documentElement.appendChild( container ).appendChild( div );

			var divStyle = window.getComputedStyle( div );
			pixelPositionVal = divStyle.top !== "1%";

			// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
			reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

			// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
			// Some styles come back with percentage values, even though they shouldn't
			div.style.right = "60%";
			pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

			// Support: IE 9 - 11 only
			// Detect misreporting of content dimensions for box-sizing:border-box elements
			boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

			// Support: IE 9 only
			// Detect overflow:scroll screwiness (gh-3699)
			// Support: Chrome <=64
			// Don't get tricked when zoom affects offsetWidth (gh-4029)
			div.style.position = "absolute";
			scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

			documentElement.removeChild( container );

			// Nullify the div so it wouldn't be stored in the memory and
			// it will also be a sign that checks already performed
			div = null;
		}

		function roundPixelMeasures( measure ) {
			return Math.round( parseFloat( measure ) );
		}

		var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
			reliableTrDimensionsVal, reliableMarginLeftVal,
			container = document.createElement( "div" ),
			div = document.createElement( "div" );

		// Finish early in limited (non-browser) environments
		if ( !div.style ) {
			return;
		}

		// Support: IE <=9 - 11 only
		// Style of cloned element affects source element cloned (#8908)
		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";

		jQuery.extend( support, {
			boxSizingReliable: function() {
				computeStyleTests();
				return boxSizingReliableVal;
			},
			pixelBoxStyles: function() {
				computeStyleTests();
				return pixelBoxStylesVal;
			},
			pixelPosition: function() {
				computeStyleTests();
				return pixelPositionVal;
			},
			reliableMarginLeft: function() {
				computeStyleTests();
				return reliableMarginLeftVal;
			},
			scrollboxSize: function() {
				computeStyleTests();
				return scrollboxSizeVal;
			},

			// Support: IE 9 - 11+, Edge 15 - 18+
			// IE/Edge misreport `getComputedStyle` of table rows with width/height
			// set in CSS while `offset*` properties report correct values.
			// Behavior in IE 9 is more subtle than in newer versions & it passes
			// some versions of this test; make sure not to make it pass there!
			//
			// Support: Firefox 70+
			// Only Firefox includes border widths
			// in computed dimensions. (gh-4529)
			reliableTrDimensions: function() {
				var table, tr, trChild, trStyle;
				if ( reliableTrDimensionsVal == null ) {
					table = document.createElement( "table" );
					tr = document.createElement( "tr" );
					trChild = document.createElement( "div" );

					table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
					tr.style.cssText = "border:1px solid";

					// Support: Chrome 86+
					// Height set through cssText does not get applied.
					// Computed height then comes back as 0.
					tr.style.height = "1px";
					trChild.style.height = "9px";

					// Support: Android 8 Chrome 86+
					// In our bodyBackground.html iframe,
					// display for all div elements is set to "inline",
					// which causes a problem only in Android 8 Chrome 86.
					// Ensuring the div is display: block
					// gets around this issue.
					trChild.style.display = "block";

					documentElement
						.appendChild( table )
						.appendChild( tr )
						.appendChild( trChild );

					trStyle = window.getComputedStyle( tr );
					reliableTrDimensionsVal = ( parseInt( trStyle.height, 10 ) +
						parseInt( trStyle.borderTopWidth, 10 ) +
						parseInt( trStyle.borderBottomWidth, 10 ) ) === tr.offsetHeight;

					documentElement.removeChild( table );
				}
				return reliableTrDimensionsVal;
			}
		} );
	} )();


	function curCSS( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,

			// Support: Firefox 51+
			// Retrieving style before computed somehow
			// fixes an issue with getting wrong values
			// on detached elements
			style = elem.style;

		computed = computed || getStyles( elem );

		// getPropertyValue is needed for:
		//   .css('filter') (IE 9 only, #12537)
		//   .css('--customProperty) (#3144)
		if ( computed ) {
			ret = computed.getPropertyValue( name ) || computed[ name ];

			if ( ret === "" && !isAttached( elem ) ) {
				ret = jQuery.style( elem, name );
			}

			// A tribute to the "awesome hack by Dean Edwards"
			// Android Browser returns percentage for some values,
			// but width seems to be reliably pixels.
			// This is against the CSSOM draft spec:
			// https://drafts.csswg.org/cssom/#resolved-values
			if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		return ret !== undefined ?

			// Support: IE <=9 - 11 only
			// IE returns zIndex value as an integer.
			ret + "" :
			ret;
	}


	function addGetHookIf( conditionFn, hookFn ) {

		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function() {
				if ( conditionFn() ) {

					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}

				// Hook needed; redefine it so that the support test is not executed again.
				return ( this.get = hookFn ).apply( this, arguments );
			}
		};
	}


	var cssPrefixes = [ "Webkit", "Moz", "ms" ],
		emptyStyle = document.createElement( "div" ).style,
		vendorProps = {};

	// Return a vendor-prefixed property or undefined
	function vendorPropName( name ) {

		// Check for vendor prefixed names
		var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
			i = cssPrefixes.length;

		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in emptyStyle ) {
				return name;
			}
		}
	}

	// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
	function finalPropName( name ) {
		var final = jQuery.cssProps[ name ] || vendorProps[ name ];

		if ( final ) {
			return final;
		}
		if ( name in emptyStyle ) {
			return name;
		}
		return vendorProps[ name ] = vendorPropName( name ) || name;
	}


	var

		// Swappable if display is none or starts with table
		// except "table", "table-cell", or "table-caption"
		// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,
		rcustomProp = /^--/,
		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		};

	function setPositiveNumber( _elem, value, subtract ) {

		// Any relative (+/-) values have already been
		// normalized at this point
		var matches = rcssNum.exec( value );
		return matches ?

			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
			value;
	}

	function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
		var i = dimension === "width" ? 1 : 0,
			extra = 0,
			delta = 0;

		// Adjustment may not be necessary
		if ( box === ( isBorderBox ? "border" : "content" ) ) {
			return 0;
		}

		for ( ; i < 4; i += 2 ) {

			// Both box models exclude margin
			if ( box === "margin" ) {
				delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
			}

			// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
			if ( !isBorderBox ) {

				// Add padding
				delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

				// For "border" or "margin", add border
				if ( box !== "padding" ) {
					delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

				// But still keep track of it otherwise
				} else {
					extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}

			// If we get here with a border-box (content + padding + border), we're seeking "content" or
			// "padding" or "margin"
			} else {

				// For "content", subtract padding
				if ( box === "content" ) {
					delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}

				// For "content" or "padding", subtract border
				if ( box !== "margin" ) {
					delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}

		// Account for positive content-box scroll gutter when requested by providing computedVal
		if ( !isBorderBox && computedVal >= 0 ) {

			// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
			// Assuming integer scroll gutter, subtract the rest and round down
			delta += Math.max( 0, Math.ceil(
				elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
				computedVal -
				delta -
				extra -
				0.5

			// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
			// Use an explicit zero to avoid NaN (gh-3964)
			) ) || 0;
		}

		return delta;
	}

	function getWidthOrHeight( elem, dimension, extra ) {

		// Start with computed style
		var styles = getStyles( elem ),

			// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
			// Fake content-box until we know it's needed to know the true value.
			boxSizingNeeded = !support.boxSizingReliable() || extra,
			isBorderBox = boxSizingNeeded &&
				jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
			valueIsBorderBox = isBorderBox,

			val = curCSS( elem, dimension, styles ),
			offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

		// Support: Firefox <=54
		// Return a confounding non-pixel value or feign ignorance, as appropriate.
		if ( rnumnonpx.test( val ) ) {
			if ( !extra ) {
				return val;
			}
			val = "auto";
		}


		// Support: IE 9 - 11 only
		// Use offsetWidth/offsetHeight for when box sizing is unreliable.
		// In those cases, the computed value can be trusted to be border-box.
		if ( ( !support.boxSizingReliable() && isBorderBox ||

			// Support: IE 10 - 11+, Edge 15 - 18+
			// IE/Edge misreport `getComputedStyle` of table rows with width/height
			// set in CSS while `offset*` properties report correct values.
			// Interestingly, in some cases IE 9 doesn't suffer from this issue.
			!support.reliableTrDimensions() && nodeName( elem, "tr" ) ||

			// Fall back to offsetWidth/offsetHeight when value is "auto"
			// This happens for inline elements with no explicit setting (gh-3571)
			val === "auto" ||

			// Support: Android <=4.1 - 4.3 only
			// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
			!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&

			// Make sure the element is visible & connected
			elem.getClientRects().length ) {

			isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

			// Where available, offsetWidth/offsetHeight approximate border box dimensions.
			// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
			// retrieved value as a content box dimension.
			valueIsBorderBox = offsetProp in elem;
			if ( valueIsBorderBox ) {
				val = elem[ offsetProp ];
			}
		}

		// Normalize "" and auto
		val = parseFloat( val ) || 0;

		// Adjust for the element's box model
		return ( val +
			boxModelAdjustment(
				elem,
				dimension,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles,

				// Provide the current computed size to request scroll gutter calculation (gh-3589)
				val
			)
		) + "px";
	}

	jQuery.extend( {

		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function( elem, computed ) {
					if ( computed ) {

						// We should always get a number back from opacity
						var ret = curCSS( elem, "opacity" );
						return ret === "" ? "1" : ret;
					}
				}
			}
		},

		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"animationIterationCount": true,
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"gridArea": true,
			"gridColumn": true,
			"gridColumnEnd": true,
			"gridColumnStart": true,
			"gridRow": true,
			"gridRowEnd": true,
			"gridRowStart": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},

		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {},

		// Get and set the style property on a DOM Node
		style: function( elem, name, value, extra ) {

			// Don't set styles on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}

			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = camelCase( name ),
				isCustomProp = rcustomProp.test( name ),
				style = elem.style;

			// Make sure that we're working with the right name. We don't
			// want to query the value if it is a CSS custom property
			// since they are user-defined.
			if ( !isCustomProp ) {
				name = finalPropName( origName );
			}

			// Gets hook for the prefixed version, then unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// Check if we're setting a value
			if ( value !== undefined ) {
				type = typeof value;

				// Convert "+=" or "-=" to relative numbers (#7345)
				if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
					value = adjustCSS( elem, name, ret );

					// Fixes bug #9237
					type = "number";
				}

				// Make sure that null and NaN values aren't set (#7116)
				if ( value == null || value !== value ) {
					return;
				}

				// If a number was passed in, add the unit (except for certain CSS properties)
				// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
				// "px" to a few hardcoded values.
				if ( type === "number" && !isCustomProp ) {
					value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
				}

				// background-* props affect original clone's values
				if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
					style[ name ] = "inherit";
				}

				// If a hook was provided, use that value, otherwise just set the specified value
				if ( !hooks || !( "set" in hooks ) ||
					( value = hooks.set( elem, value, extra ) ) !== undefined ) {

					if ( isCustomProp ) {
						style.setProperty( name, value );
					} else {
						style[ name ] = value;
					}
				}

			} else {

				// If a hook was provided get the non-computed value from there
				if ( hooks && "get" in hooks &&
					( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

					return ret;
				}

				// Otherwise just get the value from the style object
				return style[ name ];
			}
		},

		css: function( elem, name, extra, styles ) {
			var val, num, hooks,
				origName = camelCase( name ),
				isCustomProp = rcustomProp.test( name );

			// Make sure that we're working with the right name. We don't
			// want to modify the value if it is a CSS custom property
			// since they are user-defined.
			if ( !isCustomProp ) {
				name = finalPropName( origName );
			}

			// Try prefixed name followed by the unprefixed name
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// If a hook was provided get the computed value from there
			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}

			// Otherwise, if a way to get the computed value exists, use that
			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}

			// Convert "normal" to computed value
			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}

			// Make numeric if forced or a qualifier was provided and val looks numeric
			if ( extra === "" || extra ) {
				num = parseFloat( val );
				return extra === true || isFinite( num ) ? num || 0 : val;
			}

			return val;
		}
	} );

	jQuery.each( [ "height", "width" ], function( _i, dimension ) {
		jQuery.cssHooks[ dimension ] = {
			get: function( elem, computed, extra ) {
				if ( computed ) {

					// Certain elements can have dimension info if we invisibly show them
					// but it must have a current display style that would benefit
					return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

						// Support: Safari 8+
						// Table columns in Safari have non-zero offsetWidth & zero
						// getBoundingClientRect().width unless display is changed.
						// Support: IE <=11 only
						// Running getBoundingClientRect on a disconnected node
						// in IE throws an error.
						( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
				}
			},

			set: function( elem, value, extra ) {
				var matches,
					styles = getStyles( elem ),

					// Only read styles.position if the test has a chance to fail
					// to avoid forcing a reflow.
					scrollboxSizeBuggy = !support.scrollboxSize() &&
						styles.position === "absolute",

					// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
					boxSizingNeeded = scrollboxSizeBuggy || extra,
					isBorderBox = boxSizingNeeded &&
						jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					subtract = extra ?
						boxModelAdjustment(
							elem,
							dimension,
							extra,
							isBorderBox,
							styles
						) :
						0;

				// Account for unreliable border-box dimensions by comparing offset* to computed and
				// faking a content-box to get border and padding (gh-3699)
				if ( isBorderBox && scrollboxSizeBuggy ) {
					subtract -= Math.ceil(
						elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
						parseFloat( styles[ dimension ] ) -
						boxModelAdjustment( elem, dimension, "border", false, styles ) -
						0.5
					);
				}

				// Convert to pixels if value adjustment is needed
				if ( subtract && ( matches = rcssNum.exec( value ) ) &&
					( matches[ 3 ] || "px" ) !== "px" ) {

					elem.style[ dimension ] = value;
					value = jQuery.css( elem, dimension );
				}

				return setPositiveNumber( elem, value, subtract );
			}
		};
	} );

	jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
		function( elem, computed ) {
			if ( computed ) {
				return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
					elem.getBoundingClientRect().left -
						swap( elem, { marginLeft: 0 }, function() {
							return elem.getBoundingClientRect().left;
						} )
				) + "px";
			}
		}
	);

	// These hooks are used by animate to expand properties
	jQuery.each( {
		margin: "",
		padding: "",
		border: "Width"
	}, function( prefix, suffix ) {
		jQuery.cssHooks[ prefix + suffix ] = {
			expand: function( value ) {
				var i = 0,
					expanded = {},

					// Assumes a single number if not a string
					parts = typeof value === "string" ? value.split( " " ) : [ value ];

				for ( ; i < 4; i++ ) {
					expanded[ prefix + cssExpand[ i ] + suffix ] =
						parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
				}

				return expanded;
			}
		};

		if ( prefix !== "margin" ) {
			jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
		}
	} );

	jQuery.fn.extend( {
		css: function( name, value ) {
			return access( this, function( elem, name, value ) {
				var styles, len,
					map = {},
					i = 0;

				if ( Array.isArray( name ) ) {
					styles = getStyles( elem );
					len = name.length;

					for ( ; i < len; i++ ) {
						map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
					}

					return map;
				}

				return value !== undefined ?
					jQuery.style( elem, name, value ) :
					jQuery.css( elem, name );
			}, name, value, arguments.length > 1 );
		}
	} );


	function Tween( elem, options, prop, end, easing ) {
		return new Tween.prototype.init( elem, options, prop, end, easing );
	}
	jQuery.Tween = Tween;

	Tween.prototype = {
		constructor: Tween,
		init: function( elem, options, prop, end, easing, unit ) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || jQuery.easing._default;
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
		},
		cur: function() {
			var hooks = Tween.propHooks[ this.prop ];

			return hooks && hooks.get ?
				hooks.get( this ) :
				Tween.propHooks._default.get( this );
		},
		run: function( percent ) {
			var eased,
				hooks = Tween.propHooks[ this.prop ];

			if ( this.options.duration ) {
				this.pos = eased = jQuery.easing[ this.easing ](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = ( this.end - this.start ) * eased + this.start;

			if ( this.options.step ) {
				this.options.step.call( this.elem, this.now, this );
			}

			if ( hooks && hooks.set ) {
				hooks.set( this );
			} else {
				Tween.propHooks._default.set( this );
			}
			return this;
		}
	};

	Tween.prototype.init.prototype = Tween.prototype;

	Tween.propHooks = {
		_default: {
			get: function( tween ) {
				var result;

				// Use a property on the element directly when it is not a DOM element,
				// or when there is no matching style property that exists.
				if ( tween.elem.nodeType !== 1 ||
					tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
					return tween.elem[ tween.prop ];
				}

				// Passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails.
				// Simple values such as "10px" are parsed to Float;
				// complex values such as "rotate(1rad)" are returned as-is.
				result = jQuery.css( tween.elem, tween.prop, "" );

				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {

				// Use step hook for back compat.
				// Use cssHook if its there.
				// Use .style if available and use plain properties where available.
				if ( jQuery.fx.step[ tween.prop ] ) {
					jQuery.fx.step[ tween.prop ]( tween );
				} else if ( tween.elem.nodeType === 1 && (
					jQuery.cssHooks[ tween.prop ] ||
						tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
					jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
				} else {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		}
	};

	// Support: IE <=9 only
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function( tween ) {
			if ( tween.elem.nodeType && tween.elem.parentNode ) {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	};

	jQuery.easing = {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return 0.5 - Math.cos( p * Math.PI ) / 2;
		},
		_default: "swing"
	};

	jQuery.fx = Tween.prototype.init;

	// Back compat <1.8 extension point
	jQuery.fx.step = {};




	var
		fxNow, inProgress,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rrun = /queueHooks$/;

	function schedule() {
		if ( inProgress ) {
			if ( document.hidden === false && window.requestAnimationFrame ) {
				window.requestAnimationFrame( schedule );
			} else {
				window.setTimeout( schedule, jQuery.fx.interval );
			}

			jQuery.fx.tick();
		}
	}

	// Animations created synchronously will run synchronously
	function createFxNow() {
		window.setTimeout( function() {
			fxNow = undefined;
		} );
		return ( fxNow = Date.now() );
	}

	// Generate parameters to create a standard animation
	function genFx( type, includeWidth ) {
		var which,
			i = 0,
			attrs = { height: type };

		// If we include width, step value is 1 to do all cssExpand values,
		// otherwise step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for ( ; i < 4; i += 2 - includeWidth ) {
			which = cssExpand[ i ];
			attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
		}

		if ( includeWidth ) {
			attrs.opacity = attrs.width = type;
		}

		return attrs;
	}

	function createTween( value, prop, animation ) {
		var tween,
			collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

				// We're done with this property
				return tween;
			}
		}
	}

	function defaultPrefilter( elem, props, opts ) {
		var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
			isBox = "width" in props || "height" in props,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHiddenWithinTree( elem ),
			dataShow = dataPriv.get( elem, "fxshow" );

		// Queue-skipping animations hijack the fx hooks
		if ( !opts.queue ) {
			hooks = jQuery._queueHooks( elem, "fx" );
			if ( hooks.unqueued == null ) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if ( !hooks.unqueued ) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;

			anim.always( function() {

				// Ensure the complete handler is called before this completes
				anim.always( function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				} );
			} );
		}

		// Detect show/hide animations
		for ( prop in props ) {
			value = props[ prop ];
			if ( rfxtypes.test( value ) ) {
				delete props[ prop ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {

					// Pretend to be hidden if this is a "show" and
					// there is still data from a stopped show/hide
					if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
						hidden = true;

					// Ignore all other no-op show/hide data
					} else {
						continue;
					}
				}
				orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
			}
		}

		// Bail out if this is a no-op like .hide().hide()
		propTween = !jQuery.isEmptyObject( props );
		if ( !propTween && jQuery.isEmptyObject( orig ) ) {
			return;
		}

		// Restrict "overflow" and "display" styles during box animations
		if ( isBox && elem.nodeType === 1 ) {

			// Support: IE <=9 - 11, Edge 12 - 15
			// Record all 3 overflow attributes because IE does not infer the shorthand
			// from identically-valued overflowX and overflowY and Edge just mirrors
			// the overflowX value there.
			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

			// Identify a display type, preferring old show/hide data over the CSS cascade
			restoreDisplay = dataShow && dataShow.display;
			if ( restoreDisplay == null ) {
				restoreDisplay = dataPriv.get( elem, "display" );
			}
			display = jQuery.css( elem, "display" );
			if ( display === "none" ) {
				if ( restoreDisplay ) {
					display = restoreDisplay;
				} else {

					// Get nonempty value(s) by temporarily forcing visibility
					showHide( [ elem ], true );
					restoreDisplay = elem.style.display || restoreDisplay;
					display = jQuery.css( elem, "display" );
					showHide( [ elem ] );
				}
			}

			// Animate inline elements as inline-block
			if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
				if ( jQuery.css( elem, "float" ) === "none" ) {

					// Restore the original display value at the end of pure show/hide animations
					if ( !propTween ) {
						anim.done( function() {
							style.display = restoreDisplay;
						} );
						if ( restoreDisplay == null ) {
							display = style.display;
							restoreDisplay = display === "none" ? "" : display;
						}
					}
					style.display = "inline-block";
				}
			}
		}

		if ( opts.overflow ) {
			style.overflow = "hidden";
			anim.always( function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			} );
		}

		// Implement show/hide animations
		propTween = false;
		for ( prop in orig ) {

			// General show/hide setup for this element animation
			if ( !propTween ) {
				if ( dataShow ) {
					if ( "hidden" in dataShow ) {
						hidden = dataShow.hidden;
					}
				} else {
					dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
				}

				// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
				if ( toggle ) {
					dataShow.hidden = !hidden;
				}

				// Show elements before animating them
				if ( hidden ) {
					showHide( [ elem ], true );
				}

				/* eslint-disable no-loop-func */

				anim.done( function() {

					/* eslint-enable no-loop-func */

					// The final step of a "hide" animation is actually hiding the element
					if ( !hidden ) {
						showHide( [ elem ] );
					}
					dataPriv.remove( elem, "fxshow" );
					for ( prop in orig ) {
						jQuery.style( elem, prop, orig[ prop ] );
					}
				} );
			}

			// Per-property setup
			propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = propTween.start;
				if ( hidden ) {
					propTween.end = propTween.start;
					propTween.start = 0;
				}
			}
		}
	}

	function propFilter( props, specialEasing ) {
		var index, name, easing, value, hooks;

		// camelCase, specialEasing and expand cssHook pass
		for ( index in props ) {
			name = camelCase( index );
			easing = specialEasing[ name ];
			value = props[ index ];
			if ( Array.isArray( value ) ) {
				easing = value[ 1 ];
				value = props[ index ] = value[ 0 ];
			}

			if ( index !== name ) {
				props[ name ] = value;
				delete props[ index ];
			}

			hooks = jQuery.cssHooks[ name ];
			if ( hooks && "expand" in hooks ) {
				value = hooks.expand( value );
				delete props[ name ];

				// Not quite $.extend, this won't overwrite existing keys.
				// Reusing 'index' because we have the correct "name"
				for ( index in value ) {
					if ( !( index in props ) ) {
						props[ index ] = value[ index ];
						specialEasing[ index ] = easing;
					}
				}
			} else {
				specialEasing[ name ] = easing;
			}
		}
	}

	function Animation( elem, properties, options ) {
		var result,
			stopped,
			index = 0,
			length = Animation.prefilters.length,
			deferred = jQuery.Deferred().always( function() {

				// Don't match elem in the :animated selector
				delete tick.elem;
			} ),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

					// Support: Android 2.3 only
					// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;

				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( percent );
				}

				deferred.notifyWith( elem, [ animation, percent, remaining ] );

				// If there's more to do, yield
				if ( percent < 1 && length ) {
					return remaining;
				}

				// If this was an empty animation, synthesize a final progress notification
				if ( !length ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
				}

				// Resolve the animation and report its conclusion
				deferred.resolveWith( elem, [ animation ] );
				return false;
			},
			animation = deferred.promise( {
				elem: elem,
				props: jQuery.extend( {}, properties ),
				opts: jQuery.extend( true, {
					specialEasing: {},
					easing: jQuery.easing._default
				}, options ),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function( prop, end ) {
					var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
					animation.tweens.push( tween );
					return tween;
				},
				stop: function( gotoEnd ) {
					var index = 0,

						// If we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length; index++ ) {
						animation.tweens[ index ].run( 1 );
					}

					// Resolve when we played the last frame; otherwise, reject
					if ( gotoEnd ) {
						deferred.notifyWith( elem, [ animation, 1, 0 ] );
						deferred.resolveWith( elem, [ animation, gotoEnd ] );
					} else {
						deferred.rejectWith( elem, [ animation, gotoEnd ] );
					}
					return this;
				}
			} ),
			props = animation.props;

		propFilter( props, animation.opts.specialEasing );

		for ( ; index < length; index++ ) {
			result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
			if ( result ) {
				if ( isFunction( result.stop ) ) {
					jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
						result.stop.bind( result );
				}
				return result;
			}
		}

		jQuery.map( props, createTween, animation );

		if ( isFunction( animation.opts.start ) ) {
			animation.opts.start.call( elem, animation );
		}

		// Attach callbacks from options
		animation
			.progress( animation.opts.progress )
			.done( animation.opts.done, animation.opts.complete )
			.fail( animation.opts.fail )
			.always( animation.opts.always );

		jQuery.fx.timer(
			jQuery.extend( tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			} )
		);

		return animation;
	}

	jQuery.Animation = jQuery.extend( Animation, {

		tweeners: {
			"*": [ function( prop, value ) {
				var tween = this.createTween( prop, value );
				adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
				return tween;
			} ]
		},

		tweener: function( props, callback ) {
			if ( isFunction( props ) ) {
				callback = props;
				props = [ "*" ];
			} else {
				props = props.match( rnothtmlwhite );
			}

			var prop,
				index = 0,
				length = props.length;

			for ( ; index < length; index++ ) {
				prop = props[ index ];
				Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
				Animation.tweeners[ prop ].unshift( callback );
			}
		},

		prefilters: [ defaultPrefilter ],

		prefilter: function( callback, prepend ) {
			if ( prepend ) {
				Animation.prefilters.unshift( callback );
			} else {
				Animation.prefilters.push( callback );
			}
		}
	} );

	jQuery.speed = function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !isFunction( easing ) && easing
		};

		// Go to the end state if fx are off
		if ( jQuery.fx.off ) {
			opt.duration = 0;

		} else {
			if ( typeof opt.duration !== "number" ) {
				if ( opt.duration in jQuery.fx.speeds ) {
					opt.duration = jQuery.fx.speeds[ opt.duration ];

				} else {
					opt.duration = jQuery.fx.speeds._default;
				}
			}
		}

		// Normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}

		// Queueing
		opt.old = opt.complete;

		opt.complete = function() {
			if ( isFunction( opt.old ) ) {
				opt.old.call( this );
			}

			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			}
		};

		return opt;
	};

	jQuery.fn.extend( {
		fadeTo: function( speed, to, easing, callback ) {

			// Show any hidden elements after setting opacity to 0
			return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

				// Animate to the value specified
				.end().animate( { opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {

					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation( this, jQuery.extend( {}, prop ), optall );

					// Empty animations, or finishing resolves immediately
					if ( empty || dataPriv.get( this, "finish" ) ) {
						anim.stop( true );
					}
				};

			doAnimation.finish = doAnimation;

			return empty || optall.queue === false ?
				this.each( doAnimation ) :
				this.queue( optall.queue, doAnimation );
		},
		stop: function( type, clearQueue, gotoEnd ) {
			var stopQueue = function( hooks ) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop( gotoEnd );
			};

			if ( typeof type !== "string" ) {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if ( clearQueue ) {
				this.queue( type || "fx", [] );
			}

			return this.each( function() {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = dataPriv.get( this );

				if ( index ) {
					if ( data[ index ] && data[ index ].stop ) {
						stopQueue( data[ index ] );
					}
				} else {
					for ( index in data ) {
						if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
							stopQueue( data[ index ] );
						}
					}
				}

				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this &&
						( type == null || timers[ index ].queue === type ) ) {

						timers[ index ].anim.stop( gotoEnd );
						dequeue = false;
						timers.splice( index, 1 );
					}
				}

				// Start the next in the queue if the last step wasn't forced.
				// Timers currently will call their complete callbacks, which
				// will dequeue but only if they were gotoEnd.
				if ( dequeue || !gotoEnd ) {
					jQuery.dequeue( this, type );
				}
			} );
		},
		finish: function( type ) {
			if ( type !== false ) {
				type = type || "fx";
			}
			return this.each( function() {
				var index,
					data = dataPriv.get( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;

				// Enable finishing flag on private data
				data.finish = true;

				// Empty the queue first
				jQuery.queue( this, type, [] );

				if ( hooks && hooks.stop ) {
					hooks.stop.call( this, true );
				}

				// Look for any active animations, and finish them
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}

				// Look for any animations in the old queue and finish them
				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}

				// Turn off finishing flag
				delete data.finish;
			} );
		}
	} );

	jQuery.each( [ "toggle", "show", "hide" ], function( _i, name ) {
		var cssFn = jQuery.fn[ name ];
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply( this, arguments ) :
				this.animate( genFx( name, true ), speed, easing, callback );
		};
	} );

	// Generate shortcuts for custom animations
	jQuery.each( {
		slideDown: genFx( "show" ),
		slideUp: genFx( "hide" ),
		slideToggle: genFx( "toggle" ),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function( name, props ) {
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return this.animate( props, speed, easing, callback );
		};
	} );

	jQuery.timers = [];
	jQuery.fx.tick = function() {
		var timer,
			i = 0,
			timers = jQuery.timers;

		fxNow = Date.now();

		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];

			// Run the timer and safely remove it when done (allowing for external removal)
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}

		if ( !timers.length ) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};

	jQuery.fx.timer = function( timer ) {
		jQuery.timers.push( timer );
		jQuery.fx.start();
	};

	jQuery.fx.interval = 13;
	jQuery.fx.start = function() {
		if ( inProgress ) {
			return;
		}

		inProgress = true;
		schedule();
	};

	jQuery.fx.stop = function() {
		inProgress = null;
	};

	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,

		// Default speed
		_default: 400
	};


	// Based off of the plugin by Clint Helfers, with permission.
	// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";

		return this.queue( type, function( next, hooks ) {
			var timeout = window.setTimeout( next, time );
			hooks.stop = function() {
				window.clearTimeout( timeout );
			};
		} );
	};


	( function() {
		var input = document.createElement( "input" ),
			select = document.createElement( "select" ),
			opt = select.appendChild( document.createElement( "option" ) );

		input.type = "checkbox";

		// Support: Android <=4.3 only
		// Default value for a checkbox should be "on"
		support.checkOn = input.value !== "";

		// Support: IE <=11 only
		// Must access selectedIndex to make default options select
		support.optSelected = opt.selected;

		// Support: IE <=11 only
		// An input loses its value after becoming a radio
		input = document.createElement( "input" );
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";
	} )();


	var boolHook,
		attrHandle = jQuery.expr.attrHandle;

	jQuery.fn.extend( {
		attr: function( name, value ) {
			return access( this, jQuery.attr, name, value, arguments.length > 1 );
		},

		removeAttr: function( name ) {
			return this.each( function() {
				jQuery.removeAttr( this, name );
			} );
		}
	} );

	jQuery.extend( {
		attr: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set attributes on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			// Fallback to prop when attributes are not supported
			if ( typeof elem.getAttribute === "undefined" ) {
				return jQuery.prop( elem, name, value );
			}

			// Attribute hooks are determined by the lowercase version
			// Grab necessary hook if one is defined
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
			}

			if ( value !== undefined ) {
				if ( value === null ) {
					jQuery.removeAttr( elem, name );
					return;
				}

				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				elem.setAttribute( name, value + "" );
				return value;
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			ret = jQuery.find.attr( elem, name );

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ? undefined : ret;
		},

		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !support.radioValue && value === "radio" &&
						nodeName( elem, "input" ) ) {
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		},

		removeAttr: function( elem, value ) {
			var name,
				i = 0,

				// Attribute names can contain non-HTML whitespace characters
				// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
				attrNames = value && value.match( rnothtmlwhite );

			if ( attrNames && elem.nodeType === 1 ) {
				while ( ( name = attrNames[ i++ ] ) ) {
					elem.removeAttribute( name );
				}
			}
		}
	} );

	// Hooks for boolean attributes
	boolHook = {
		set: function( elem, value, name ) {
			if ( value === false ) {

				// Remove boolean attributes when set to false
				jQuery.removeAttr( elem, name );
			} else {
				elem.setAttribute( name, name );
			}
			return name;
		}
	};

	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( _i, name ) {
		var getter = attrHandle[ name ] || jQuery.find.attr;

		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle,
				lowercaseName = name.toLowerCase();

			if ( !isXML ) {

				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ lowercaseName ];
				attrHandle[ lowercaseName ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					lowercaseName :
					null;
				attrHandle[ lowercaseName ] = handle;
			}
			return ret;
		};
	} );




	var rfocusable = /^(?:input|select|textarea|button)$/i,
		rclickable = /^(?:a|area)$/i;

	jQuery.fn.extend( {
		prop: function( name, value ) {
			return access( this, jQuery.prop, name, value, arguments.length > 1 );
		},

		removeProp: function( name ) {
			return this.each( function() {
				delete this[ jQuery.propFix[ name ] || name ];
			} );
		}
	} );

	jQuery.extend( {
		prop: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set properties on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

				// Fix name and attach hooks
				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}

			if ( value !== undefined ) {
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				return ( elem[ name ] = value );
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			return elem[ name ];
		},

		propHooks: {
			tabIndex: {
				get: function( elem ) {

					// Support: IE <=9 - 11 only
					// elem.tabIndex doesn't always return the
					// correct value when it hasn't been explicitly set
					// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
					// Use proper attribute retrieval(#12072)
					var tabindex = jQuery.find.attr( elem, "tabindex" );

					if ( tabindex ) {
						return parseInt( tabindex, 10 );
					}

					if (
						rfocusable.test( elem.nodeName ) ||
						rclickable.test( elem.nodeName ) &&
						elem.href
					) {
						return 0;
					}

					return -1;
				}
			}
		},

		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	} );

	// Support: IE <=11 only
	// Accessing the selectedIndex property
	// forces the browser to respect setting selected
	// on the option
	// The getter ensures a default option is selected
	// when in an optgroup
	// eslint rule "no-unused-expressions" is disabled for this code
	// since it considers such accessions noop
	if ( !support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {

				/* eslint no-unused-expressions: "off" */

				var parent = elem.parentNode;
				if ( parent && parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
				return null;
			},
			set: function( elem ) {

				/* eslint no-unused-expressions: "off" */

				var parent = elem.parentNode;
				if ( parent ) {
					parent.selectedIndex;

					if ( parent.parentNode ) {
						parent.parentNode.selectedIndex;
					}
				}
			}
		};
	}

	jQuery.each( [
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[ this.toLowerCase() ] = this;
	} );




		// Strip and collapse whitespace according to HTML spec
		// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
		function stripAndCollapse( value ) {
			var tokens = value.match( rnothtmlwhite ) || [];
			return tokens.join( " " );
		}


	function getClass( elem ) {
		return elem.getAttribute && elem.getAttribute( "class" ) || "";
	}

	function classesToArray( value ) {
		if ( Array.isArray( value ) ) {
			return value;
		}
		if ( typeof value === "string" ) {
			return value.match( rnothtmlwhite ) || [];
		}
		return [];
	}

	jQuery.fn.extend( {
		addClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			classes = classesToArray( value );

			if ( classes.length ) {
				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
					cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = stripAndCollapse( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		removeClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( !arguments.length ) {
				return this.attr( "class", "" );
			}

			classes = classesToArray( value );

			if ( classes.length ) {
				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );

					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {

							// Remove *all* instances
							while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = stripAndCollapse( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		toggleClass: function( value, stateVal ) {
			var type = typeof value,
				isValidValue = type === "string" || Array.isArray( value );

			if ( typeof stateVal === "boolean" && isValidValue ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}

			if ( isFunction( value ) ) {
				return this.each( function( i ) {
					jQuery( this ).toggleClass(
						value.call( this, i, getClass( this ), stateVal ),
						stateVal
					);
				} );
			}

			return this.each( function() {
				var className, i, self, classNames;

				if ( isValidValue ) {

					// Toggle individual class names
					i = 0;
					self = jQuery( this );
					classNames = classesToArray( value );

					while ( ( className = classNames[ i++ ] ) ) {

						// Check each className given, space separated list
						if ( self.hasClass( className ) ) {
							self.removeClass( className );
						} else {
							self.addClass( className );
						}
					}

				// Toggle whole class name
				} else if ( value === undefined || type === "boolean" ) {
					className = getClass( this );
					if ( className ) {

						// Store className if set
						dataPriv.set( this, "__className__", className );
					}

					// If the element has a class name or if we're passed `false`,
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					if ( this.setAttribute ) {
						this.setAttribute( "class",
							className || value === false ?
								"" :
								dataPriv.get( this, "__className__" ) || ""
						);
					}
				}
			} );
		},

		hasClass: function( selector ) {
			var className, elem,
				i = 0;

			className = " " + selector + " ";
			while ( ( elem = this[ i++ ] ) ) {
				if ( elem.nodeType === 1 &&
					( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
				}
			}

			return false;
		}
	} );




	var rreturn = /\r/g;

	jQuery.fn.extend( {
		val: function( value ) {
			var hooks, ret, valueIsFunction,
				elem = this[ 0 ];

			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] ||
						jQuery.valHooks[ elem.nodeName.toLowerCase() ];

					if ( hooks &&
						"get" in hooks &&
						( ret = hooks.get( elem, "value" ) ) !== undefined
					) {
						return ret;
					}

					ret = elem.value;

					// Handle most common string cases
					if ( typeof ret === "string" ) {
						return ret.replace( rreturn, "" );
					}

					// Handle cases where value is null/undef or number
					return ret == null ? "" : ret;
				}

				return;
			}

			valueIsFunction = isFunction( value );

			return this.each( function( i ) {
				var val;

				if ( this.nodeType !== 1 ) {
					return;
				}

				if ( valueIsFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}

				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";

				} else if ( typeof val === "number" ) {
					val += "";

				} else if ( Array.isArray( val ) ) {
					val = jQuery.map( val, function( value ) {
						return value == null ? "" : value + "";
					} );
				}

				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

				// If set returns undefined, fall back to normal setting
				if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			} );
		}
	} );

	jQuery.extend( {
		valHooks: {
			option: {
				get: function( elem ) {

					var val = jQuery.find.attr( elem, "value" );
					return val != null ?
						val :

						// Support: IE <=10 - 11 only
						// option.text throws exceptions (#14686, #14858)
						// Strip and collapse whitespace
						// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
						stripAndCollapse( jQuery.text( elem ) );
				}
			},
			select: {
				get: function( elem ) {
					var value, option, i,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one",
						values = one ? null : [],
						max = one ? index + 1 : options.length;

					if ( index < 0 ) {
						i = max;

					} else {
						i = one ? index : 0;
					}

					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];

						// Support: IE <=9 only
						// IE8-9 doesn't update selected after form reset (#2551)
						if ( ( option.selected || i === index ) &&

								// Don't return options that are disabled or in a disabled optgroup
								!option.disabled &&
								( !option.parentNode.disabled ||
									!nodeName( option.parentNode, "optgroup" ) ) ) {

							// Get the specific value for the option
							value = jQuery( option ).val();

							// We don't need an array for one selects
							if ( one ) {
								return value;
							}

							// Multi-Selects return an array
							values.push( value );
						}
					}

					return values;
				},

				set: function( elem, value ) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray( value ),
						i = options.length;

					while ( i-- ) {
						option = options[ i ];

						/* eslint-disable no-cond-assign */

						if ( option.selected =
							jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
						) {
							optionSet = true;
						}

						/* eslint-enable no-cond-assign */
					}

					// Force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		}
	} );

	// Radios and checkboxes getter/setter
	jQuery.each( [ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			set: function( elem, value ) {
				if ( Array.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
				}
			}
		};
		if ( !support.checkOn ) {
			jQuery.valHooks[ this ].get = function( elem ) {
				return elem.getAttribute( "value" ) === null ? "on" : elem.value;
			};
		}
	} );




	// Return jQuery for attributes-only inclusion


	support.focusin = "onfocusin" in window;


	var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
		stopPropagationCallback = function( e ) {
			e.stopPropagation();
		};

	jQuery.extend( jQuery.event, {

		trigger: function( event, data, elem, onlyHandlers ) {

			var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
				eventPath = [ elem || document ],
				type = hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

			cur = lastElement = tmp = elem = elem || document;

			// Don't do events on text and comment nodes
			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}

			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}

			if ( type.indexOf( "." ) > -1 ) {

				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split( "." );
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf( ":" ) < 0 && "on" + type;

			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );

			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join( "." );
			event.rnamespace = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
				null;

			// Clean up the event in case it is being reused
			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}

			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );

			// Allow special events to draw outside the lines
			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}

			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}

				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if ( tmp === ( elem.ownerDocument || document ) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}

			// Fire handlers on the event path
			i = 0;
			while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
				lastElement = cur;
				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;

				// jQuery handler
				handle = ( dataPriv.get( cur, "events" ) || Object.create( null ) )[ event.type ] &&
					dataPriv.get( cur, "handle" );
				if ( handle ) {
					handle.apply( cur, data );
				}

				// Native handler
				handle = ontype && cur[ ontype ];
				if ( handle && handle.apply && acceptData( cur ) ) {
					event.result = handle.apply( cur, data );
					if ( event.result === false ) {
						event.preventDefault();
					}
				}
			}
			event.type = type;

			// If nobody prevented the default action, do it now
			if ( !onlyHandlers && !event.isDefaultPrevented() ) {

				if ( ( !special._default ||
					special._default.apply( eventPath.pop(), data ) === false ) &&
					acceptData( elem ) ) {

					// Call a native DOM method on the target with the same name as the event.
					// Don't do default actions on window, that's where global variables be (#6170)
					if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];

						if ( tmp ) {
							elem[ ontype ] = null;
						}

						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;

						if ( event.isPropagationStopped() ) {
							lastElement.addEventListener( type, stopPropagationCallback );
						}

						elem[ type ]();

						if ( event.isPropagationStopped() ) {
							lastElement.removeEventListener( type, stopPropagationCallback );
						}

						jQuery.event.triggered = undefined;

						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}

			return event.result;
		},

		// Piggyback on a donor event to simulate a different one
		// Used only for `focus(in | out)` events
		simulate: function( type, elem, event ) {
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true
				}
			);

			jQuery.event.trigger( e, null, elem );
		}

	} );

	jQuery.fn.extend( {

		trigger: function( type, data ) {
			return this.each( function() {
				jQuery.event.trigger( type, data, this );
			} );
		},
		triggerHandler: function( type, data ) {
			var elem = this[ 0 ];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	} );


	// Support: Firefox <=44
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
	if ( !support.focusin ) {
		jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
			};

			jQuery.event.special[ fix ] = {
				setup: function() {

					// Handle: regular nodes (via `this.ownerDocument`), window
					// (via `this.document`) & document (via `this`).
					var doc = this.ownerDocument || this.document || this,
						attaches = dataPriv.access( doc, fix );

					if ( !attaches ) {
						doc.addEventListener( orig, handler, true );
					}
					dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
				},
				teardown: function() {
					var doc = this.ownerDocument || this.document || this,
						attaches = dataPriv.access( doc, fix ) - 1;

					if ( !attaches ) {
						doc.removeEventListener( orig, handler, true );
						dataPriv.remove( doc, fix );

					} else {
						dataPriv.access( doc, fix, attaches );
					}
				}
			};
		} );
	}
	var location = window.location;

	var nonce = { guid: Date.now() };

	var rquery = ( /\?/ );



	// Cross-browser xml parsing
	jQuery.parseXML = function( data ) {
		var xml, parserErrorElem;
		if ( !data || typeof data !== "string" ) {
			return null;
		}

		// Support: IE 9 - 11 only
		// IE throws on parseFromString with invalid input.
		try {
			xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
		} catch ( e ) {}

		parserErrorElem = xml && xml.getElementsByTagName( "parsererror" )[ 0 ];
		if ( !xml || parserErrorElem ) {
			jQuery.error( "Invalid XML: " + (
				parserErrorElem ?
					jQuery.map( parserErrorElem.childNodes, function( el ) {
						return el.textContent;
					} ).join( "\n" ) :
					data
			) );
		}
		return xml;
	};


	var
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;

	function buildParams( prefix, obj, traditional, add ) {
		var name;

		if ( Array.isArray( obj ) ) {

			// Serialize array item.
			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {

					// Treat each array item as a scalar.
					add( prefix, v );

				} else {

					// Item is non-scalar (array or object), encode its numeric index.
					buildParams(
						prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
						v,
						traditional,
						add
					);
				}
			} );

		} else if ( !traditional && toType( obj ) === "object" ) {

			// Serialize object item.
			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}

		} else {

			// Serialize scalar item.
			add( prefix, obj );
		}
	}

	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, valueOrFunction ) {

				// If value is a function, invoke it and use its return value
				var value = isFunction( valueOrFunction ) ?
					valueOrFunction() :
					valueOrFunction;

				s[ s.length ] = encodeURIComponent( key ) + "=" +
					encodeURIComponent( value == null ? "" : value );
			};

		if ( a == null ) {
			return "";
		}

		// If an array was passed in, assume that it is an array of form elements.
		if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			} );

		} else {

			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}

		// Return the resulting serialization
		return s.join( "&" );
	};

	jQuery.fn.extend( {
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map( function() {

				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			} ).filter( function() {
				var type = this.type;

				// Use .is( ":disabled" ) so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !rcheckableType.test( type ) );
			} ).map( function( _i, elem ) {
				var val = jQuery( this ).val();

				if ( val == null ) {
					return null;
				}

				if ( Array.isArray( val ) ) {
					return jQuery.map( val, function( val ) {
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					} );
				}

				return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			} ).get();
		}
	} );


	var
		r20 = /%20/g,
		rhash = /#.*$/,
		rantiCache = /([?&])_=[^&]*/,
		rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,

		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},

		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},

		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat( "*" ),

		// Anchor tag for parsing the document origin
		originAnchor = document.createElement( "a" );

	originAnchor.href = location.href;

	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports( structure ) {

		// dataTypeExpression is optional and defaults to "*"
		return function( dataTypeExpression, func ) {

			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}

			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

			if ( isFunction( func ) ) {

				// For each dataType in the dataTypeExpression
				while ( ( dataType = dataTypes[ i++ ] ) ) {

					// Prepend if requested
					if ( dataType[ 0 ] === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

					// Otherwise append
					} else {
						( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
					}
				}
			}
		};
	}

	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

		var inspected = {},
			seekingTransport = ( structure === transports );

		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if ( typeof dataTypeOrTransport === "string" &&
					!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			} );
			return selected;
		}

		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}

	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend( target, src ) {
		var key, deep,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};

		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}

		return target;
	}

	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses( s, jqXHR, responses ) {

		var ct, type, finalDataType, firstDataType,
			contents = s.contents,
			dataTypes = s.dataTypes;

		// Remove auto dataType and get content-type in the process
		while ( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
			}
		}

		// Check if we're dealing with a known content-type
		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}

		// Check to see if we have a response for the expected dataType
		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {

			// Try convertible dataTypes
			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}

			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}

		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}

	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert( s, response, jqXHR, isSuccess ) {
		var conv2, current, conv, tmp, prev,
			converters = {},

			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();

		// Create converters map with lowercased keys
		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}

		current = dataTypes.shift();

		// Convert to each sequential dataType
		while ( current ) {

			if ( s.responseFields[ current ] ) {
				jqXHR[ s.responseFields[ current ] ] = response;
			}

			// Apply the dataFilter if provided
			if ( !prev && isSuccess && s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}

			prev = current;
			current = dataTypes.shift();

			if ( current ) {

				// There's only work to do if current dataType is non-auto
				if ( current === "*" ) {

					current = prev;

				// Convert response if prev dataType is non-auto and differs from current
				} else if ( prev !== "*" && prev !== current ) {

					// Seek a direct converter
					conv = converters[ prev + " " + current ] || converters[ "* " + current ];

					// If none found, seek a pair
					if ( !conv ) {
						for ( conv2 in converters ) {

							// If conv2 outputs current
							tmp = conv2.split( " " );
							if ( tmp[ 1 ] === current ) {

								// If prev can be converted to accepted input
								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {

									// Condense equivalence converters
									if ( conv === true ) {
										conv = converters[ conv2 ];

									// Otherwise, insert the intermediate dataType
									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.unshift( tmp[ 1 ] );
									}
									break;
								}
							}
						}
					}

					// Apply converter (if not an equivalence)
					if ( conv !== true ) {

						// Unless errors are allowed to bubble, catch and return them
						if ( conv && s.throws ) {
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return {
									state: "parsererror",
									error: conv ? e : "No conversion from " + prev + " to " + current
								};
							}
						}
					}
				}
			}
		}

		return { state: "success", data: response };
	}

	jQuery.extend( {

		// Counter for holding the number of active queries
		active: 0,

		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},

		ajaxSettings: {
			url: location.href,
			type: "GET",
			isLocal: rlocalProtocol.test( location.protocol ),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",

			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/

			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},

			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},

			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},

			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {

				// Convert anything to text
				"* text": String,

				// Text to html (true = no transformation)
				"text html": true,

				// Evaluate text as a json expression
				"text json": JSON.parse,

				// Parse text as xml
				"text xml": jQuery.parseXML
			},

			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},

		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function( target, settings ) {
			return settings ?

				// Building a settings object
				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

				// Extending ajaxSettings
				ajaxExtend( jQuery.ajaxSettings, target );
		},

		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),

		// Main method
		ajax: function( url, options ) {

			// If url is an object, simulate pre-1.5 signature
			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}

			// Force options to be an object
			options = options || {};

			var transport,

				// URL without anti-cache param
				cacheURL,

				// Response headers
				responseHeadersString,
				responseHeaders,

				// timeout handle
				timeoutTimer,

				// Url cleanup var
				urlAnchor,

				// Request state (becomes false upon send and true upon completion)
				completed,

				// To know if global events are to be dispatched
				fireGlobals,

				// Loop variable
				i,

				// uncached part of the url
				uncached,

				// Create the final options object
				s = jQuery.ajaxSetup( {}, options ),

				// Callbacks context
				callbackContext = s.context || s,

				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context &&
					( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks( "once memory" ),

				// Status-dependent callbacks
				statusCode = s.statusCode || {},

				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},

				// Default abort message
				strAbort = "canceled",

				// Fake xhr
				jqXHR = {
					readyState: 0,

					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( completed ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
									responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
										( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
											.concat( match[ 2 ] );
								}
							}
							match = responseHeaders[ key.toLowerCase() + " " ];
						}
						return match == null ? null : match.join( ", " );
					},

					// Raw string
					getAllResponseHeaders: function() {
						return completed ? responseHeadersString : null;
					},

					// Caches the header
					setRequestHeader: function( name, value ) {
						if ( completed == null ) {
							name = requestHeadersNames[ name.toLowerCase() ] =
								requestHeadersNames[ name.toLowerCase() ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},

					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( completed == null ) {
							s.mimeType = type;
						}
						return this;
					},

					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( completed ) {

								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
							} else {

								// Lazy-add the new callbacks in a way that preserves old ones
								for ( code in map ) {
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							}
						}
						return this;
					},

					// Cancel the request
					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};

			// Attach deferreds
			deferred.promise( jqXHR );

			// Add protocol if not provided (prefilters might expect it)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || location.href ) + "" )
				.replace( rprotocol, location.protocol + "//" );

			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;

			// Extract dataTypes list
			s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

			// A cross-domain request is in order when the origin doesn't match the current origin.
			if ( s.crossDomain == null ) {
				urlAnchor = document.createElement( "a" );

				// Support: IE <=8 - 11, Edge 12 - 15
				// IE throws exception on accessing the href property if url is malformed,
				// e.g. http://example.com:80x/
				try {
					urlAnchor.href = s.url;

					// Support: IE <=8 - 11 only
					// Anchor's host property isn't correctly set when s.url is relative
					urlAnchor.href = urlAnchor.href;
					s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
						urlAnchor.protocol + "//" + urlAnchor.host;
				} catch ( e ) {

					// If there is an error parsing the URL, assume it is crossDomain,
					// it can be rejected by the transport if it is invalid
					s.crossDomain = true;
				}
			}

			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}

			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

			// If request was aborted inside a prefilter, stop there
			if ( completed ) {
				return jqXHR;
			}

			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;

			// Watch for a new set of requests
			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger( "ajaxStart" );
			}

			// Uppercase the type
			s.type = s.type.toUpperCase();

			// Determine if request has content
			s.hasContent = !rnoContent.test( s.type );

			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			// Remove hash to simplify url manipulation
			cacheURL = s.url.replace( rhash, "" );

			// More options handling for requests with no content
			if ( !s.hasContent ) {

				// Remember the hash so we can put it back
				uncached = s.url.slice( cacheURL.length );

				// If data is available and should be processed, append data to url
				if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
					cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}

				// Add or update anti-cache param if needed
				if ( s.cache === false ) {
					cacheURL = cacheURL.replace( rantiCache, "$1" );
					uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce.guid++ ) +
						uncached;
				}

				// Put hash and anti-cache on the URL that will be requested (gh-1732)
				s.url = cacheURL + uncached;

			// Change '%20' to '+' if this is encoded form body content (gh-2658)
			} else if ( s.data && s.processData &&
				( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
				s.data = s.data.replace( r20, "+" );
			}

			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}

			// Set the correct header, if data is being sent
			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}

			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
					s.accepts[ s.dataTypes[ 0 ] ] +
						( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);

			// Check for headers option
			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}

			// Allow custom headers/mimetypes and early abort
			if ( s.beforeSend &&
				( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

				// Abort if not done already and return
				return jqXHR.abort();
			}

			// Aborting is no longer a cancellation
			strAbort = "abort";

			// Install callbacks on deferreds
			completeDeferred.add( s.complete );
			jqXHR.done( s.success );
			jqXHR.fail( s.error );

			// Get transport
			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

			// If no transport, we auto-abort
			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;

				// Send global event
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}

				// If request was aborted inside ajaxSend, stop there
				if ( completed ) {
					return jqXHR;
				}

				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = window.setTimeout( function() {
						jqXHR.abort( "timeout" );
					}, s.timeout );
				}

				try {
					completed = false;
					transport.send( requestHeaders, done );
				} catch ( e ) {

					// Rethrow post-completion exceptions
					if ( completed ) {
						throw e;
					}

					// Propagate others as results
					done( -1, e );
				}
			}

			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;

				// Ignore repeat invocations
				if ( completed ) {
					return;
				}

				completed = true;

				// Clear timeout if it exists
				if ( timeoutTimer ) {
					window.clearTimeout( timeoutTimer );
				}

				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;

				// Cache response headers
				responseHeadersString = headers || "";

				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;

				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;

				// Get response data
				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}

				// Use a noop converter for missing script but not if jsonp
				if ( !isSuccess &&
					jQuery.inArray( "script", s.dataTypes ) > -1 &&
					jQuery.inArray( "json", s.dataTypes ) < 0 ) {
					s.converters[ "text script" ] = function() {};
				}

				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert( s, response, jqXHR, isSuccess );

				// If successful, handle type chaining
				if ( isSuccess ) {

					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader( "Last-Modified" );
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader( "etag" );
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}

					// if no content
					if ( status === 204 || s.type === "HEAD" ) {
						statusText = "nocontent";

					// if not modified
					} else if ( status === 304 ) {
						statusText = "notmodified";

					// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {

					// Extract error from statusText and normalize for non-aborts
					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}

				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";

				// Success/Error
				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}

				// Status-dependent callbacks
				jqXHR.statusCode( statusCode );
				statusCode = undefined;

				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}

				// Complete
				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

					// Handle the global AJAX counter
					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger( "ajaxStop" );
					}
				}
			}

			return jqXHR;
		},

		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		},

		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		}
	} );

	jQuery.each( [ "get", "post" ], function( _i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {

			// Shift arguments if data argument was omitted
			if ( isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}

			// The url can be an options object (which then must have .url)
			return jQuery.ajax( jQuery.extend( {
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			}, jQuery.isPlainObject( url ) && url ) );
		};
	} );

	jQuery.ajaxPrefilter( function( s ) {
		var i;
		for ( i in s.headers ) {
			if ( i.toLowerCase() === "content-type" ) {
				s.contentType = s.headers[ i ] || "";
			}
		}
	} );


	jQuery._evalUrl = function( url, options, doc ) {
		return jQuery.ajax( {
			url: url,

			// Make this explicit, since user can override this through ajaxSetup (#11264)
			type: "GET",
			dataType: "script",
			cache: true,
			async: false,
			global: false,

			// Only evaluate the response if it is successful (gh-4126)
			// dataFilter is not invoked for failure responses, so using it instead
			// of the default converter is kludgy but it works.
			converters: {
				"text script": function() {}
			},
			dataFilter: function( response ) {
				jQuery.globalEval( response, options, doc );
			}
		} );
	};


	jQuery.fn.extend( {
		wrapAll: function( html ) {
			var wrap;

			if ( this[ 0 ] ) {
				if ( isFunction( html ) ) {
					html = html.call( this[ 0 ] );
				}

				// The elements to wrap the target around
				wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

				if ( this[ 0 ].parentNode ) {
					wrap.insertBefore( this[ 0 ] );
				}

				wrap.map( function() {
					var elem = this;

					while ( elem.firstElementChild ) {
						elem = elem.firstElementChild;
					}

					return elem;
				} ).append( this );
			}

			return this;
		},

		wrapInner: function( html ) {
			if ( isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapInner( html.call( this, i ) );
				} );
			}

			return this.each( function() {
				var self = jQuery( this ),
					contents = self.contents();

				if ( contents.length ) {
					contents.wrapAll( html );

				} else {
					self.append( html );
				}
			} );
		},

		wrap: function( html ) {
			var htmlIsFunction = isFunction( html );

			return this.each( function( i ) {
				jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
			} );
		},

		unwrap: function( selector ) {
			this.parent( selector ).not( "body" ).each( function() {
				jQuery( this ).replaceWith( this.childNodes );
			} );
			return this;
		}
	} );


	jQuery.expr.pseudos.hidden = function( elem ) {
		return !jQuery.expr.pseudos.visible( elem );
	};
	jQuery.expr.pseudos.visible = function( elem ) {
		return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
	};




	jQuery.ajaxSettings.xhr = function() {
		try {
			return new window.XMLHttpRequest();
		} catch ( e ) {}
	};

	var xhrSuccessStatus = {

			// File protocol always yields status code 0, assume 200
			0: 200,

			// Support: IE <=9 only
			// #1450: sometimes IE returns 1223 when it should be 204
			1223: 204
		},
		xhrSupported = jQuery.ajaxSettings.xhr();

	support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	support.ajax = xhrSupported = !!xhrSupported;

	jQuery.ajaxTransport( function( options ) {
		var callback, errorCallback;

		// Cross domain only allowed if supported through XMLHttpRequest
		if ( support.cors || xhrSupported && !options.crossDomain ) {
			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr();

					xhr.open(
						options.type,
						options.url,
						options.async,
						options.username,
						options.password
					);

					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}

					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
						headers[ "X-Requested-With" ] = "XMLHttpRequest";
					}

					// Set headers
					for ( i in headers ) {
						xhr.setRequestHeader( i, headers[ i ] );
					}

					// Callback
					callback = function( type ) {
						return function() {
							if ( callback ) {
								callback = errorCallback = xhr.onload =
									xhr.onerror = xhr.onabort = xhr.ontimeout =
										xhr.onreadystatechange = null;

								if ( type === "abort" ) {
									xhr.abort();
								} else if ( type === "error" ) {

									// Support: IE <=9 only
									// On a manual native abort, IE9 throws
									// errors on any property access that is not readyState
									if ( typeof xhr.status !== "number" ) {
										complete( 0, "error" );
									} else {
										complete(

											// File: protocol always yields status 0; see #8605, #14207
											xhr.status,
											xhr.statusText
										);
									}
								} else {
									complete(
										xhrSuccessStatus[ xhr.status ] || xhr.status,
										xhr.statusText,

										// Support: IE <=9 only
										// IE9 has no XHR2 but throws on binary (trac-11426)
										// For XHR2 non-text, let the caller handle it (gh-2498)
										( xhr.responseType || "text" ) !== "text"  ||
										typeof xhr.responseText !== "string" ?
											{ binary: xhr.response } :
											{ text: xhr.responseText },
										xhr.getAllResponseHeaders()
									);
								}
							}
						};
					};

					// Listen to events
					xhr.onload = callback();
					errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

					// Support: IE 9 only
					// Use onreadystatechange to replace onabort
					// to handle uncaught aborts
					if ( xhr.onabort !== undefined ) {
						xhr.onabort = errorCallback;
					} else {
						xhr.onreadystatechange = function() {

							// Check readyState before timeout as it changes
							if ( xhr.readyState === 4 ) {

								// Allow onerror to be called first,
								// but that will not handle a native abort
								// Also, save errorCallback to a variable
								// as xhr.onerror cannot be accessed
								window.setTimeout( function() {
									if ( callback ) {
										errorCallback();
									}
								} );
							}
						};
					}

					// Create the abort callback
					callback = callback( "abort" );

					try {

						// Do send the request (this may raise an exception)
						xhr.send( options.hasContent && options.data || null );
					} catch ( e ) {

						// #14683: Only rethrow if this hasn't been notified as an error yet
						if ( callback ) {
							throw e;
						}
					}
				},

				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
	jQuery.ajaxPrefilter( function( s ) {
		if ( s.crossDomain ) {
			s.contents.script = false;
		}
	} );

	// Install script dataType
	jQuery.ajaxSetup( {
		accepts: {
			script: "text/javascript, application/javascript, " +
				"application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	} );

	// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
		}
	} );

	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function( s ) {

		// This transport only deals with cross domain or forced-by-attrs requests
		if ( s.crossDomain || s.scriptAttrs ) {
			var script, callback;
			return {
				send: function( _, complete ) {
					script = jQuery( "<script>" )
						.attr( s.scriptAttrs || {} )
						.prop( { charset: s.scriptCharset, src: s.url } )
						.on( "load error", callback = function( evt ) {
							script.remove();
							callback = null;
							if ( evt ) {
								complete( evt.type === "error" ? 404 : 200, evt.type );
							}
						} );

					// Use native DOM manipulation to avoid our domManip AJAX trickery
					document.head.appendChild( script[ 0 ] );
				},
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;

	// Default jsonp settings
	jQuery.ajaxSetup( {
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce.guid++ ) );
			this[ callback ] = true;
			return callback;
		}
	} );

	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" &&
					( s.contentType || "" )
						.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
					rjsonp.test( s.data ) && "data"
			);

		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;

			// Insert callback into url or form data
			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}

			// Use data converter to retrieve json after script execution
			s.converters[ "script json" ] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};

			// Force json dataType
			s.dataTypes[ 0 ] = "json";

			// Install callback
			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};

			// Clean-up function (fires after converters)
			jqXHR.always( function() {

				// If previous value didn't exist - remove it
				if ( overwritten === undefined ) {
					jQuery( window ).removeProp( callbackName );

				// Otherwise restore preexisting value
				} else {
					window[ callbackName ] = overwritten;
				}

				// Save back as free
				if ( s[ callbackName ] ) {

					// Make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;

					// Save the callback name for future use
					oldCallbacks.push( callbackName );
				}

				// Call if it was a function and we have a response
				if ( responseContainer && isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}

				responseContainer = overwritten = undefined;
			} );

			// Delegate to script
			return "script";
		}
	} );




	// Support: Safari 8 only
	// In Safari 8 documents created via document.implementation.createHTMLDocument
	// collapse sibling forms: the second one becomes a child of the first one.
	// Because of that, this security measure has to be disabled in Safari 8.
	// https://bugs.webkit.org/show_bug.cgi?id=137337
	support.createHTMLDocument = ( function() {
		var body = document.implementation.createHTMLDocument( "" ).body;
		body.innerHTML = "<form></form><form></form>";
		return body.childNodes.length === 2;
	} )();


	// Argument "data" should be string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function( data, context, keepScripts ) {
		if ( typeof data !== "string" ) {
			return [];
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}

		var base, parsed, scripts;

		if ( !context ) {

			// Stop scripts or inline event handlers from being executed immediately
			// by using document.implementation
			if ( support.createHTMLDocument ) {
				context = document.implementation.createHTMLDocument( "" );

				// Set the base href for the created document
				// so any parsed elements with URLs
				// are based on the document's URL (gh-2965)
				base = context.createElement( "base" );
				base.href = document.location.href;
				context.head.appendChild( base );
			} else {
				context = document;
			}
		}

		parsed = rsingleTag.exec( data );
		scripts = !keepScripts && [];

		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[ 1 ] ) ];
		}

		parsed = buildFragment( [ data ], context, scripts );

		if ( scripts && scripts.length ) {
			jQuery( scripts ).remove();
		}

		return jQuery.merge( [], parsed.childNodes );
	};


	/**
	 * Load a url into a page
	 */
	jQuery.fn.load = function( url, params, callback ) {
		var selector, type, response,
			self = this,
			off = url.indexOf( " " );

		if ( off > -1 ) {
			selector = stripAndCollapse( url.slice( off ) );
			url = url.slice( 0, off );
		}

		// If it's a function
		if ( isFunction( params ) ) {

			// We assume that it's the callback
			callback = params;
			params = undefined;

		// Otherwise, build a param string
		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}

		// If we have elements to modify, make the request
		if ( self.length > 0 ) {
			jQuery.ajax( {
				url: url,

				// If "type" variable is undefined, then "GET" method will be used.
				// Make value of this field explicit since
				// user can override it through ajaxSetup method
				type: type || "GET",
				dataType: "html",
				data: params
			} ).done( function( responseText ) {

				// Save response for use in complete callback
				response = arguments;

				self.html( selector ?

					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

					// Otherwise use the full result
					responseText );

			// If the request succeeds, this function gets "data", "status", "jqXHR"
			// but they are ignored because response was set above.
			// If it fails, this function gets "jqXHR", "status", "error"
			} ).always( callback && function( jqXHR, status ) {
				self.each( function() {
					callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
				} );
			} );
		}

		return this;
	};




	jQuery.expr.pseudos.animated = function( elem ) {
		return jQuery.grep( jQuery.timers, function( fn ) {
			return elem === fn.elem;
		} ).length;
	};




	jQuery.offset = {
		setOffset: function( elem, options, i ) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css( elem, "position" ),
				curElem = jQuery( elem ),
				props = {};

			// Set position first, in-case top/left are set even on static elem
			if ( position === "static" ) {
				elem.style.position = "relative";
			}

			curOffset = curElem.offset();
			curCSSTop = jQuery.css( elem, "top" );
			curCSSLeft = jQuery.css( elem, "left" );
			calculatePosition = ( position === "absolute" || position === "fixed" ) &&
				( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

			// Need to be able to calculate position if either
			// top or left is auto and position is either absolute or fixed
			if ( calculatePosition ) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;

			} else {
				curTop = parseFloat( curCSSTop ) || 0;
				curLeft = parseFloat( curCSSLeft ) || 0;
			}

			if ( isFunction( options ) ) {

				// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
				options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
			}

			if ( options.top != null ) {
				props.top = ( options.top - curOffset.top ) + curTop;
			}
			if ( options.left != null ) {
				props.left = ( options.left - curOffset.left ) + curLeft;
			}

			if ( "using" in options ) {
				options.using.call( elem, props );

			} else {
				curElem.css( props );
			}
		}
	};

	jQuery.fn.extend( {

		// offset() relates an element's border box to the document origin
		offset: function( options ) {

			// Preserve chaining for setter
			if ( arguments.length ) {
				return options === undefined ?
					this :
					this.each( function( i ) {
						jQuery.offset.setOffset( this, options, i );
					} );
			}

			var rect, win,
				elem = this[ 0 ];

			if ( !elem ) {
				return;
			}

			// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
			// Support: IE <=11 only
			// Running getBoundingClientRect on a
			// disconnected node in IE throws an error
			if ( !elem.getClientRects().length ) {
				return { top: 0, left: 0 };
			}

			// Get document-relative position by adding viewport scroll to viewport-relative gBCR
			rect = elem.getBoundingClientRect();
			win = elem.ownerDocument.defaultView;
			return {
				top: rect.top + win.pageYOffset,
				left: rect.left + win.pageXOffset
			};
		},

		// position() relates an element's margin box to its offset parent's padding box
		// This corresponds to the behavior of CSS absolute positioning
		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}

			var offsetParent, offset, doc,
				elem = this[ 0 ],
				parentOffset = { top: 0, left: 0 };

			// position:fixed elements are offset from the viewport, which itself always has zero offset
			if ( jQuery.css( elem, "position" ) === "fixed" ) {

				// Assume position:fixed implies availability of getBoundingClientRect
				offset = elem.getBoundingClientRect();

			} else {
				offset = this.offset();

				// Account for the *real* offset parent, which can be the document or its root element
				// when a statically positioned element is identified
				doc = elem.ownerDocument;
				offsetParent = elem.offsetParent || doc.documentElement;
				while ( offsetParent &&
					( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
					jQuery.css( offsetParent, "position" ) === "static" ) {

					offsetParent = offsetParent.parentNode;
				}
				if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

					// Incorporate borders into its offset, since they are outside its content origin
					parentOffset = jQuery( offsetParent ).offset();
					parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
					parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
				}
			}

			// Subtract parent offsets and element margins
			return {
				top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
			};
		},

		// This method will return documentElement in the following cases:
		// 1) For the element inside the iframe without offsetParent, this method will return
		//    documentElement of the parent window
		// 2) For the hidden or detached element
		// 3) For body or html element, i.e. in case of the html node - it will return itself
		//
		// but those exceptions were never presented as a real life use-cases
		// and might be considered as more preferable results.
		//
		// This logic, however, is not guaranteed and can change at any point in the future
		offsetParent: function() {
			return this.map( function() {
				var offsetParent = this.offsetParent;

				while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
					offsetParent = offsetParent.offsetParent;
				}

				return offsetParent || documentElement;
			} );
		}
	} );

	// Create scrollLeft and scrollTop methods
	jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
		var top = "pageYOffset" === prop;

		jQuery.fn[ method ] = function( val ) {
			return access( this, function( elem, method, val ) {

				// Coalesce documents and windows
				var win;
				if ( isWindow( elem ) ) {
					win = elem;
				} else if ( elem.nodeType === 9 ) {
					win = elem.defaultView;
				}

				if ( val === undefined ) {
					return win ? win[ prop ] : elem[ method ];
				}

				if ( win ) {
					win.scrollTo(
						!top ? val : win.pageXOffset,
						top ? val : win.pageYOffset
					);

				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length );
		};
	} );

	// Support: Safari <=7 - 9.1, Chrome <=37 - 49
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each( [ "top", "left" ], function( _i, prop ) {
		jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
			function( elem, computed ) {
				if ( computed ) {
					computed = curCSS( elem, prop );

					// If curCSS returns percentage, fallback to offset
					return rnumnonpx.test( computed ) ?
						jQuery( elem ).position()[ prop ] + "px" :
						computed;
				}
			}
		);
	} );


	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
		jQuery.each( {
			padding: "inner" + name,
			content: type,
			"": "outer" + name
		}, function( defaultExtra, funcName ) {

			// Margin is only for outerHeight, outerWidth
			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

				return access( this, function( elem, type, value ) {
					var doc;

					if ( isWindow( elem ) ) {

						// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
						return funcName.indexOf( "outer" ) === 0 ?
							elem[ "inner" + name ] :
							elem.document.documentElement[ "client" + name ];
					}

					// Get document width or height
					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;

						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						return Math.max(
							elem.body[ "scroll" + name ], doc[ "scroll" + name ],
							elem.body[ "offset" + name ], doc[ "offset" + name ],
							doc[ "client" + name ]
						);
					}

					return value === undefined ?

						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css( elem, type, extra ) :

						// Set width or height on the element
						jQuery.style( elem, type, value, extra );
				}, type, chainable ? margin : undefined, chainable );
			};
		} );
	} );


	jQuery.each( [
		"ajaxStart",
		"ajaxStop",
		"ajaxComplete",
		"ajaxError",
		"ajaxSuccess",
		"ajaxSend"
	], function( _i, type ) {
		jQuery.fn[ type ] = function( fn ) {
			return this.on( type, fn );
		};
	} );




	jQuery.fn.extend( {

		bind: function( types, data, fn ) {
			return this.on( types, null, data, fn );
		},
		unbind: function( types, fn ) {
			return this.off( types, null, fn );
		},

		delegate: function( selector, types, data, fn ) {
			return this.on( types, selector, data, fn );
		},
		undelegate: function( selector, types, fn ) {

			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ?
				this.off( selector, "**" ) :
				this.off( types, selector || "**", fn );
		},

		hover: function( fnOver, fnOut ) {
			return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
		}
	} );

	jQuery.each(
		( "blur focus focusin focusout resize scroll click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup contextmenu" ).split( " " ),
		function( _i, name ) {

			// Handle event binding
			jQuery.fn[ name ] = function( data, fn ) {
				return arguments.length > 0 ?
					this.on( name, null, data, fn ) :
					this.trigger( name );
			};
		}
	);




	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

	// Bind a function to a context, optionally partially applying any
	// arguments.
	// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
	// However, it is not slated for removal any time soon
	jQuery.proxy = function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	};

	jQuery.holdReady = function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	};
	jQuery.isArray = Array.isArray;
	jQuery.parseJSON = JSON.parse;
	jQuery.nodeName = nodeName;
	jQuery.isFunction = isFunction;
	jQuery.isWindow = isWindow;
	jQuery.camelCase = camelCase;
	jQuery.type = toType;

	jQuery.now = Date.now;

	jQuery.isNumeric = function( obj ) {

		// As of jQuery 3.0, isNumeric is limited to
		// strings and numbers (primitives or objects)
		// that can be coerced to finite numbers (gh-2662)
		var type = jQuery.type( obj );
		return ( type === "number" || type === "string" ) &&

			// parseFloat NaNs numeric-cast false positives ("")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			!isNaN( obj - parseFloat( obj ) );
	};

	jQuery.trim = function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	};



	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.

	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

	if ( typeof define === "function" && define.amd ) {
		define( "jquery", [], function() {
			return jQuery;
		} );
	}




	var

		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,

		// Map over the $ in case of overwrite
		_$ = window.$;

	jQuery.noConflict = function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}

		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	};

	// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if ( typeof noGlobal === "undefined" ) {
		window.jQuery = window.$ = jQuery;
	}




	return jQuery;
	} );

	class InteractiveBoard {

	    constructor(config) {

	        const board = {
	            element: '.interactive-board',
	            width: '100%',
	            height: '100vh',
	            background: '#000000'
	        };

	        const activateRandomShape = {
	            enabled: false,
	            time: 500,
	            duration: 3000
	        };

	        const colors = [];

	        const shape = {
	            width: 18,
	            height: 18,
	            margin: 2,
	            background: '#1d1d1d'
	        };

	        const pulse = {
	            enabled: true
	        };

	        this.config = {
	            ...config,
	            board: {
	                ...board, ...config.board
	            },
	            colors: {
	                ...colors, ...config.colors
	            },
	            shape: {
	                ...shape, ...config.shape
	            },
	            activateRandomShape: {
	                ...activateRandomShape, ...config.activateRandomShape
	            },
	            pulse: {
	                ...pulse, ...config.pulse
	            }
	        };

	        this.boardElement = document.querySelector(this.config.board.element);
	        this.boardElement.style.width = this.config.board.width;
	        this.boardElement.style.height = this.config.board.height;
	        this.boardElement.style.background = this.config.board.background;
	        this.maxShapeCapacityX = 0;
	        this.maxShapeCapacityY = 0;
	    }

	    init() {

	        this.boardElement.classList.add('interactive-board-style');

	        document.addEventListener('DOMContentLoaded', () => {
	            this.createShape(this.boardElement.offsetWidth, this.boardElement.offsetHeight);
	            this.activateRandomShape();
	        });

	        window.addEventListener('resize', () => {
	            this.createShape(this.boardElement.offsetWidth, this.boardElement.offsetHeight);
	        });

	    }

	    /**
	     * Create shape inside interactive board
	     * @param boardWidth
	     * @param boardHeight
	     */
	    createShape(boardWidth, boardHeight) {

	        this.boardElement.innerHTML = '';

	        // Set maximum X and Y capacity of shape
	        this.maxShapeCapacityX = Math.floor(this.boardElement.offsetWidth / (this.config.shape.width + this.config.shape.margin * 2));
	        this.maxShapeCapacityY = Math.floor(this.boardElement.offsetHeight / (this.config.shape.height + this.config.shape.margin * 2));

	        for (let i = 0; i < this.maxShapeCapacityX * this.maxShapeCapacityY; i++) {
	            let shape = document.createElement("div");
	            shape.setAttribute("data-position", i + 1);
	            shape.setAttribute("data-enabled", true);

	            // Set style of shape with config
	            shape.style.width = this.config.shape.width + 'px';
	            shape.style.height = this.config.shape.height + 'px';
	            shape.style.margin = this.config.shape.margin + 'px';
	            shape.style.background = this.config.shape.background;

	            // Append each element on interactive board
	            this.boardElement.appendChild(shape);

	            shape.addEventListener('mouseover', () => {
	                this.setColor(shape);
	            });

	            shape.addEventListener('mouseout', () => {
	                this.removeColor(shape);
	            });

	            if (this.config.pulse.enabled) {
	                shape.addEventListener('click', () => {
	                    this.pulseShapeAnimation(shape);
	                });
	            }
	        }

	    }

	    /**
	     * Get color from the configuration or generate color randomly
	     * @returns {string}
	     */
	    getShapeColor() {
	        if (Object.keys(this.config.colors).length === 0) {
	            // Random color
	            return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
	        } else {
	            // Random color from config array
	            return this.config.colors[Math.floor(Math.random() * Object.keys(this.config.colors).length)];
	        }
	    }

	    /**
	     * Set color of the shape
	     * @param element
	     * @param color
	     */
	    setColor(element, color) {
	        if (element.getAttribute('data-enabled') === 'true') {
	            if (!color) {
	                color = this.getShapeColor();
	            }
	            element.style.background = color;
	            element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
	        }
	    }

	    /**
	     * Remove color of the shape and set initial color
	     * @param element
	     */
	    removeColor(element) {
	        if (element.getAttribute('data-enabled') === 'true') {
	            element.style.background = this.config.shape.background;
	            element.style.boxShadow = `0 0 2px ${this.config.shape.background}`;
	        }
	    }

	    /**
	     * Change color of random shape in the interactive board
	     */
	    activateRandomShape() {
	        // Check if config is enabled
	        if (this.config.activateRandomShape.enabled) {

	            let _this = this;

	            // Take random shape of interactive board and set random color for some time w/ interval
	            setInterval(function () {

	                let randomShapeNumber = Math.floor(1 + Math.random() * _this.boardElement.childElementCount);
	                let randomShape = document.querySelector(`${_this.config.board.element} > div:nth-child(${randomShapeNumber})`);

	                if (randomShape.getAttribute('data-enabled') === 'true') {
	                    _this.setColor(randomShape);

	                    setTimeout(function () {
	                        _this.removeColor(randomShape);
	                    }, _this.config.activateRandomShape.duration);
	                }

	            }, this.config.activateRandomShape.time);

	        }
	    }

	    pulseShapeAnimation(element) {
	        let elementInformation = this.getShapeInformation(element);

	        for (let i = 0; i < Object.keys(elementInformation.shapePulsePosition).length; i++) {

	            let _this = this;

	            if (elementInformation.shapePulsePosition[i]) {
	                let pulseElement = document.querySelector(`${_this.config.board.element} > div:nth-child(${elementInformation.shapePulsePosition[i]})`);

	                _this.setColor(pulseElement, elementInformation.shape.color);
	                pulseElement.setAttribute('data-enabled', false);

	                setTimeout(function () {
	                    pulseElement.setAttribute('data-enabled', true);
	                    _this.removeColor(pulseElement);
	                }, 1000);
	            }
	        }
	    }

	    getShapeInformation(element) {

	        const shapePosition = parseInt(element.getAttribute('data-position'));

	        return {
	            shape: {
	                color: this.rgb2hex(element.style.background),
	                position: shapePosition
	            },
	            shapePulsePosition: {
	                0: (shapePosition - this.maxShapeCapacityX + 1 >= 0) ? shapePosition - this.maxShapeCapacityX + 1 : null,
	                1: (shapePosition - this.maxShapeCapacityX >= 0) ? shapePosition - this.maxShapeCapacityX : null,
	                2: (shapePosition - this.maxShapeCapacityX - 1 >= 0) ? shapePosition - this.maxShapeCapacityX - 1 : null,
	                3: (shapePosition >= 0) ? shapePosition : null,
	                4: (shapePosition + 1 >= 0) ? shapePosition + 1 : null,
	                5: (shapePosition - 1 >= 0) ? shapePosition - 1 : null,
	                6: (shapePosition + this.maxShapeCapacityX + 1 >= 0) ? shapePosition + this.maxShapeCapacityX + 1 : null,
	                7: (shapePosition + this.maxShapeCapacityX >= 0) ? shapePosition + this.maxShapeCapacityX : null,
	                8: (shapePosition + this.maxShapeCapacityX - 1 >= 0) ? shapePosition + this.maxShapeCapacityX - 1 : null,
	            }
	        };
	    }

	    /**
	     * @param rgb
	     * @returns {string}
	     */
	    rgb2hex(rgb) {
	        return `#${rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/).slice(1).map(n => parseInt(n, 10).toString(16).padStart(2, '0')).join('')}`;
	    }
	}

	/*
	    A simple jQuery modal (http://github.com/kylefox/jquery-modal)
	    Version 0.9.2
	*/

	(function (factory) {
	  // Making your jQuery plugin work better with npm tools
	  // http://blog.npmjs.org/post/112712169830/making-your-jquery-plugin-work-better-with-npm
	  if(typeof module === "object" && typeof module.exports === "object") {
	    factory(require("jquery"), window, document);
	  }
	  else {
	    factory(jQuery, window, document);
	  }
	}(function($, window, document, undefined$1) {

	  var modals = [],
	      getCurrent = function() {
	        return modals.length ? modals[modals.length - 1] : null;
	      },
	      selectCurrent = function() {
	        var i,
	            selected = false;
	        for (i=modals.length-1; i>=0; i--) {
	          if (modals[i].$blocker) {
	            modals[i].$blocker.toggleClass('current',!selected).toggleClass('behind',selected);
	            selected = true;
	          }
	        }
	      };

	  $.modal = function(el, options) {
	    var remove, target;
	    this.$body = $('body');
	    this.options = $.extend({}, $.modal.defaults, options);
	    this.options.doFade = !isNaN(parseInt(this.options.fadeDuration, 10));
	    this.$blocker = null;
	    if (this.options.closeExisting)
	      while ($.modal.isActive())
	        $.modal.close(); // Close any open modals.
	    modals.push(this);
	    if (el.is('a')) {
	      target = el.attr('href');
	      this.anchor = el;
	      //Select element by id from href
	      if (/^#/.test(target)) {
	        this.$elm = $(target);
	        if (this.$elm.length !== 1) return null;
	        this.$body.append(this.$elm);
	        this.open();
	      //AJAX
	      } else {
	        this.$elm = $('<div>');
	        this.$body.append(this.$elm);
	        remove = function(event, modal) { modal.elm.remove(); };
	        this.showSpinner();
	        el.trigger($.modal.AJAX_SEND);
	        $.get(target).done(function(html) {
	          if (!$.modal.isActive()) return;
	          el.trigger($.modal.AJAX_SUCCESS);
	          var current = getCurrent();
	          current.$elm.empty().append(html).on($.modal.CLOSE, remove);
	          current.hideSpinner();
	          current.open();
	          el.trigger($.modal.AJAX_COMPLETE);
	        }).fail(function() {
	          el.trigger($.modal.AJAX_FAIL);
	          var current = getCurrent();
	          current.hideSpinner();
	          modals.pop(); // remove expected modal from the list
	          el.trigger($.modal.AJAX_COMPLETE);
	        });
	      }
	    } else {
	      this.$elm = el;
	      this.anchor = el;
	      this.$body.append(this.$elm);
	      this.open();
	    }
	  };

	  $.modal.prototype = {
	    constructor: $.modal,

	    open: function() {
	      var m = this;
	      this.block();
	      this.anchor.blur();
	      if(this.options.doFade) {
	        setTimeout(function() {
	          m.show();
	        }, this.options.fadeDuration * this.options.fadeDelay);
	      } else {
	        this.show();
	      }
	      $(document).off('keydown.modal').on('keydown.modal', function(event) {
	        var current = getCurrent();
	        if (event.which === 27 && current.options.escapeClose) current.close();
	      });
	      if (this.options.clickClose)
	        this.$blocker.click(function(e) {
	          if (e.target === this)
	            $.modal.close();
	        });
	    },

	    close: function() {
	      modals.pop();
	      this.unblock();
	      this.hide();
	      if (!$.modal.isActive())
	        $(document).off('keydown.modal');
	    },

	    block: function() {
	      this.$elm.trigger($.modal.BEFORE_BLOCK, [this._ctx()]);
	      this.$body.css('overflow','hidden');
	      this.$blocker = $('<div class="' + this.options.blockerClass + ' blocker current"></div>').appendTo(this.$body);
	      selectCurrent();
	      if(this.options.doFade) {
	        this.$blocker.css('opacity',0).animate({opacity: 1}, this.options.fadeDuration);
	      }
	      this.$elm.trigger($.modal.BLOCK, [this._ctx()]);
	    },

	    unblock: function(now) {
	      if (!now && this.options.doFade)
	        this.$blocker.fadeOut(this.options.fadeDuration, this.unblock.bind(this,true));
	      else {
	        this.$blocker.children().appendTo(this.$body);
	        this.$blocker.remove();
	        this.$blocker = null;
	        selectCurrent();
	        if (!$.modal.isActive())
	          this.$body.css('overflow','');
	      }
	    },

	    show: function() {
	      this.$elm.trigger($.modal.BEFORE_OPEN, [this._ctx()]);
	      if (this.options.showClose) {
	        this.closeButton = $('<a href="#close-modal" rel="modal:close" class="close-modal ' + this.options.closeClass + '">' + this.options.closeText + '</a>');
	        this.$elm.append(this.closeButton);
	      }
	      this.$elm.addClass(this.options.modalClass).appendTo(this.$blocker);
	      if(this.options.doFade) {
	        this.$elm.css({opacity: 0, display: 'inline-block'}).animate({opacity: 1}, this.options.fadeDuration);
	      } else {
	        this.$elm.css('display', 'inline-block');
	      }
	      this.$elm.trigger($.modal.OPEN, [this._ctx()]);
	    },

	    hide: function() {
	      this.$elm.trigger($.modal.BEFORE_CLOSE, [this._ctx()]);
	      if (this.closeButton) this.closeButton.remove();
	      var _this = this;
	      if(this.options.doFade) {
	        this.$elm.fadeOut(this.options.fadeDuration, function () {
	          _this.$elm.trigger($.modal.AFTER_CLOSE, [_this._ctx()]);
	        });
	      } else {
	        this.$elm.hide(0, function () {
	          _this.$elm.trigger($.modal.AFTER_CLOSE, [_this._ctx()]);
	        });
	      }
	      this.$elm.trigger($.modal.CLOSE, [this._ctx()]);
	    },

	    showSpinner: function() {
	      if (!this.options.showSpinner) return;
	      this.spinner = this.spinner || $('<div class="' + this.options.modalClass + '-spinner"></div>')
	        .append(this.options.spinnerHtml);
	      this.$body.append(this.spinner);
	      this.spinner.show();
	    },

	    hideSpinner: function() {
	      if (this.spinner) this.spinner.remove();
	    },

	    //Return context for custom events
	    _ctx: function() {
	      return { elm: this.$elm, $elm: this.$elm, $blocker: this.$blocker, options: this.options, $anchor: this.anchor };
	    }
	  };

	  $.modal.close = function(event) {
	    if (!$.modal.isActive()) return;
	    if (event) event.preventDefault();
	    var current = getCurrent();
	    current.close();
	    return current.$elm;
	  };

	  // Returns if there currently is an active modal
	  $.modal.isActive = function () {
	    return modals.length > 0;
	  };

	  $.modal.getCurrent = getCurrent;

	  $.modal.defaults = {
	    closeExisting: true,
	    escapeClose: true,
	    clickClose: true,
	    closeText: 'Close',
	    closeClass: '',
	    modalClass: "modal",
	    blockerClass: "jquery-modal",
	    spinnerHtml: '<div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div>',
	    showSpinner: true,
	    showClose: true,
	    fadeDuration: null,   // Number of milliseconds the fade animation takes.
	    fadeDelay: 1.0        // Point during the overlay's fade-in that the modal begins to fade in (.5 = 50%, 1.5 = 150%, etc.)
	  };

	  // Event constants
	  $.modal.BEFORE_BLOCK = 'modal:before-block';
	  $.modal.BLOCK = 'modal:block';
	  $.modal.BEFORE_OPEN = 'modal:before-open';
	  $.modal.OPEN = 'modal:open';
	  $.modal.BEFORE_CLOSE = 'modal:before-close';
	  $.modal.CLOSE = 'modal:close';
	  $.modal.AFTER_CLOSE = 'modal:after-close';
	  $.modal.AJAX_SEND = 'modal:ajax:send';
	  $.modal.AJAX_SUCCESS = 'modal:ajax:success';
	  $.modal.AJAX_FAIL = 'modal:ajax:fail';
	  $.modal.AJAX_COMPLETE = 'modal:ajax:complete';

	  $.fn.modal = function(options){
	    if (this.length === 1) {
	      new $.modal(this, options);
	    }
	    return this;
	  };

	  // Automatically bind links with rel="modal:close" to, well, close the modal.
	  $(document).on('click.modal', 'a[rel~="modal:close"]', $.modal.close);
	  $(document).on('click.modal', 'a[rel~="modal:open"]', function(event) {
	    event.preventDefault();
	    $(this).modal();
	  });
	}));

	/**
	 * SSR Window 5.0.0
	 * Better handling for window object in SSR environment
	 * https://github.com/nolimits4web/ssr-window
	 *
	 * Copyright 2025, Vladimir Kharlampidi
	 *
	 * Licensed under MIT
	 *
	 * Released on: February 12, 2025
	 */
	/* eslint-disable no-param-reassign */
	function isObject$1(obj) {
	  return obj !== null && typeof obj === 'object' && 'constructor' in obj && obj.constructor === Object;
	}
	function extend$1(target, src) {
	  if (target === void 0) {
	    target = {};
	  }
	  if (src === void 0) {
	    src = {};
	  }
	  const noExtend = ['__proto__', 'constructor', 'prototype'];
	  Object.keys(src).filter(key => noExtend.indexOf(key) < 0).forEach(key => {
	    if (typeof target[key] === 'undefined') target[key] = src[key];else if (isObject$1(src[key]) && isObject$1(target[key]) && Object.keys(src[key]).length > 0) {
	      extend$1(target[key], src[key]);
	    }
	  });
	}
	const ssrDocument = {
	  body: {},
	  addEventListener() {},
	  removeEventListener() {},
	  activeElement: {
	    blur() {},
	    nodeName: ''
	  },
	  querySelector() {
	    return null;
	  },
	  querySelectorAll() {
	    return [];
	  },
	  getElementById() {
	    return null;
	  },
	  createEvent() {
	    return {
	      initEvent() {}
	    };
	  },
	  createElement() {
	    return {
	      children: [],
	      childNodes: [],
	      style: {},
	      setAttribute() {},
	      getElementsByTagName() {
	        return [];
	      }
	    };
	  },
	  createElementNS() {
	    return {};
	  },
	  importNode() {
	    return null;
	  },
	  location: {
	    hash: '',
	    host: '',
	    hostname: '',
	    href: '',
	    origin: '',
	    pathname: '',
	    protocol: '',
	    search: ''
	  }
	};
	function getDocument() {
	  const doc = typeof document !== 'undefined' ? document : {};
	  extend$1(doc, ssrDocument);
	  return doc;
	}
	const ssrWindow = {
	  document: ssrDocument,
	  navigator: {
	    userAgent: ''
	  },
	  location: {
	    hash: '',
	    host: '',
	    hostname: '',
	    href: '',
	    origin: '',
	    pathname: '',
	    protocol: '',
	    search: ''
	  },
	  history: {
	    replaceState() {},
	    pushState() {},
	    go() {},
	    back() {}
	  },
	  CustomEvent: function CustomEvent() {
	    return this;
	  },
	  addEventListener() {},
	  removeEventListener() {},
	  getComputedStyle() {
	    return {
	      getPropertyValue() {
	        return '';
	      }
	    };
	  },
	  Image() {},
	  Date() {},
	  screen: {},
	  setTimeout() {},
	  clearTimeout() {},
	  matchMedia() {
	    return {};
	  },
	  requestAnimationFrame(callback) {
	    if (typeof setTimeout === 'undefined') {
	      callback();
	      return null;
	    }
	    return setTimeout(callback, 0);
	  },
	  cancelAnimationFrame(id) {
	    if (typeof setTimeout === 'undefined') {
	      return;
	    }
	    clearTimeout(id);
	  }
	};
	function getWindow() {
	  const win = typeof window !== 'undefined' ? window : {};
	  extend$1(win, ssrWindow);
	  return win;
	}

	function classesToTokens(classes) {
	  if (classes === void 0) {
	    classes = '';
	  }
	  return classes.trim().split(' ').filter(c => !!c.trim());
	}

	function deleteProps(obj) {
	  const object = obj;
	  Object.keys(object).forEach(key => {
	    try {
	      object[key] = null;
	    } catch (e) {
	      // no getter for object
	    }
	    try {
	      delete object[key];
	    } catch (e) {
	      // something got wrong
	    }
	  });
	}
	function nextTick(callback, delay) {
	  if (delay === void 0) {
	    delay = 0;
	  }
	  return setTimeout(callback, delay);
	}
	function now() {
	  return Date.now();
	}
	function getComputedStyle$1(el) {
	  const window = getWindow();
	  let style;
	  if (window.getComputedStyle) {
	    style = window.getComputedStyle(el, null);
	  }
	  if (!style && el.currentStyle) {
	    style = el.currentStyle;
	  }
	  if (!style) {
	    style = el.style;
	  }
	  return style;
	}
	function getTranslate(el, axis) {
	  if (axis === void 0) {
	    axis = 'x';
	  }
	  const window = getWindow();
	  let matrix;
	  let curTransform;
	  let transformMatrix;
	  const curStyle = getComputedStyle$1(el);
	  if (window.WebKitCSSMatrix) {
	    curTransform = curStyle.transform || curStyle.webkitTransform;
	    if (curTransform.split(',').length > 6) {
	      curTransform = curTransform.split(', ').map(a => a.replace(',', '.')).join(', ');
	    }
	    // Some old versions of Webkit choke when 'none' is passed; pass
	    // empty string instead in this case
	    transformMatrix = new window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
	  } else {
	    transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
	    matrix = transformMatrix.toString().split(',');
	  }
	  if (axis === 'x') {
	    // Latest Chrome and webkits Fix
	    if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41;
	    // Crazy IE10 Matrix
	    else if (matrix.length === 16) curTransform = parseFloat(matrix[12]);
	    // Normal Browsers
	    else curTransform = parseFloat(matrix[4]);
	  }
	  if (axis === 'y') {
	    // Latest Chrome and webkits Fix
	    if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42;
	    // Crazy IE10 Matrix
	    else if (matrix.length === 16) curTransform = parseFloat(matrix[13]);
	    // Normal Browsers
	    else curTransform = parseFloat(matrix[5]);
	  }
	  return curTransform || 0;
	}
	function isObject(o) {
	  return typeof o === 'object' && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === 'Object';
	}
	function isNode(node) {
	  // eslint-disable-next-line
	  if (typeof window !== 'undefined' && typeof window.HTMLElement !== 'undefined') {
	    return node instanceof HTMLElement;
	  }
	  return node && (node.nodeType === 1 || node.nodeType === 11);
	}
	function extend() {
	  const to = Object(arguments.length <= 0 ? undefined : arguments[0]);
	  const noExtend = ['__proto__', 'constructor', 'prototype'];
	  for (let i = 1; i < arguments.length; i += 1) {
	    const nextSource = i < 0 || arguments.length <= i ? undefined : arguments[i];
	    if (nextSource !== undefined && nextSource !== null && !isNode(nextSource)) {
	      const keysArray = Object.keys(Object(nextSource)).filter(key => noExtend.indexOf(key) < 0);
	      for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
	        const nextKey = keysArray[nextIndex];
	        const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
	        if (desc !== undefined && desc.enumerable) {
	          if (isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
	            if (nextSource[nextKey].__swiper__) {
	              to[nextKey] = nextSource[nextKey];
	            } else {
	              extend(to[nextKey], nextSource[nextKey]);
	            }
	          } else if (!isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
	            to[nextKey] = {};
	            if (nextSource[nextKey].__swiper__) {
	              to[nextKey] = nextSource[nextKey];
	            } else {
	              extend(to[nextKey], nextSource[nextKey]);
	            }
	          } else {
	            to[nextKey] = nextSource[nextKey];
	          }
	        }
	      }
	    }
	  }
	  return to;
	}
	function setCSSProperty(el, varName, varValue) {
	  el.style.setProperty(varName, varValue);
	}
	function animateCSSModeScroll(_ref) {
	  let {
	    swiper,
	    targetPosition,
	    side
	  } = _ref;
	  const window = getWindow();
	  const startPosition = -swiper.translate;
	  let startTime = null;
	  let time;
	  const duration = swiper.params.speed;
	  swiper.wrapperEl.style.scrollSnapType = 'none';
	  window.cancelAnimationFrame(swiper.cssModeFrameID);
	  const dir = targetPosition > startPosition ? 'next' : 'prev';
	  const isOutOfBound = (current, target) => {
	    return dir === 'next' && current >= target || dir === 'prev' && current <= target;
	  };
	  const animate = () => {
	    time = new Date().getTime();
	    if (startTime === null) {
	      startTime = time;
	    }
	    const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
	    const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
	    let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
	    if (isOutOfBound(currentPosition, targetPosition)) {
	      currentPosition = targetPosition;
	    }
	    swiper.wrapperEl.scrollTo({
	      [side]: currentPosition
	    });
	    if (isOutOfBound(currentPosition, targetPosition)) {
	      swiper.wrapperEl.style.overflow = 'hidden';
	      swiper.wrapperEl.style.scrollSnapType = '';
	      setTimeout(() => {
	        swiper.wrapperEl.style.overflow = '';
	        swiper.wrapperEl.scrollTo({
	          [side]: currentPosition
	        });
	      });
	      window.cancelAnimationFrame(swiper.cssModeFrameID);
	      return;
	    }
	    swiper.cssModeFrameID = window.requestAnimationFrame(animate);
	  };
	  animate();
	}
	function elementChildren(element, selector) {
	  if (selector === void 0) {
	    selector = '';
	  }
	  const window = getWindow();
	  const children = [...element.children];
	  if (window.HTMLSlotElement && element instanceof HTMLSlotElement) {
	    children.push(...element.assignedElements());
	  }
	  if (!selector) {
	    return children;
	  }
	  return children.filter(el => el.matches(selector));
	}
	function elementIsChildOfSlot(el, slot) {
	  // Breadth-first search through all parent's children and assigned elements
	  const elementsQueue = [slot];
	  while (elementsQueue.length > 0) {
	    const elementToCheck = elementsQueue.shift();
	    if (el === elementToCheck) {
	      return true;
	    }
	    elementsQueue.push(...elementToCheck.children, ...(elementToCheck.shadowRoot ? elementToCheck.shadowRoot.children : []), ...(elementToCheck.assignedElements ? elementToCheck.assignedElements() : []));
	  }
	}
	function elementIsChildOf(el, parent) {
	  const window = getWindow();
	  let isChild = parent.contains(el);
	  if (!isChild && window.HTMLSlotElement && parent instanceof HTMLSlotElement) {
	    const children = [...parent.assignedElements()];
	    isChild = children.includes(el);
	    if (!isChild) {
	      isChild = elementIsChildOfSlot(el, parent);
	    }
	  }
	  return isChild;
	}
	function showWarning(text) {
	  try {
	    console.warn(text);
	    return;
	  } catch (err) {
	    // err
	  }
	}
	function createElement(tag, classes) {
	  if (classes === void 0) {
	    classes = [];
	  }
	  const el = document.createElement(tag);
	  el.classList.add(...(Array.isArray(classes) ? classes : classesToTokens(classes)));
	  return el;
	}
	function elementPrevAll(el, selector) {
	  const prevEls = [];
	  while (el.previousElementSibling) {
	    const prev = el.previousElementSibling; // eslint-disable-line
	    if (selector) {
	      if (prev.matches(selector)) prevEls.push(prev);
	    } else prevEls.push(prev);
	    el = prev;
	  }
	  return prevEls;
	}
	function elementNextAll(el, selector) {
	  const nextEls = [];
	  while (el.nextElementSibling) {
	    const next = el.nextElementSibling; // eslint-disable-line
	    if (selector) {
	      if (next.matches(selector)) nextEls.push(next);
	    } else nextEls.push(next);
	    el = next;
	  }
	  return nextEls;
	}
	function elementStyle(el, prop) {
	  const window = getWindow();
	  return window.getComputedStyle(el, null).getPropertyValue(prop);
	}
	function elementIndex(el) {
	  let child = el;
	  let i;
	  if (child) {
	    i = 0;
	    // eslint-disable-next-line
	    while ((child = child.previousSibling) !== null) {
	      if (child.nodeType === 1) i += 1;
	    }
	    return i;
	  }
	  return undefined;
	}
	function elementParents(el, selector) {
	  const parents = []; // eslint-disable-line
	  let parent = el.parentElement; // eslint-disable-line
	  while (parent) {
	    if (selector) {
	      if (parent.matches(selector)) parents.push(parent);
	    } else {
	      parents.push(parent);
	    }
	    parent = parent.parentElement;
	  }
	  return parents;
	}
	function elementOuterSize(el, size, includeMargins) {
	  const window = getWindow();
	  if (includeMargins) {
	    return el[size === 'width' ? 'offsetWidth' : 'offsetHeight'] + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === 'width' ? 'margin-right' : 'margin-top')) + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === 'width' ? 'margin-left' : 'margin-bottom'));
	  }
	  return el.offsetWidth;
	}
	function makeElementsArray(el) {
	  return (Array.isArray(el) ? el : [el]).filter(e => !!e);
	}

	let support;
	function calcSupport() {
	  const window = getWindow();
	  const document = getDocument();
	  return {
	    smoothScroll: document.documentElement && document.documentElement.style && 'scrollBehavior' in document.documentElement.style,
	    touch: !!('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)
	  };
	}
	function getSupport() {
	  if (!support) {
	    support = calcSupport();
	  }
	  return support;
	}

	let deviceCached;
	function calcDevice(_temp) {
	  let {
	    userAgent
	  } = _temp === void 0 ? {} : _temp;
	  const support = getSupport();
	  const window = getWindow();
	  const platform = window.navigator.platform;
	  const ua = userAgent || window.navigator.userAgent;
	  const device = {
	    ios: false,
	    android: false
	  };
	  const screenWidth = window.screen.width;
	  const screenHeight = window.screen.height;
	  const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line
	  let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
	  const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
	  const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
	  const windows = platform === 'Win32';
	  let macos = platform === 'MacIntel';

	  // iPadOs 13 fix
	  const iPadScreens = ['1024x1366', '1366x1024', '834x1194', '1194x834', '834x1112', '1112x834', '768x1024', '1024x768', '820x1180', '1180x820', '810x1080', '1080x810'];
	  if (!ipad && macos && support.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
	    ipad = ua.match(/(Version)\/([\d.]+)/);
	    if (!ipad) ipad = [0, 1, '13_0_0'];
	    macos = false;
	  }

	  // Android
	  if (android && !windows) {
	    device.os = 'android';
	    device.android = true;
	  }
	  if (ipad || iphone || ipod) {
	    device.os = 'ios';
	    device.ios = true;
	  }

	  // Export object
	  return device;
	}
	function getDevice(overrides) {
	  if (overrides === void 0) {
	    overrides = {};
	  }
	  if (!deviceCached) {
	    deviceCached = calcDevice(overrides);
	  }
	  return deviceCached;
	}

	let browser;
	function calcBrowser() {
	  const window = getWindow();
	  const device = getDevice();
	  let needPerspectiveFix = false;
	  function isSafari() {
	    const ua = window.navigator.userAgent.toLowerCase();
	    return ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0;
	  }
	  if (isSafari()) {
	    const ua = String(window.navigator.userAgent);
	    if (ua.includes('Version/')) {
	      const [major, minor] = ua.split('Version/')[1].split(' ')[0].split('.').map(num => Number(num));
	      needPerspectiveFix = major < 16 || major === 16 && minor < 2;
	    }
	  }
	  const isWebView = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent);
	  const isSafariBrowser = isSafari();
	  const need3dFix = isSafariBrowser || isWebView && device.ios;
	  return {
	    isSafari: needPerspectiveFix || isSafariBrowser,
	    needPerspectiveFix,
	    need3dFix,
	    isWebView
	  };
	}
	function getBrowser() {
	  if (!browser) {
	    browser = calcBrowser();
	  }
	  return browser;
	}

	function Resize(_ref) {
	  let {
	    swiper,
	    on,
	    emit
	  } = _ref;
	  const window = getWindow();
	  let observer = null;
	  let animationFrame = null;
	  const resizeHandler = () => {
	    if (!swiper || swiper.destroyed || !swiper.initialized) return;
	    emit('beforeResize');
	    emit('resize');
	  };
	  const createObserver = () => {
	    if (!swiper || swiper.destroyed || !swiper.initialized) return;
	    observer = new ResizeObserver(entries => {
	      animationFrame = window.requestAnimationFrame(() => {
	        const {
	          width,
	          height
	        } = swiper;
	        let newWidth = width;
	        let newHeight = height;
	        entries.forEach(_ref2 => {
	          let {
	            contentBoxSize,
	            contentRect,
	            target
	          } = _ref2;
	          if (target && target !== swiper.el) return;
	          newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
	          newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
	        });
	        if (newWidth !== width || newHeight !== height) {
	          resizeHandler();
	        }
	      });
	    });
	    observer.observe(swiper.el);
	  };
	  const removeObserver = () => {
	    if (animationFrame) {
	      window.cancelAnimationFrame(animationFrame);
	    }
	    if (observer && observer.unobserve && swiper.el) {
	      observer.unobserve(swiper.el);
	      observer = null;
	    }
	  };
	  const orientationChangeHandler = () => {
	    if (!swiper || swiper.destroyed || !swiper.initialized) return;
	    emit('orientationchange');
	  };
	  on('init', () => {
	    if (swiper.params.resizeObserver && typeof window.ResizeObserver !== 'undefined') {
	      createObserver();
	      return;
	    }
	    window.addEventListener('resize', resizeHandler);
	    window.addEventListener('orientationchange', orientationChangeHandler);
	  });
	  on('destroy', () => {
	    removeObserver();
	    window.removeEventListener('resize', resizeHandler);
	    window.removeEventListener('orientationchange', orientationChangeHandler);
	  });
	}

	function Observer(_ref) {
	  let {
	    swiper,
	    extendParams,
	    on,
	    emit
	  } = _ref;
	  const observers = [];
	  const window = getWindow();
	  const attach = function (target, options) {
	    if (options === void 0) {
	      options = {};
	    }
	    const ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
	    const observer = new ObserverFunc(mutations => {
	      // The observerUpdate event should only be triggered
	      // once despite the number of mutations.  Additional
	      // triggers are redundant and are very costly
	      if (swiper.__preventObserver__) return;
	      if (mutations.length === 1) {
	        emit('observerUpdate', mutations[0]);
	        return;
	      }
	      const observerUpdate = function observerUpdate() {
	        emit('observerUpdate', mutations[0]);
	      };
	      if (window.requestAnimationFrame) {
	        window.requestAnimationFrame(observerUpdate);
	      } else {
	        window.setTimeout(observerUpdate, 0);
	      }
	    });
	    observer.observe(target, {
	      attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
	      childList: swiper.isElement || (typeof options.childList === 'undefined' ? true : options).childList,
	      characterData: typeof options.characterData === 'undefined' ? true : options.characterData
	    });
	    observers.push(observer);
	  };
	  const init = () => {
	    if (!swiper.params.observer) return;
	    if (swiper.params.observeParents) {
	      const containerParents = elementParents(swiper.hostEl);
	      for (let i = 0; i < containerParents.length; i += 1) {
	        attach(containerParents[i]);
	      }
	    }
	    // Observe container
	    attach(swiper.hostEl, {
	      childList: swiper.params.observeSlideChildren
	    });

	    // Observe wrapper
	    attach(swiper.wrapperEl, {
	      attributes: false
	    });
	  };
	  const destroy = () => {
	    observers.forEach(observer => {
	      observer.disconnect();
	    });
	    observers.splice(0, observers.length);
	  };
	  extendParams({
	    observer: false,
	    observeParents: false,
	    observeSlideChildren: false
	  });
	  on('init', init);
	  on('destroy', destroy);
	}

	/* eslint-disable no-underscore-dangle */

	var eventsEmitter = {
	  on(events, handler, priority) {
	    const self = this;
	    if (!self.eventsListeners || self.destroyed) return self;
	    if (typeof handler !== 'function') return self;
	    const method = priority ? 'unshift' : 'push';
	    events.split(' ').forEach(event => {
	      if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
	      self.eventsListeners[event][method](handler);
	    });
	    return self;
	  },
	  once(events, handler, priority) {
	    const self = this;
	    if (!self.eventsListeners || self.destroyed) return self;
	    if (typeof handler !== 'function') return self;
	    function onceHandler() {
	      self.off(events, onceHandler);
	      if (onceHandler.__emitterProxy) {
	        delete onceHandler.__emitterProxy;
	      }
	      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }
	      handler.apply(self, args);
	    }
	    onceHandler.__emitterProxy = handler;
	    return self.on(events, onceHandler, priority);
	  },
	  onAny(handler, priority) {
	    const self = this;
	    if (!self.eventsListeners || self.destroyed) return self;
	    if (typeof handler !== 'function') return self;
	    const method = priority ? 'unshift' : 'push';
	    if (self.eventsAnyListeners.indexOf(handler) < 0) {
	      self.eventsAnyListeners[method](handler);
	    }
	    return self;
	  },
	  offAny(handler) {
	    const self = this;
	    if (!self.eventsListeners || self.destroyed) return self;
	    if (!self.eventsAnyListeners) return self;
	    const index = self.eventsAnyListeners.indexOf(handler);
	    if (index >= 0) {
	      self.eventsAnyListeners.splice(index, 1);
	    }
	    return self;
	  },
	  off(events, handler) {
	    const self = this;
	    if (!self.eventsListeners || self.destroyed) return self;
	    if (!self.eventsListeners) return self;
	    events.split(' ').forEach(event => {
	      if (typeof handler === 'undefined') {
	        self.eventsListeners[event] = [];
	      } else if (self.eventsListeners[event]) {
	        self.eventsListeners[event].forEach((eventHandler, index) => {
	          if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) {
	            self.eventsListeners[event].splice(index, 1);
	          }
	        });
	      }
	    });
	    return self;
	  },
	  emit() {
	    const self = this;
	    if (!self.eventsListeners || self.destroyed) return self;
	    if (!self.eventsListeners) return self;
	    let events;
	    let data;
	    let context;
	    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	      args[_key2] = arguments[_key2];
	    }
	    if (typeof args[0] === 'string' || Array.isArray(args[0])) {
	      events = args[0];
	      data = args.slice(1, args.length);
	      context = self;
	    } else {
	      events = args[0].events;
	      data = args[0].data;
	      context = args[0].context || self;
	    }
	    data.unshift(context);
	    const eventsArray = Array.isArray(events) ? events : events.split(' ');
	    eventsArray.forEach(event => {
	      if (self.eventsAnyListeners && self.eventsAnyListeners.length) {
	        self.eventsAnyListeners.forEach(eventHandler => {
	          eventHandler.apply(context, [event, ...data]);
	        });
	      }
	      if (self.eventsListeners && self.eventsListeners[event]) {
	        self.eventsListeners[event].forEach(eventHandler => {
	          eventHandler.apply(context, data);
	        });
	      }
	    });
	    return self;
	  }
	};

	function updateSize() {
	  const swiper = this;
	  let width;
	  let height;
	  const el = swiper.el;
	  if (typeof swiper.params.width !== 'undefined' && swiper.params.width !== null) {
	    width = swiper.params.width;
	  } else {
	    width = el.clientWidth;
	  }
	  if (typeof swiper.params.height !== 'undefined' && swiper.params.height !== null) {
	    height = swiper.params.height;
	  } else {
	    height = el.clientHeight;
	  }
	  if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
	    return;
	  }

	  // Subtract paddings
	  width = width - parseInt(elementStyle(el, 'padding-left') || 0, 10) - parseInt(elementStyle(el, 'padding-right') || 0, 10);
	  height = height - parseInt(elementStyle(el, 'padding-top') || 0, 10) - parseInt(elementStyle(el, 'padding-bottom') || 0, 10);
	  if (Number.isNaN(width)) width = 0;
	  if (Number.isNaN(height)) height = 0;
	  Object.assign(swiper, {
	    width,
	    height,
	    size: swiper.isHorizontal() ? width : height
	  });
	}

	function updateSlides() {
	  const swiper = this;
	  function getDirectionPropertyValue(node, label) {
	    return parseFloat(node.getPropertyValue(swiper.getDirectionLabel(label)) || 0);
	  }
	  const params = swiper.params;
	  const {
	    wrapperEl,
	    slidesEl,
	    size: swiperSize,
	    rtlTranslate: rtl,
	    wrongRTL
	  } = swiper;
	  const isVirtual = swiper.virtual && params.virtual.enabled;
	  const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
	  const slides = elementChildren(slidesEl, `.${swiper.params.slideClass}, swiper-slide`);
	  const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
	  let snapGrid = [];
	  const slidesGrid = [];
	  const slidesSizesGrid = [];
	  let offsetBefore = params.slidesOffsetBefore;
	  if (typeof offsetBefore === 'function') {
	    offsetBefore = params.slidesOffsetBefore.call(swiper);
	  }
	  let offsetAfter = params.slidesOffsetAfter;
	  if (typeof offsetAfter === 'function') {
	    offsetAfter = params.slidesOffsetAfter.call(swiper);
	  }
	  const previousSnapGridLength = swiper.snapGrid.length;
	  const previousSlidesGridLength = swiper.slidesGrid.length;
	  let spaceBetween = params.spaceBetween;
	  let slidePosition = -offsetBefore;
	  let prevSlideSize = 0;
	  let index = 0;
	  if (typeof swiperSize === 'undefined') {
	    return;
	  }
	  if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
	    spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiperSize;
	  } else if (typeof spaceBetween === 'string') {
	    spaceBetween = parseFloat(spaceBetween);
	  }
	  swiper.virtualSize = -spaceBetween;

	  // reset margins
	  slides.forEach(slideEl => {
	    if (rtl) {
	      slideEl.style.marginLeft = '';
	    } else {
	      slideEl.style.marginRight = '';
	    }
	    slideEl.style.marginBottom = '';
	    slideEl.style.marginTop = '';
	  });

	  // reset cssMode offsets
	  if (params.centeredSlides && params.cssMode) {
	    setCSSProperty(wrapperEl, '--swiper-centered-offset-before', '');
	    setCSSProperty(wrapperEl, '--swiper-centered-offset-after', '');
	  }
	  const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
	  if (gridEnabled) {
	    swiper.grid.initSlides(slides);
	  } else if (swiper.grid) {
	    swiper.grid.unsetSlides();
	  }

	  // Calc slides
	  let slideSize;
	  const shouldResetSlideSize = params.slidesPerView === 'auto' && params.breakpoints && Object.keys(params.breakpoints).filter(key => {
	    return typeof params.breakpoints[key].slidesPerView !== 'undefined';
	  }).length > 0;
	  for (let i = 0; i < slidesLength; i += 1) {
	    slideSize = 0;
	    let slide;
	    if (slides[i]) slide = slides[i];
	    if (gridEnabled) {
	      swiper.grid.updateSlide(i, slide, slides);
	    }
	    if (slides[i] && elementStyle(slide, 'display') === 'none') continue; // eslint-disable-line

	    if (params.slidesPerView === 'auto') {
	      if (shouldResetSlideSize) {
	        slides[i].style[swiper.getDirectionLabel('width')] = ``;
	      }
	      const slideStyles = getComputedStyle(slide);
	      const currentTransform = slide.style.transform;
	      const currentWebKitTransform = slide.style.webkitTransform;
	      if (currentTransform) {
	        slide.style.transform = 'none';
	      }
	      if (currentWebKitTransform) {
	        slide.style.webkitTransform = 'none';
	      }
	      if (params.roundLengths) {
	        slideSize = swiper.isHorizontal() ? elementOuterSize(slide, 'width', true) : elementOuterSize(slide, 'height', true);
	      } else {
	        // eslint-disable-next-line
	        const width = getDirectionPropertyValue(slideStyles, 'width');
	        const paddingLeft = getDirectionPropertyValue(slideStyles, 'padding-left');
	        const paddingRight = getDirectionPropertyValue(slideStyles, 'padding-right');
	        const marginLeft = getDirectionPropertyValue(slideStyles, 'margin-left');
	        const marginRight = getDirectionPropertyValue(slideStyles, 'margin-right');
	        const boxSizing = slideStyles.getPropertyValue('box-sizing');
	        if (boxSizing && boxSizing === 'border-box') {
	          slideSize = width + marginLeft + marginRight;
	        } else {
	          const {
	            clientWidth,
	            offsetWidth
	          } = slide;
	          slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
	        }
	      }
	      if (currentTransform) {
	        slide.style.transform = currentTransform;
	      }
	      if (currentWebKitTransform) {
	        slide.style.webkitTransform = currentWebKitTransform;
	      }
	      if (params.roundLengths) slideSize = Math.floor(slideSize);
	    } else {
	      slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
	      if (params.roundLengths) slideSize = Math.floor(slideSize);
	      if (slides[i]) {
	        slides[i].style[swiper.getDirectionLabel('width')] = `${slideSize}px`;
	      }
	    }
	    if (slides[i]) {
	      slides[i].swiperSlideSize = slideSize;
	    }
	    slidesSizesGrid.push(slideSize);
	    if (params.centeredSlides) {
	      slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
	      if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
	      if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
	      if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;
	      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
	      if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
	      slidesGrid.push(slidePosition);
	    } else {
	      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
	      if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
	      slidesGrid.push(slidePosition);
	      slidePosition = slidePosition + slideSize + spaceBetween;
	    }
	    swiper.virtualSize += slideSize + spaceBetween;
	    prevSlideSize = slideSize;
	    index += 1;
	  }
	  swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
	  if (rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
	    wrapperEl.style.width = `${swiper.virtualSize + spaceBetween}px`;
	  }
	  if (params.setWrapperSize) {
	    wrapperEl.style[swiper.getDirectionLabel('width')] = `${swiper.virtualSize + spaceBetween}px`;
	  }
	  if (gridEnabled) {
	    swiper.grid.updateWrapperSize(slideSize, snapGrid);
	  }

	  // Remove last grid elements depending on width
	  if (!params.centeredSlides) {
	    const newSlidesGrid = [];
	    for (let i = 0; i < snapGrid.length; i += 1) {
	      let slidesGridItem = snapGrid[i];
	      if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
	      if (snapGrid[i] <= swiper.virtualSize - swiperSize) {
	        newSlidesGrid.push(slidesGridItem);
	      }
	    }
	    snapGrid = newSlidesGrid;
	    if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
	      snapGrid.push(swiper.virtualSize - swiperSize);
	    }
	  }
	  if (isVirtual && params.loop) {
	    const size = slidesSizesGrid[0] + spaceBetween;
	    if (params.slidesPerGroup > 1) {
	      const groups = Math.ceil((swiper.virtual.slidesBefore + swiper.virtual.slidesAfter) / params.slidesPerGroup);
	      const groupSize = size * params.slidesPerGroup;
	      for (let i = 0; i < groups; i += 1) {
	        snapGrid.push(snapGrid[snapGrid.length - 1] + groupSize);
	      }
	    }
	    for (let i = 0; i < swiper.virtual.slidesBefore + swiper.virtual.slidesAfter; i += 1) {
	      if (params.slidesPerGroup === 1) {
	        snapGrid.push(snapGrid[snapGrid.length - 1] + size);
	      }
	      slidesGrid.push(slidesGrid[slidesGrid.length - 1] + size);
	      swiper.virtualSize += size;
	    }
	  }
	  if (snapGrid.length === 0) snapGrid = [0];
	  if (spaceBetween !== 0) {
	    const key = swiper.isHorizontal() && rtl ? 'marginLeft' : swiper.getDirectionLabel('marginRight');
	    slides.filter((_, slideIndex) => {
	      if (!params.cssMode || params.loop) return true;
	      if (slideIndex === slides.length - 1) {
	        return false;
	      }
	      return true;
	    }).forEach(slideEl => {
	      slideEl.style[key] = `${spaceBetween}px`;
	    });
	  }
	  if (params.centeredSlides && params.centeredSlidesBounds) {
	    let allSlidesSize = 0;
	    slidesSizesGrid.forEach(slideSizeValue => {
	      allSlidesSize += slideSizeValue + (spaceBetween || 0);
	    });
	    allSlidesSize -= spaceBetween;
	    const maxSnap = allSlidesSize > swiperSize ? allSlidesSize - swiperSize : 0;
	    snapGrid = snapGrid.map(snap => {
	      if (snap <= 0) return -offsetBefore;
	      if (snap > maxSnap) return maxSnap + offsetAfter;
	      return snap;
	    });
	  }
	  if (params.centerInsufficientSlides) {
	    let allSlidesSize = 0;
	    slidesSizesGrid.forEach(slideSizeValue => {
	      allSlidesSize += slideSizeValue + (spaceBetween || 0);
	    });
	    allSlidesSize -= spaceBetween;
	    const offsetSize = (params.slidesOffsetBefore || 0) + (params.slidesOffsetAfter || 0);
	    if (allSlidesSize + offsetSize < swiperSize) {
	      const allSlidesOffset = (swiperSize - allSlidesSize - offsetSize) / 2;
	      snapGrid.forEach((snap, snapIndex) => {
	        snapGrid[snapIndex] = snap - allSlidesOffset;
	      });
	      slidesGrid.forEach((snap, snapIndex) => {
	        slidesGrid[snapIndex] = snap + allSlidesOffset;
	      });
	    }
	  }
	  Object.assign(swiper, {
	    slides,
	    snapGrid,
	    slidesGrid,
	    slidesSizesGrid
	  });
	  if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
	    setCSSProperty(wrapperEl, '--swiper-centered-offset-before', `${-snapGrid[0]}px`);
	    setCSSProperty(wrapperEl, '--swiper-centered-offset-after', `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
	    const addToSnapGrid = -swiper.snapGrid[0];
	    const addToSlidesGrid = -swiper.slidesGrid[0];
	    swiper.snapGrid = swiper.snapGrid.map(v => v + addToSnapGrid);
	    swiper.slidesGrid = swiper.slidesGrid.map(v => v + addToSlidesGrid);
	  }
	  if (slidesLength !== previousSlidesLength) {
	    swiper.emit('slidesLengthChange');
	  }
	  if (snapGrid.length !== previousSnapGridLength) {
	    if (swiper.params.watchOverflow) swiper.checkOverflow();
	    swiper.emit('snapGridLengthChange');
	  }
	  if (slidesGrid.length !== previousSlidesGridLength) {
	    swiper.emit('slidesGridLengthChange');
	  }
	  if (params.watchSlidesProgress) {
	    swiper.updateSlidesOffset();
	  }
	  swiper.emit('slidesUpdated');
	  if (!isVirtual && !params.cssMode && (params.effect === 'slide' || params.effect === 'fade')) {
	    const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
	    const hasClassBackfaceClassAdded = swiper.el.classList.contains(backFaceHiddenClass);
	    if (slidesLength <= params.maxBackfaceHiddenSlides) {
	      if (!hasClassBackfaceClassAdded) swiper.el.classList.add(backFaceHiddenClass);
	    } else if (hasClassBackfaceClassAdded) {
	      swiper.el.classList.remove(backFaceHiddenClass);
	    }
	  }
	}

	function updateAutoHeight(speed) {
	  const swiper = this;
	  const activeSlides = [];
	  const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
	  let newHeight = 0;
	  let i;
	  if (typeof speed === 'number') {
	    swiper.setTransition(speed);
	  } else if (speed === true) {
	    swiper.setTransition(swiper.params.speed);
	  }
	  const getSlideByIndex = index => {
	    if (isVirtual) {
	      return swiper.slides[swiper.getSlideIndexByData(index)];
	    }
	    return swiper.slides[index];
	  };
	  // Find slides currently in view
	  if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
	    if (swiper.params.centeredSlides) {
	      (swiper.visibleSlides || []).forEach(slide => {
	        activeSlides.push(slide);
	      });
	    } else {
	      for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
	        const index = swiper.activeIndex + i;
	        if (index > swiper.slides.length && !isVirtual) break;
	        activeSlides.push(getSlideByIndex(index));
	      }
	    }
	  } else {
	    activeSlides.push(getSlideByIndex(swiper.activeIndex));
	  }

	  // Find new height from highest slide in view
	  for (i = 0; i < activeSlides.length; i += 1) {
	    if (typeof activeSlides[i] !== 'undefined') {
	      const height = activeSlides[i].offsetHeight;
	      newHeight = height > newHeight ? height : newHeight;
	    }
	  }

	  // Update Height
	  if (newHeight || newHeight === 0) swiper.wrapperEl.style.height = `${newHeight}px`;
	}

	function updateSlidesOffset() {
	  const swiper = this;
	  const slides = swiper.slides;
	  // eslint-disable-next-line
	  const minusOffset = swiper.isElement ? swiper.isHorizontal() ? swiper.wrapperEl.offsetLeft : swiper.wrapperEl.offsetTop : 0;
	  for (let i = 0; i < slides.length; i += 1) {
	    slides[i].swiperSlideOffset = (swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop) - minusOffset - swiper.cssOverflowAdjustment();
	  }
	}

	const toggleSlideClasses$1 = (slideEl, condition, className) => {
	  if (condition && !slideEl.classList.contains(className)) {
	    slideEl.classList.add(className);
	  } else if (!condition && slideEl.classList.contains(className)) {
	    slideEl.classList.remove(className);
	  }
	};
	function updateSlidesProgress(translate) {
	  if (translate === void 0) {
	    translate = this && this.translate || 0;
	  }
	  const swiper = this;
	  const params = swiper.params;
	  const {
	    slides,
	    rtlTranslate: rtl,
	    snapGrid
	  } = swiper;
	  if (slides.length === 0) return;
	  if (typeof slides[0].swiperSlideOffset === 'undefined') swiper.updateSlidesOffset();
	  let offsetCenter = -translate;
	  if (rtl) offsetCenter = translate;
	  swiper.visibleSlidesIndexes = [];
	  swiper.visibleSlides = [];
	  let spaceBetween = params.spaceBetween;
	  if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
	    spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiper.size;
	  } else if (typeof spaceBetween === 'string') {
	    spaceBetween = parseFloat(spaceBetween);
	  }
	  for (let i = 0; i < slides.length; i += 1) {
	    const slide = slides[i];
	    let slideOffset = slide.swiperSlideOffset;
	    if (params.cssMode && params.centeredSlides) {
	      slideOffset -= slides[0].swiperSlideOffset;
	    }
	    const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
	    const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
	    const slideBefore = -(offsetCenter - slideOffset);
	    const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
	    const isFullyVisible = slideBefore >= 0 && slideBefore <= swiper.size - swiper.slidesSizesGrid[i];
	    const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
	    if (isVisible) {
	      swiper.visibleSlides.push(slide);
	      swiper.visibleSlidesIndexes.push(i);
	    }
	    toggleSlideClasses$1(slide, isVisible, params.slideVisibleClass);
	    toggleSlideClasses$1(slide, isFullyVisible, params.slideFullyVisibleClass);
	    slide.progress = rtl ? -slideProgress : slideProgress;
	    slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
	  }
	}

	function updateProgress(translate) {
	  const swiper = this;
	  if (typeof translate === 'undefined') {
	    const multiplier = swiper.rtlTranslate ? -1 : 1;
	    // eslint-disable-next-line
	    translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
	  }
	  const params = swiper.params;
	  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
	  let {
	    progress,
	    isBeginning,
	    isEnd,
	    progressLoop
	  } = swiper;
	  const wasBeginning = isBeginning;
	  const wasEnd = isEnd;
	  if (translatesDiff === 0) {
	    progress = 0;
	    isBeginning = true;
	    isEnd = true;
	  } else {
	    progress = (translate - swiper.minTranslate()) / translatesDiff;
	    const isBeginningRounded = Math.abs(translate - swiper.minTranslate()) < 1;
	    const isEndRounded = Math.abs(translate - swiper.maxTranslate()) < 1;
	    isBeginning = isBeginningRounded || progress <= 0;
	    isEnd = isEndRounded || progress >= 1;
	    if (isBeginningRounded) progress = 0;
	    if (isEndRounded) progress = 1;
	  }
	  if (params.loop) {
	    const firstSlideIndex = swiper.getSlideIndexByData(0);
	    const lastSlideIndex = swiper.getSlideIndexByData(swiper.slides.length - 1);
	    const firstSlideTranslate = swiper.slidesGrid[firstSlideIndex];
	    const lastSlideTranslate = swiper.slidesGrid[lastSlideIndex];
	    const translateMax = swiper.slidesGrid[swiper.slidesGrid.length - 1];
	    const translateAbs = Math.abs(translate);
	    if (translateAbs >= firstSlideTranslate) {
	      progressLoop = (translateAbs - firstSlideTranslate) / translateMax;
	    } else {
	      progressLoop = (translateAbs + translateMax - lastSlideTranslate) / translateMax;
	    }
	    if (progressLoop > 1) progressLoop -= 1;
	  }
	  Object.assign(swiper, {
	    progress,
	    progressLoop,
	    isBeginning,
	    isEnd
	  });
	  if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);
	  if (isBeginning && !wasBeginning) {
	    swiper.emit('reachBeginning toEdge');
	  }
	  if (isEnd && !wasEnd) {
	    swiper.emit('reachEnd toEdge');
	  }
	  if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
	    swiper.emit('fromEdge');
	  }
	  swiper.emit('progress', progress);
	}

	const toggleSlideClasses = (slideEl, condition, className) => {
	  if (condition && !slideEl.classList.contains(className)) {
	    slideEl.classList.add(className);
	  } else if (!condition && slideEl.classList.contains(className)) {
	    slideEl.classList.remove(className);
	  }
	};
	function updateSlidesClasses() {
	  const swiper = this;
	  const {
	    slides,
	    params,
	    slidesEl,
	    activeIndex
	  } = swiper;
	  const isVirtual = swiper.virtual && params.virtual.enabled;
	  const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
	  const getFilteredSlide = selector => {
	    return elementChildren(slidesEl, `.${params.slideClass}${selector}, swiper-slide${selector}`)[0];
	  };
	  let activeSlide;
	  let prevSlide;
	  let nextSlide;
	  if (isVirtual) {
	    if (params.loop) {
	      let slideIndex = activeIndex - swiper.virtual.slidesBefore;
	      if (slideIndex < 0) slideIndex = swiper.virtual.slides.length + slideIndex;
	      if (slideIndex >= swiper.virtual.slides.length) slideIndex -= swiper.virtual.slides.length;
	      activeSlide = getFilteredSlide(`[data-swiper-slide-index="${slideIndex}"]`);
	    } else {
	      activeSlide = getFilteredSlide(`[data-swiper-slide-index="${activeIndex}"]`);
	    }
	  } else {
	    if (gridEnabled) {
	      activeSlide = slides.find(slideEl => slideEl.column === activeIndex);
	      nextSlide = slides.find(slideEl => slideEl.column === activeIndex + 1);
	      prevSlide = slides.find(slideEl => slideEl.column === activeIndex - 1);
	    } else {
	      activeSlide = slides[activeIndex];
	    }
	  }
	  if (activeSlide) {
	    if (!gridEnabled) {
	      // Next Slide
	      nextSlide = elementNextAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
	      if (params.loop && !nextSlide) {
	        nextSlide = slides[0];
	      }

	      // Prev Slide
	      prevSlide = elementPrevAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
	      if (params.loop && !prevSlide === 0) {
	        prevSlide = slides[slides.length - 1];
	      }
	    }
	  }
	  slides.forEach(slideEl => {
	    toggleSlideClasses(slideEl, slideEl === activeSlide, params.slideActiveClass);
	    toggleSlideClasses(slideEl, slideEl === nextSlide, params.slideNextClass);
	    toggleSlideClasses(slideEl, slideEl === prevSlide, params.slidePrevClass);
	  });
	  swiper.emitSlidesClasses();
	}

	const processLazyPreloader = (swiper, imageEl) => {
	  if (!swiper || swiper.destroyed || !swiper.params) return;
	  const slideSelector = () => swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
	  const slideEl = imageEl.closest(slideSelector());
	  if (slideEl) {
	    let lazyEl = slideEl.querySelector(`.${swiper.params.lazyPreloaderClass}`);
	    if (!lazyEl && swiper.isElement) {
	      if (slideEl.shadowRoot) {
	        lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
	      } else {
	        // init later
	        requestAnimationFrame(() => {
	          if (slideEl.shadowRoot) {
	            lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
	            if (lazyEl) lazyEl.remove();
	          }
	        });
	      }
	    }
	    if (lazyEl) lazyEl.remove();
	  }
	};
	const unlazy = (swiper, index) => {
	  if (!swiper.slides[index]) return;
	  const imageEl = swiper.slides[index].querySelector('[loading="lazy"]');
	  if (imageEl) imageEl.removeAttribute('loading');
	};
	const preload = swiper => {
	  if (!swiper || swiper.destroyed || !swiper.params) return;
	  let amount = swiper.params.lazyPreloadPrevNext;
	  const len = swiper.slides.length;
	  if (!len || !amount || amount < 0) return;
	  amount = Math.min(amount, len);
	  const slidesPerView = swiper.params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : Math.ceil(swiper.params.slidesPerView);
	  const activeIndex = swiper.activeIndex;
	  if (swiper.params.grid && swiper.params.grid.rows > 1) {
	    const activeColumn = activeIndex;
	    const preloadColumns = [activeColumn - amount];
	    preloadColumns.push(...Array.from({
	      length: amount
	    }).map((_, i) => {
	      return activeColumn + slidesPerView + i;
	    }));
	    swiper.slides.forEach((slideEl, i) => {
	      if (preloadColumns.includes(slideEl.column)) unlazy(swiper, i);
	    });
	    return;
	  }
	  const slideIndexLastInView = activeIndex + slidesPerView - 1;
	  if (swiper.params.rewind || swiper.params.loop) {
	    for (let i = activeIndex - amount; i <= slideIndexLastInView + amount; i += 1) {
	      const realIndex = (i % len + len) % len;
	      if (realIndex < activeIndex || realIndex > slideIndexLastInView) unlazy(swiper, realIndex);
	    }
	  } else {
	    for (let i = Math.max(activeIndex - amount, 0); i <= Math.min(slideIndexLastInView + amount, len - 1); i += 1) {
	      if (i !== activeIndex && (i > slideIndexLastInView || i < activeIndex)) {
	        unlazy(swiper, i);
	      }
	    }
	  }
	};

	function getActiveIndexByTranslate(swiper) {
	  const {
	    slidesGrid,
	    params
	  } = swiper;
	  const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
	  let activeIndex;
	  for (let i = 0; i < slidesGrid.length; i += 1) {
	    if (typeof slidesGrid[i + 1] !== 'undefined') {
	      if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
	        activeIndex = i;
	      } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
	        activeIndex = i + 1;
	      }
	    } else if (translate >= slidesGrid[i]) {
	      activeIndex = i;
	    }
	  }
	  // Normalize slideIndex
	  if (params.normalizeSlideIndex) {
	    if (activeIndex < 0 || typeof activeIndex === 'undefined') activeIndex = 0;
	  }
	  return activeIndex;
	}
	function updateActiveIndex(newActiveIndex) {
	  const swiper = this;
	  const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
	  const {
	    snapGrid,
	    params,
	    activeIndex: previousIndex,
	    realIndex: previousRealIndex,
	    snapIndex: previousSnapIndex
	  } = swiper;
	  let activeIndex = newActiveIndex;
	  let snapIndex;
	  const getVirtualRealIndex = aIndex => {
	    let realIndex = aIndex - swiper.virtual.slidesBefore;
	    if (realIndex < 0) {
	      realIndex = swiper.virtual.slides.length + realIndex;
	    }
	    if (realIndex >= swiper.virtual.slides.length) {
	      realIndex -= swiper.virtual.slides.length;
	    }
	    return realIndex;
	  };
	  if (typeof activeIndex === 'undefined') {
	    activeIndex = getActiveIndexByTranslate(swiper);
	  }
	  if (snapGrid.indexOf(translate) >= 0) {
	    snapIndex = snapGrid.indexOf(translate);
	  } else {
	    const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
	    snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
	  }
	  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
	  if (activeIndex === previousIndex && !swiper.params.loop) {
	    if (snapIndex !== previousSnapIndex) {
	      swiper.snapIndex = snapIndex;
	      swiper.emit('snapIndexChange');
	    }
	    return;
	  }
	  if (activeIndex === previousIndex && swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
	    swiper.realIndex = getVirtualRealIndex(activeIndex);
	    return;
	  }
	  const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;

	  // Get real index
	  let realIndex;
	  if (swiper.virtual && params.virtual.enabled && params.loop) {
	    realIndex = getVirtualRealIndex(activeIndex);
	  } else if (gridEnabled) {
	    const firstSlideInColumn = swiper.slides.find(slideEl => slideEl.column === activeIndex);
	    let activeSlideIndex = parseInt(firstSlideInColumn.getAttribute('data-swiper-slide-index'), 10);
	    if (Number.isNaN(activeSlideIndex)) {
	      activeSlideIndex = Math.max(swiper.slides.indexOf(firstSlideInColumn), 0);
	    }
	    realIndex = Math.floor(activeSlideIndex / params.grid.rows);
	  } else if (swiper.slides[activeIndex]) {
	    const slideIndex = swiper.slides[activeIndex].getAttribute('data-swiper-slide-index');
	    if (slideIndex) {
	      realIndex = parseInt(slideIndex, 10);
	    } else {
	      realIndex = activeIndex;
	    }
	  } else {
	    realIndex = activeIndex;
	  }
	  Object.assign(swiper, {
	    previousSnapIndex,
	    snapIndex,
	    previousRealIndex,
	    realIndex,
	    previousIndex,
	    activeIndex
	  });
	  if (swiper.initialized) {
	    preload(swiper);
	  }
	  swiper.emit('activeIndexChange');
	  swiper.emit('snapIndexChange');
	  if (swiper.initialized || swiper.params.runCallbacksOnInit) {
	    if (previousRealIndex !== realIndex) {
	      swiper.emit('realIndexChange');
	    }
	    swiper.emit('slideChange');
	  }
	}

	function updateClickedSlide(el, path) {
	  const swiper = this;
	  const params = swiper.params;
	  let slide = el.closest(`.${params.slideClass}, swiper-slide`);
	  if (!slide && swiper.isElement && path && path.length > 1 && path.includes(el)) {
	    [...path.slice(path.indexOf(el) + 1, path.length)].forEach(pathEl => {
	      if (!slide && pathEl.matches && pathEl.matches(`.${params.slideClass}, swiper-slide`)) {
	        slide = pathEl;
	      }
	    });
	  }
	  let slideFound = false;
	  let slideIndex;
	  if (slide) {
	    for (let i = 0; i < swiper.slides.length; i += 1) {
	      if (swiper.slides[i] === slide) {
	        slideFound = true;
	        slideIndex = i;
	        break;
	      }
	    }
	  }
	  if (slide && slideFound) {
	    swiper.clickedSlide = slide;
	    if (swiper.virtual && swiper.params.virtual.enabled) {
	      swiper.clickedIndex = parseInt(slide.getAttribute('data-swiper-slide-index'), 10);
	    } else {
	      swiper.clickedIndex = slideIndex;
	    }
	  } else {
	    swiper.clickedSlide = undefined;
	    swiper.clickedIndex = undefined;
	    return;
	  }
	  if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {
	    swiper.slideToClickedSlide();
	  }
	}

	var update = {
	  updateSize,
	  updateSlides,
	  updateAutoHeight,
	  updateSlidesOffset,
	  updateSlidesProgress,
	  updateProgress,
	  updateSlidesClasses,
	  updateActiveIndex,
	  updateClickedSlide
	};

	function getSwiperTranslate(axis) {
	  if (axis === void 0) {
	    axis = this.isHorizontal() ? 'x' : 'y';
	  }
	  const swiper = this;
	  const {
	    params,
	    rtlTranslate: rtl,
	    translate,
	    wrapperEl
	  } = swiper;
	  if (params.virtualTranslate) {
	    return rtl ? -translate : translate;
	  }
	  if (params.cssMode) {
	    return translate;
	  }
	  let currentTranslate = getTranslate(wrapperEl, axis);
	  currentTranslate += swiper.cssOverflowAdjustment();
	  if (rtl) currentTranslate = -currentTranslate;
	  return currentTranslate || 0;
	}

	function setTranslate(translate, byController) {
	  const swiper = this;
	  const {
	    rtlTranslate: rtl,
	    params,
	    wrapperEl,
	    progress
	  } = swiper;
	  let x = 0;
	  let y = 0;
	  const z = 0;
	  if (swiper.isHorizontal()) {
	    x = rtl ? -translate : translate;
	  } else {
	    y = translate;
	  }
	  if (params.roundLengths) {
	    x = Math.floor(x);
	    y = Math.floor(y);
	  }
	  swiper.previousTranslate = swiper.translate;
	  swiper.translate = swiper.isHorizontal() ? x : y;
	  if (params.cssMode) {
	    wrapperEl[swiper.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = swiper.isHorizontal() ? -x : -y;
	  } else if (!params.virtualTranslate) {
	    if (swiper.isHorizontal()) {
	      x -= swiper.cssOverflowAdjustment();
	    } else {
	      y -= swiper.cssOverflowAdjustment();
	    }
	    wrapperEl.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
	  }

	  // Check if we need to update progress
	  let newProgress;
	  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
	  if (translatesDiff === 0) {
	    newProgress = 0;
	  } else {
	    newProgress = (translate - swiper.minTranslate()) / translatesDiff;
	  }
	  if (newProgress !== progress) {
	    swiper.updateProgress(translate);
	  }
	  swiper.emit('setTranslate', swiper.translate, byController);
	}

	function minTranslate() {
	  return -this.snapGrid[0];
	}

	function maxTranslate() {
	  return -this.snapGrid[this.snapGrid.length - 1];
	}

	function translateTo(translate, speed, runCallbacks, translateBounds, internal) {
	  if (translate === void 0) {
	    translate = 0;
	  }
	  if (speed === void 0) {
	    speed = this.params.speed;
	  }
	  if (runCallbacks === void 0) {
	    runCallbacks = true;
	  }
	  if (translateBounds === void 0) {
	    translateBounds = true;
	  }
	  const swiper = this;
	  const {
	    params,
	    wrapperEl
	  } = swiper;
	  if (swiper.animating && params.preventInteractionOnTransition) {
	    return false;
	  }
	  const minTranslate = swiper.minTranslate();
	  const maxTranslate = swiper.maxTranslate();
	  let newTranslate;
	  if (translateBounds && translate > minTranslate) newTranslate = minTranslate;else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate;else newTranslate = translate;

	  // Update progress
	  swiper.updateProgress(newTranslate);
	  if (params.cssMode) {
	    const isH = swiper.isHorizontal();
	    if (speed === 0) {
	      wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
	    } else {
	      if (!swiper.support.smoothScroll) {
	        animateCSSModeScroll({
	          swiper,
	          targetPosition: -newTranslate,
	          side: isH ? 'left' : 'top'
	        });
	        return true;
	      }
	      wrapperEl.scrollTo({
	        [isH ? 'left' : 'top']: -newTranslate,
	        behavior: 'smooth'
	      });
	    }
	    return true;
	  }
	  if (speed === 0) {
	    swiper.setTransition(0);
	    swiper.setTranslate(newTranslate);
	    if (runCallbacks) {
	      swiper.emit('beforeTransitionStart', speed, internal);
	      swiper.emit('transitionEnd');
	    }
	  } else {
	    swiper.setTransition(speed);
	    swiper.setTranslate(newTranslate);
	    if (runCallbacks) {
	      swiper.emit('beforeTransitionStart', speed, internal);
	      swiper.emit('transitionStart');
	    }
	    if (!swiper.animating) {
	      swiper.animating = true;
	      if (!swiper.onTranslateToWrapperTransitionEnd) {
	        swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
	          if (!swiper || swiper.destroyed) return;
	          if (e.target !== this) return;
	          swiper.wrapperEl.removeEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
	          swiper.onTranslateToWrapperTransitionEnd = null;
	          delete swiper.onTranslateToWrapperTransitionEnd;
	          swiper.animating = false;
	          if (runCallbacks) {
	            swiper.emit('transitionEnd');
	          }
	        };
	      }
	      swiper.wrapperEl.addEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
	    }
	  }
	  return true;
	}

	var translate = {
	  getTranslate: getSwiperTranslate,
	  setTranslate,
	  minTranslate,
	  maxTranslate,
	  translateTo
	};

	function setTransition(duration, byController) {
	  const swiper = this;
	  if (!swiper.params.cssMode) {
	    swiper.wrapperEl.style.transitionDuration = `${duration}ms`;
	    swiper.wrapperEl.style.transitionDelay = duration === 0 ? `0ms` : '';
	  }
	  swiper.emit('setTransition', duration, byController);
	}

	function transitionEmit(_ref) {
	  let {
	    swiper,
	    runCallbacks,
	    direction,
	    step
	  } = _ref;
	  const {
	    activeIndex,
	    previousIndex
	  } = swiper;
	  let dir = direction;
	  if (!dir) {
	    if (activeIndex > previousIndex) dir = 'next';else if (activeIndex < previousIndex) dir = 'prev';else dir = 'reset';
	  }
	  swiper.emit(`transition${step}`);
	  if (runCallbacks && activeIndex !== previousIndex) {
	    if (dir === 'reset') {
	      swiper.emit(`slideResetTransition${step}`);
	      return;
	    }
	    swiper.emit(`slideChangeTransition${step}`);
	    if (dir === 'next') {
	      swiper.emit(`slideNextTransition${step}`);
	    } else {
	      swiper.emit(`slidePrevTransition${step}`);
	    }
	  }
	}

	function transitionStart(runCallbacks, direction) {
	  if (runCallbacks === void 0) {
	    runCallbacks = true;
	  }
	  const swiper = this;
	  const {
	    params
	  } = swiper;
	  if (params.cssMode) return;
	  if (params.autoHeight) {
	    swiper.updateAutoHeight();
	  }
	  transitionEmit({
	    swiper,
	    runCallbacks,
	    direction,
	    step: 'Start'
	  });
	}

	function transitionEnd(runCallbacks, direction) {
	  if (runCallbacks === void 0) {
	    runCallbacks = true;
	  }
	  const swiper = this;
	  const {
	    params
	  } = swiper;
	  swiper.animating = false;
	  if (params.cssMode) return;
	  swiper.setTransition(0);
	  transitionEmit({
	    swiper,
	    runCallbacks,
	    direction,
	    step: 'End'
	  });
	}

	var transition = {
	  setTransition,
	  transitionStart,
	  transitionEnd
	};

	function slideTo(index, speed, runCallbacks, internal, initial) {
	  if (index === void 0) {
	    index = 0;
	  }
	  if (runCallbacks === void 0) {
	    runCallbacks = true;
	  }
	  if (typeof index === 'string') {
	    index = parseInt(index, 10);
	  }
	  const swiper = this;
	  let slideIndex = index;
	  if (slideIndex < 0) slideIndex = 0;
	  const {
	    params,
	    snapGrid,
	    slidesGrid,
	    previousIndex,
	    activeIndex,
	    rtlTranslate: rtl,
	    wrapperEl,
	    enabled
	  } = swiper;
	  if (!enabled && !internal && !initial || swiper.destroyed || swiper.animating && params.preventInteractionOnTransition) {
	    return false;
	  }
	  if (typeof speed === 'undefined') {
	    speed = swiper.params.speed;
	  }
	  const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
	  let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
	  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
	  const translate = -snapGrid[snapIndex];
	  // Normalize slideIndex
	  if (params.normalizeSlideIndex) {
	    for (let i = 0; i < slidesGrid.length; i += 1) {
	      const normalizedTranslate = -Math.floor(translate * 100);
	      const normalizedGrid = Math.floor(slidesGrid[i] * 100);
	      const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
	      if (typeof slidesGrid[i + 1] !== 'undefined') {
	        if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) {
	          slideIndex = i;
	        } else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) {
	          slideIndex = i + 1;
	        }
	      } else if (normalizedTranslate >= normalizedGrid) {
	        slideIndex = i;
	      }
	    }
	  }
	  // Directions locks
	  if (swiper.initialized && slideIndex !== activeIndex) {
	    if (!swiper.allowSlideNext && (rtl ? translate > swiper.translate && translate > swiper.minTranslate() : translate < swiper.translate && translate < swiper.minTranslate())) {
	      return false;
	    }
	    if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
	      if ((activeIndex || 0) !== slideIndex) {
	        return false;
	      }
	    }
	  }
	  if (slideIndex !== (previousIndex || 0) && runCallbacks) {
	    swiper.emit('beforeSlideChangeStart');
	  }

	  // Update progress
	  swiper.updateProgress(translate);
	  let direction;
	  if (slideIndex > activeIndex) direction = 'next';else if (slideIndex < activeIndex) direction = 'prev';else direction = 'reset';

	  // initial virtual
	  const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
	  const isInitialVirtual = isVirtual && initial;
	  // Update Index
	  if (!isInitialVirtual && (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate)) {
	    swiper.updateActiveIndex(slideIndex);
	    // Update Height
	    if (params.autoHeight) {
	      swiper.updateAutoHeight();
	    }
	    swiper.updateSlidesClasses();
	    if (params.effect !== 'slide') {
	      swiper.setTranslate(translate);
	    }
	    if (direction !== 'reset') {
	      swiper.transitionStart(runCallbacks, direction);
	      swiper.transitionEnd(runCallbacks, direction);
	    }
	    return false;
	  }
	  if (params.cssMode) {
	    const isH = swiper.isHorizontal();
	    const t = rtl ? translate : -translate;
	    if (speed === 0) {
	      if (isVirtual) {
	        swiper.wrapperEl.style.scrollSnapType = 'none';
	        swiper._immediateVirtual = true;
	      }
	      if (isVirtual && !swiper._cssModeVirtualInitialSet && swiper.params.initialSlide > 0) {
	        swiper._cssModeVirtualInitialSet = true;
	        requestAnimationFrame(() => {
	          wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
	        });
	      } else {
	        wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
	      }
	      if (isVirtual) {
	        requestAnimationFrame(() => {
	          swiper.wrapperEl.style.scrollSnapType = '';
	          swiper._immediateVirtual = false;
	        });
	      }
	    } else {
	      if (!swiper.support.smoothScroll) {
	        animateCSSModeScroll({
	          swiper,
	          targetPosition: t,
	          side: isH ? 'left' : 'top'
	        });
	        return true;
	      }
	      wrapperEl.scrollTo({
	        [isH ? 'left' : 'top']: t,
	        behavior: 'smooth'
	      });
	    }
	    return true;
	  }
	  const browser = getBrowser();
	  const isSafari = browser.isSafari;
	  if (isVirtual && !initial && isSafari && swiper.isElement) {
	    swiper.virtual.update(false, false, slideIndex);
	  }
	  swiper.setTransition(speed);
	  swiper.setTranslate(translate);
	  swiper.updateActiveIndex(slideIndex);
	  swiper.updateSlidesClasses();
	  swiper.emit('beforeTransitionStart', speed, internal);
	  swiper.transitionStart(runCallbacks, direction);
	  if (speed === 0) {
	    swiper.transitionEnd(runCallbacks, direction);
	  } else if (!swiper.animating) {
	    swiper.animating = true;
	    if (!swiper.onSlideToWrapperTransitionEnd) {
	      swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
	        if (!swiper || swiper.destroyed) return;
	        if (e.target !== this) return;
	        swiper.wrapperEl.removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
	        swiper.onSlideToWrapperTransitionEnd = null;
	        delete swiper.onSlideToWrapperTransitionEnd;
	        swiper.transitionEnd(runCallbacks, direction);
	      };
	    }
	    swiper.wrapperEl.addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
	  }
	  return true;
	}

	function slideToLoop(index, speed, runCallbacks, internal) {
	  if (index === void 0) {
	    index = 0;
	  }
	  if (runCallbacks === void 0) {
	    runCallbacks = true;
	  }
	  if (typeof index === 'string') {
	    const indexAsNumber = parseInt(index, 10);
	    index = indexAsNumber;
	  }
	  const swiper = this;
	  if (swiper.destroyed) return;
	  if (typeof speed === 'undefined') {
	    speed = swiper.params.speed;
	  }
	  const gridEnabled = swiper.grid && swiper.params.grid && swiper.params.grid.rows > 1;
	  let newIndex = index;
	  if (swiper.params.loop) {
	    if (swiper.virtual && swiper.params.virtual.enabled) {
	      // eslint-disable-next-line
	      newIndex = newIndex + swiper.virtual.slidesBefore;
	    } else {
	      let targetSlideIndex;
	      if (gridEnabled) {
	        const slideIndex = newIndex * swiper.params.grid.rows;
	        targetSlideIndex = swiper.slides.find(slideEl => slideEl.getAttribute('data-swiper-slide-index') * 1 === slideIndex).column;
	      } else {
	        targetSlideIndex = swiper.getSlideIndexByData(newIndex);
	      }
	      const cols = gridEnabled ? Math.ceil(swiper.slides.length / swiper.params.grid.rows) : swiper.slides.length;
	      const {
	        centeredSlides
	      } = swiper.params;
	      let slidesPerView = swiper.params.slidesPerView;
	      if (slidesPerView === 'auto') {
	        slidesPerView = swiper.slidesPerViewDynamic();
	      } else {
	        slidesPerView = Math.ceil(parseFloat(swiper.params.slidesPerView, 10));
	        if (centeredSlides && slidesPerView % 2 === 0) {
	          slidesPerView = slidesPerView + 1;
	        }
	      }
	      let needLoopFix = cols - targetSlideIndex < slidesPerView;
	      if (centeredSlides) {
	        needLoopFix = needLoopFix || targetSlideIndex < Math.ceil(slidesPerView / 2);
	      }
	      if (internal && centeredSlides && swiper.params.slidesPerView !== 'auto' && !gridEnabled) {
	        needLoopFix = false;
	      }
	      if (needLoopFix) {
	        const direction = centeredSlides ? targetSlideIndex < swiper.activeIndex ? 'prev' : 'next' : targetSlideIndex - swiper.activeIndex - 1 < swiper.params.slidesPerView ? 'next' : 'prev';
	        swiper.loopFix({
	          direction,
	          slideTo: true,
	          activeSlideIndex: direction === 'next' ? targetSlideIndex + 1 : targetSlideIndex - cols + 1,
	          slideRealIndex: direction === 'next' ? swiper.realIndex : undefined
	        });
	      }
	      if (gridEnabled) {
	        const slideIndex = newIndex * swiper.params.grid.rows;
	        newIndex = swiper.slides.find(slideEl => slideEl.getAttribute('data-swiper-slide-index') * 1 === slideIndex).column;
	      } else {
	        newIndex = swiper.getSlideIndexByData(newIndex);
	      }
	    }
	  }
	  requestAnimationFrame(() => {
	    swiper.slideTo(newIndex, speed, runCallbacks, internal);
	  });
	  return swiper;
	}

	/* eslint no-unused-vars: "off" */
	function slideNext(speed, runCallbacks, internal) {
	  if (runCallbacks === void 0) {
	    runCallbacks = true;
	  }
	  const swiper = this;
	  const {
	    enabled,
	    params,
	    animating
	  } = swiper;
	  if (!enabled || swiper.destroyed) return swiper;
	  if (typeof speed === 'undefined') {
	    speed = swiper.params.speed;
	  }
	  let perGroup = params.slidesPerGroup;
	  if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
	    perGroup = Math.max(swiper.slidesPerViewDynamic('current', true), 1);
	  }
	  const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
	  const isVirtual = swiper.virtual && params.virtual.enabled;
	  if (params.loop) {
	    if (animating && !isVirtual && params.loopPreventsSliding) return false;
	    swiper.loopFix({
	      direction: 'next'
	    });
	    // eslint-disable-next-line
	    swiper._clientLeft = swiper.wrapperEl.clientLeft;
	    if (swiper.activeIndex === swiper.slides.length - 1 && params.cssMode) {
	      requestAnimationFrame(() => {
	        swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
	      });
	      return true;
	    }
	  }
	  if (params.rewind && swiper.isEnd) {
	    return swiper.slideTo(0, speed, runCallbacks, internal);
	  }
	  return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
	}

	/* eslint no-unused-vars: "off" */
	function slidePrev(speed, runCallbacks, internal) {
	  if (runCallbacks === void 0) {
	    runCallbacks = true;
	  }
	  const swiper = this;
	  const {
	    params,
	    snapGrid,
	    slidesGrid,
	    rtlTranslate,
	    enabled,
	    animating
	  } = swiper;
	  if (!enabled || swiper.destroyed) return swiper;
	  if (typeof speed === 'undefined') {
	    speed = swiper.params.speed;
	  }
	  const isVirtual = swiper.virtual && params.virtual.enabled;
	  if (params.loop) {
	    if (animating && !isVirtual && params.loopPreventsSliding) return false;
	    swiper.loopFix({
	      direction: 'prev'
	    });
	    // eslint-disable-next-line
	    swiper._clientLeft = swiper.wrapperEl.clientLeft;
	  }
	  const translate = rtlTranslate ? swiper.translate : -swiper.translate;
	  function normalize(val) {
	    if (val < 0) return -Math.floor(Math.abs(val));
	    return Math.floor(val);
	  }
	  const normalizedTranslate = normalize(translate);
	  const normalizedSnapGrid = snapGrid.map(val => normalize(val));
	  const isFreeMode = params.freeMode && params.freeMode.enabled;
	  let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
	  if (typeof prevSnap === 'undefined' && (params.cssMode || isFreeMode)) {
	    let prevSnapIndex;
	    snapGrid.forEach((snap, snapIndex) => {
	      if (normalizedTranslate >= snap) {
	        // prevSnap = snap;
	        prevSnapIndex = snapIndex;
	      }
	    });
	    if (typeof prevSnapIndex !== 'undefined') {
	      prevSnap = isFreeMode ? snapGrid[prevSnapIndex] : snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
	    }
	  }
	  let prevIndex = 0;
	  if (typeof prevSnap !== 'undefined') {
	    prevIndex = slidesGrid.indexOf(prevSnap);
	    if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
	    if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
	      prevIndex = prevIndex - swiper.slidesPerViewDynamic('previous', true) + 1;
	      prevIndex = Math.max(prevIndex, 0);
	    }
	  }
	  if (params.rewind && swiper.isBeginning) {
	    const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
	    return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
	  } else if (params.loop && swiper.activeIndex === 0 && params.cssMode) {
	    requestAnimationFrame(() => {
	      swiper.slideTo(prevIndex, speed, runCallbacks, internal);
	    });
	    return true;
	  }
	  return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
	}

	/* eslint no-unused-vars: "off" */
	function slideReset(speed, runCallbacks, internal) {
	  if (runCallbacks === void 0) {
	    runCallbacks = true;
	  }
	  const swiper = this;
	  if (swiper.destroyed) return;
	  if (typeof speed === 'undefined') {
	    speed = swiper.params.speed;
	  }
	  return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
	}

	/* eslint no-unused-vars: "off" */
	function slideToClosest(speed, runCallbacks, internal, threshold) {
	  if (runCallbacks === void 0) {
	    runCallbacks = true;
	  }
	  if (threshold === void 0) {
	    threshold = 0.5;
	  }
	  const swiper = this;
	  if (swiper.destroyed) return;
	  if (typeof speed === 'undefined') {
	    speed = swiper.params.speed;
	  }
	  let index = swiper.activeIndex;
	  const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
	  const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
	  const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
	  if (translate >= swiper.snapGrid[snapIndex]) {
	    // The current translate is on or after the current snap index, so the choice
	    // is between the current index and the one after it.
	    const currentSnap = swiper.snapGrid[snapIndex];
	    const nextSnap = swiper.snapGrid[snapIndex + 1];
	    if (translate - currentSnap > (nextSnap - currentSnap) * threshold) {
	      index += swiper.params.slidesPerGroup;
	    }
	  } else {
	    // The current translate is before the current snap index, so the choice
	    // is between the current index and the one before it.
	    const prevSnap = swiper.snapGrid[snapIndex - 1];
	    const currentSnap = swiper.snapGrid[snapIndex];
	    if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) {
	      index -= swiper.params.slidesPerGroup;
	    }
	  }
	  index = Math.max(index, 0);
	  index = Math.min(index, swiper.slidesGrid.length - 1);
	  return swiper.slideTo(index, speed, runCallbacks, internal);
	}

	function slideToClickedSlide() {
	  const swiper = this;
	  if (swiper.destroyed) return;
	  const {
	    params,
	    slidesEl
	  } = swiper;
	  const slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
	  let slideToIndex = swiper.clickedIndex;
	  let realIndex;
	  const slideSelector = swiper.isElement ? `swiper-slide` : `.${params.slideClass}`;
	  if (params.loop) {
	    if (swiper.animating) return;
	    realIndex = parseInt(swiper.clickedSlide.getAttribute('data-swiper-slide-index'), 10);
	    if (params.centeredSlides) {
	      if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
	        swiper.loopFix();
	        slideToIndex = swiper.getSlideIndex(elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
	        nextTick(() => {
	          swiper.slideTo(slideToIndex);
	        });
	      } else {
	        swiper.slideTo(slideToIndex);
	      }
	    } else if (slideToIndex > swiper.slides.length - slidesPerView) {
	      swiper.loopFix();
	      slideToIndex = swiper.getSlideIndex(elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
	      nextTick(() => {
	        swiper.slideTo(slideToIndex);
	      });
	    } else {
	      swiper.slideTo(slideToIndex);
	    }
	  } else {
	    swiper.slideTo(slideToIndex);
	  }
	}

	var slide = {
	  slideTo,
	  slideToLoop,
	  slideNext,
	  slidePrev,
	  slideReset,
	  slideToClosest,
	  slideToClickedSlide
	};

	function loopCreate(slideRealIndex) {
	  const swiper = this;
	  const {
	    params,
	    slidesEl
	  } = swiper;
	  if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
	  const initSlides = () => {
	    const slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
	    slides.forEach((el, index) => {
	      el.setAttribute('data-swiper-slide-index', index);
	    });
	  };
	  const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
	  const slidesPerGroup = params.slidesPerGroup * (gridEnabled ? params.grid.rows : 1);
	  const shouldFillGroup = swiper.slides.length % slidesPerGroup !== 0;
	  const shouldFillGrid = gridEnabled && swiper.slides.length % params.grid.rows !== 0;
	  const addBlankSlides = amountOfSlides => {
	    for (let i = 0; i < amountOfSlides; i += 1) {
	      const slideEl = swiper.isElement ? createElement('swiper-slide', [params.slideBlankClass]) : createElement('div', [params.slideClass, params.slideBlankClass]);
	      swiper.slidesEl.append(slideEl);
	    }
	  };
	  if (shouldFillGroup) {
	    if (params.loopAddBlankSlides) {
	      const slidesToAdd = slidesPerGroup - swiper.slides.length % slidesPerGroup;
	      addBlankSlides(slidesToAdd);
	      swiper.recalcSlides();
	      swiper.updateSlides();
	    } else {
	      showWarning('Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)');
	    }
	    initSlides();
	  } else if (shouldFillGrid) {
	    if (params.loopAddBlankSlides) {
	      const slidesToAdd = params.grid.rows - swiper.slides.length % params.grid.rows;
	      addBlankSlides(slidesToAdd);
	      swiper.recalcSlides();
	      swiper.updateSlides();
	    } else {
	      showWarning('Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)');
	    }
	    initSlides();
	  } else {
	    initSlides();
	  }
	  swiper.loopFix({
	    slideRealIndex,
	    direction: params.centeredSlides ? undefined : 'next'
	  });
	}

	function loopFix(_temp) {
	  let {
	    slideRealIndex,
	    slideTo = true,
	    direction,
	    setTranslate,
	    activeSlideIndex,
	    byController,
	    byMousewheel
	  } = _temp === void 0 ? {} : _temp;
	  const swiper = this;
	  if (!swiper.params.loop) return;
	  swiper.emit('beforeLoopFix');
	  const {
	    slides,
	    allowSlidePrev,
	    allowSlideNext,
	    slidesEl,
	    params
	  } = swiper;
	  const {
	    centeredSlides
	  } = params;
	  swiper.allowSlidePrev = true;
	  swiper.allowSlideNext = true;
	  if (swiper.virtual && params.virtual.enabled) {
	    if (slideTo) {
	      if (!params.centeredSlides && swiper.snapIndex === 0) {
	        swiper.slideTo(swiper.virtual.slides.length, 0, false, true);
	      } else if (params.centeredSlides && swiper.snapIndex < params.slidesPerView) {
	        swiper.slideTo(swiper.virtual.slides.length + swiper.snapIndex, 0, false, true);
	      } else if (swiper.snapIndex === swiper.snapGrid.length - 1) {
	        swiper.slideTo(swiper.virtual.slidesBefore, 0, false, true);
	      }
	    }
	    swiper.allowSlidePrev = allowSlidePrev;
	    swiper.allowSlideNext = allowSlideNext;
	    swiper.emit('loopFix');
	    return;
	  }
	  let slidesPerView = params.slidesPerView;
	  if (slidesPerView === 'auto') {
	    slidesPerView = swiper.slidesPerViewDynamic();
	  } else {
	    slidesPerView = Math.ceil(parseFloat(params.slidesPerView, 10));
	    if (centeredSlides && slidesPerView % 2 === 0) {
	      slidesPerView = slidesPerView + 1;
	    }
	  }
	  const slidesPerGroup = params.slidesPerGroupAuto ? slidesPerView : params.slidesPerGroup;
	  let loopedSlides = slidesPerGroup;
	  if (loopedSlides % slidesPerGroup !== 0) {
	    loopedSlides += slidesPerGroup - loopedSlides % slidesPerGroup;
	  }
	  loopedSlides += params.loopAdditionalSlides;
	  swiper.loopedSlides = loopedSlides;
	  const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
	  if (slides.length < slidesPerView + loopedSlides) {
	    showWarning('Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters');
	  } else if (gridEnabled && params.grid.fill === 'row') {
	    showWarning('Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`');
	  }
	  const prependSlidesIndexes = [];
	  const appendSlidesIndexes = [];
	  let activeIndex = swiper.activeIndex;
	  if (typeof activeSlideIndex === 'undefined') {
	    activeSlideIndex = swiper.getSlideIndex(slides.find(el => el.classList.contains(params.slideActiveClass)));
	  } else {
	    activeIndex = activeSlideIndex;
	  }
	  const isNext = direction === 'next' || !direction;
	  const isPrev = direction === 'prev' || !direction;
	  let slidesPrepended = 0;
	  let slidesAppended = 0;
	  const cols = gridEnabled ? Math.ceil(slides.length / params.grid.rows) : slides.length;
	  const activeColIndex = gridEnabled ? slides[activeSlideIndex].column : activeSlideIndex;
	  const activeColIndexWithShift = activeColIndex + (centeredSlides && typeof setTranslate === 'undefined' ? -slidesPerView / 2 + 0.5 : 0);
	  // prepend last slides before start
	  if (activeColIndexWithShift < loopedSlides) {
	    slidesPrepended = Math.max(loopedSlides - activeColIndexWithShift, slidesPerGroup);
	    for (let i = 0; i < loopedSlides - activeColIndexWithShift; i += 1) {
	      const index = i - Math.floor(i / cols) * cols;
	      if (gridEnabled) {
	        const colIndexToPrepend = cols - index - 1;
	        for (let i = slides.length - 1; i >= 0; i -= 1) {
	          if (slides[i].column === colIndexToPrepend) prependSlidesIndexes.push(i);
	        }
	        // slides.forEach((slide, slideIndex) => {
	        //   if (slide.column === colIndexToPrepend) prependSlidesIndexes.push(slideIndex);
	        // });
	      } else {
	        prependSlidesIndexes.push(cols - index - 1);
	      }
	    }
	  } else if (activeColIndexWithShift + slidesPerView > cols - loopedSlides) {
	    slidesAppended = Math.max(activeColIndexWithShift - (cols - loopedSlides * 2), slidesPerGroup);
	    for (let i = 0; i < slidesAppended; i += 1) {
	      const index = i - Math.floor(i / cols) * cols;
	      if (gridEnabled) {
	        slides.forEach((slide, slideIndex) => {
	          if (slide.column === index) appendSlidesIndexes.push(slideIndex);
	        });
	      } else {
	        appendSlidesIndexes.push(index);
	      }
	    }
	  }
	  swiper.__preventObserver__ = true;
	  requestAnimationFrame(() => {
	    swiper.__preventObserver__ = false;
	  });
	  if (isPrev) {
	    prependSlidesIndexes.forEach(index => {
	      slides[index].swiperLoopMoveDOM = true;
	      slidesEl.prepend(slides[index]);
	      slides[index].swiperLoopMoveDOM = false;
	    });
	  }
	  if (isNext) {
	    appendSlidesIndexes.forEach(index => {
	      slides[index].swiperLoopMoveDOM = true;
	      slidesEl.append(slides[index]);
	      slides[index].swiperLoopMoveDOM = false;
	    });
	  }
	  swiper.recalcSlides();
	  if (params.slidesPerView === 'auto') {
	    swiper.updateSlides();
	  } else if (gridEnabled && (prependSlidesIndexes.length > 0 && isPrev || appendSlidesIndexes.length > 0 && isNext)) {
	    swiper.slides.forEach((slide, slideIndex) => {
	      swiper.grid.updateSlide(slideIndex, slide, swiper.slides);
	    });
	  }
	  if (params.watchSlidesProgress) {
	    swiper.updateSlidesOffset();
	  }
	  if (slideTo) {
	    if (prependSlidesIndexes.length > 0 && isPrev) {
	      if (typeof slideRealIndex === 'undefined') {
	        const currentSlideTranslate = swiper.slidesGrid[activeIndex];
	        const newSlideTranslate = swiper.slidesGrid[activeIndex + slidesPrepended];
	        const diff = newSlideTranslate - currentSlideTranslate;
	        if (byMousewheel) {
	          swiper.setTranslate(swiper.translate - diff);
	        } else {
	          swiper.slideTo(activeIndex + Math.ceil(slidesPrepended), 0, false, true);
	          if (setTranslate) {
	            swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
	            swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
	          }
	        }
	      } else {
	        if (setTranslate) {
	          const shift = gridEnabled ? prependSlidesIndexes.length / params.grid.rows : prependSlidesIndexes.length;
	          swiper.slideTo(swiper.activeIndex + shift, 0, false, true);
	          swiper.touchEventsData.currentTranslate = swiper.translate;
	        }
	      }
	    } else if (appendSlidesIndexes.length > 0 && isNext) {
	      if (typeof slideRealIndex === 'undefined') {
	        const currentSlideTranslate = swiper.slidesGrid[activeIndex];
	        const newSlideTranslate = swiper.slidesGrid[activeIndex - slidesAppended];
	        const diff = newSlideTranslate - currentSlideTranslate;
	        if (byMousewheel) {
	          swiper.setTranslate(swiper.translate - diff);
	        } else {
	          swiper.slideTo(activeIndex - slidesAppended, 0, false, true);
	          if (setTranslate) {
	            swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
	            swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
	          }
	        }
	      } else {
	        const shift = gridEnabled ? appendSlidesIndexes.length / params.grid.rows : appendSlidesIndexes.length;
	        swiper.slideTo(swiper.activeIndex - shift, 0, false, true);
	      }
	    }
	  }
	  swiper.allowSlidePrev = allowSlidePrev;
	  swiper.allowSlideNext = allowSlideNext;
	  if (swiper.controller && swiper.controller.control && !byController) {
	    const loopParams = {
	      slideRealIndex,
	      direction,
	      setTranslate,
	      activeSlideIndex,
	      byController: true
	    };
	    if (Array.isArray(swiper.controller.control)) {
	      swiper.controller.control.forEach(c => {
	        if (!c.destroyed && c.params.loop) c.loopFix({
	          ...loopParams,
	          slideTo: c.params.slidesPerView === params.slidesPerView ? slideTo : false
	        });
	      });
	    } else if (swiper.controller.control instanceof swiper.constructor && swiper.controller.control.params.loop) {
	      swiper.controller.control.loopFix({
	        ...loopParams,
	        slideTo: swiper.controller.control.params.slidesPerView === params.slidesPerView ? slideTo : false
	      });
	    }
	  }
	  swiper.emit('loopFix');
	}

	function loopDestroy() {
	  const swiper = this;
	  const {
	    params,
	    slidesEl
	  } = swiper;
	  if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
	  swiper.recalcSlides();
	  const newSlidesOrder = [];
	  swiper.slides.forEach(slideEl => {
	    const index = typeof slideEl.swiperSlideIndex === 'undefined' ? slideEl.getAttribute('data-swiper-slide-index') * 1 : slideEl.swiperSlideIndex;
	    newSlidesOrder[index] = slideEl;
	  });
	  swiper.slides.forEach(slideEl => {
	    slideEl.removeAttribute('data-swiper-slide-index');
	  });
	  newSlidesOrder.forEach(slideEl => {
	    slidesEl.append(slideEl);
	  });
	  swiper.recalcSlides();
	  swiper.slideTo(swiper.realIndex, 0);
	}

	var loop = {
	  loopCreate,
	  loopFix,
	  loopDestroy
	};

	function setGrabCursor(moving) {
	  const swiper = this;
	  if (!swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
	  const el = swiper.params.touchEventsTarget === 'container' ? swiper.el : swiper.wrapperEl;
	  if (swiper.isElement) {
	    swiper.__preventObserver__ = true;
	  }
	  el.style.cursor = 'move';
	  el.style.cursor = moving ? 'grabbing' : 'grab';
	  if (swiper.isElement) {
	    requestAnimationFrame(() => {
	      swiper.__preventObserver__ = false;
	    });
	  }
	}

	function unsetGrabCursor() {
	  const swiper = this;
	  if (swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) {
	    return;
	  }
	  if (swiper.isElement) {
	    swiper.__preventObserver__ = true;
	  }
	  swiper[swiper.params.touchEventsTarget === 'container' ? 'el' : 'wrapperEl'].style.cursor = '';
	  if (swiper.isElement) {
	    requestAnimationFrame(() => {
	      swiper.__preventObserver__ = false;
	    });
	  }
	}

	var grabCursor = {
	  setGrabCursor,
	  unsetGrabCursor
	};

	// Modified from https://stackoverflow.com/questions/54520554/custom-element-getrootnode-closest-function-crossing-multiple-parent-shadowd
	function closestElement(selector, base) {
	  if (base === void 0) {
	    base = this;
	  }
	  function __closestFrom(el) {
	    if (!el || el === getDocument() || el === getWindow()) return null;
	    if (el.assignedSlot) el = el.assignedSlot;
	    const found = el.closest(selector);
	    if (!found && !el.getRootNode) {
	      return null;
	    }
	    return found || __closestFrom(el.getRootNode().host);
	  }
	  return __closestFrom(base);
	}
	function preventEdgeSwipe(swiper, event, startX) {
	  const window = getWindow();
	  const {
	    params
	  } = swiper;
	  const edgeSwipeDetection = params.edgeSwipeDetection;
	  const edgeSwipeThreshold = params.edgeSwipeThreshold;
	  if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) {
	    if (edgeSwipeDetection === 'prevent') {
	      event.preventDefault();
	      return true;
	    }
	    return false;
	  }
	  return true;
	}
	function onTouchStart(event) {
	  const swiper = this;
	  const document = getDocument();
	  let e = event;
	  if (e.originalEvent) e = e.originalEvent;
	  const data = swiper.touchEventsData;
	  if (e.type === 'pointerdown') {
	    if (data.pointerId !== null && data.pointerId !== e.pointerId) {
	      return;
	    }
	    data.pointerId = e.pointerId;
	  } else if (e.type === 'touchstart' && e.targetTouches.length === 1) {
	    data.touchId = e.targetTouches[0].identifier;
	  }
	  if (e.type === 'touchstart') {
	    // don't proceed touch event
	    preventEdgeSwipe(swiper, e, e.targetTouches[0].pageX);
	    return;
	  }
	  const {
	    params,
	    touches,
	    enabled
	  } = swiper;
	  if (!enabled) return;
	  if (!params.simulateTouch && e.pointerType === 'mouse') return;
	  if (swiper.animating && params.preventInteractionOnTransition) {
	    return;
	  }
	  if (!swiper.animating && params.cssMode && params.loop) {
	    swiper.loopFix();
	  }
	  let targetEl = e.target;
	  if (params.touchEventsTarget === 'wrapper') {
	    if (!elementIsChildOf(targetEl, swiper.wrapperEl)) return;
	  }
	  if ('which' in e && e.which === 3) return;
	  if ('button' in e && e.button > 0) return;
	  if (data.isTouched && data.isMoved) return;

	  // change target el for shadow root component
	  const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== '';
	  // eslint-disable-next-line
	  const eventPath = e.composedPath ? e.composedPath() : e.path;
	  if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath) {
	    targetEl = eventPath[0];
	  }
	  const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
	  const isTargetShadow = !!(e.target && e.target.shadowRoot);

	  // use closestElement for shadow root element to get the actual closest for nested shadow root element
	  if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, targetEl) : targetEl.closest(noSwipingSelector))) {
	    swiper.allowClick = true;
	    return;
	  }
	  if (params.swipeHandler) {
	    if (!targetEl.closest(params.swipeHandler)) return;
	  }
	  touches.currentX = e.pageX;
	  touches.currentY = e.pageY;
	  const startX = touches.currentX;
	  const startY = touches.currentY;

	  // Do NOT start if iOS edge swipe is detected. Otherwise iOS app cannot swipe-to-go-back anymore

	  if (!preventEdgeSwipe(swiper, e, startX)) {
	    return;
	  }
	  Object.assign(data, {
	    isTouched: true,
	    isMoved: false,
	    allowTouchCallbacks: true,
	    isScrolling: undefined,
	    startMoving: undefined
	  });
	  touches.startX = startX;
	  touches.startY = startY;
	  data.touchStartTime = now();
	  swiper.allowClick = true;
	  swiper.updateSize();
	  swiper.swipeDirection = undefined;
	  if (params.threshold > 0) data.allowThresholdMove = false;
	  let preventDefault = true;
	  if (targetEl.matches(data.focusableElements)) {
	    preventDefault = false;
	    if (targetEl.nodeName === 'SELECT') {
	      data.isTouched = false;
	    }
	  }
	  if (document.activeElement && document.activeElement.matches(data.focusableElements) && document.activeElement !== targetEl && (e.pointerType === 'mouse' || e.pointerType !== 'mouse' && !targetEl.matches(data.focusableElements))) {
	    document.activeElement.blur();
	  }
	  const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
	  if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !targetEl.isContentEditable) {
	    e.preventDefault();
	  }
	  if (params.freeMode && params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) {
	    swiper.freeMode.onTouchStart();
	  }
	  swiper.emit('touchStart', e);
	}

	function onTouchMove(event) {
	  const document = getDocument();
	  const swiper = this;
	  const data = swiper.touchEventsData;
	  const {
	    params,
	    touches,
	    rtlTranslate: rtl,
	    enabled
	  } = swiper;
	  if (!enabled) return;
	  if (!params.simulateTouch && event.pointerType === 'mouse') return;
	  let e = event;
	  if (e.originalEvent) e = e.originalEvent;
	  if (e.type === 'pointermove') {
	    if (data.touchId !== null) return; // return from pointer if we use touch
	    const id = e.pointerId;
	    if (id !== data.pointerId) return;
	  }
	  let targetTouch;
	  if (e.type === 'touchmove') {
	    targetTouch = [...e.changedTouches].find(t => t.identifier === data.touchId);
	    if (!targetTouch || targetTouch.identifier !== data.touchId) return;
	  } else {
	    targetTouch = e;
	  }
	  if (!data.isTouched) {
	    if (data.startMoving && data.isScrolling) {
	      swiper.emit('touchMoveOpposite', e);
	    }
	    return;
	  }
	  const pageX = targetTouch.pageX;
	  const pageY = targetTouch.pageY;
	  if (e.preventedByNestedSwiper) {
	    touches.startX = pageX;
	    touches.startY = pageY;
	    return;
	  }
	  if (!swiper.allowTouchMove) {
	    if (!e.target.matches(data.focusableElements)) {
	      swiper.allowClick = false;
	    }
	    if (data.isTouched) {
	      Object.assign(touches, {
	        startX: pageX,
	        startY: pageY,
	        currentX: pageX,
	        currentY: pageY
	      });
	      data.touchStartTime = now();
	    }
	    return;
	  }
	  if (params.touchReleaseOnEdges && !params.loop) {
	    if (swiper.isVertical()) {
	      // Vertical
	      if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
	        data.isTouched = false;
	        data.isMoved = false;
	        return;
	      }
	    } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) {
	      return;
	    }
	  }
	  if (document.activeElement && document.activeElement.matches(data.focusableElements) && document.activeElement !== e.target && e.pointerType !== 'mouse') {
	    document.activeElement.blur();
	  }
	  if (document.activeElement) {
	    if (e.target === document.activeElement && e.target.matches(data.focusableElements)) {
	      data.isMoved = true;
	      swiper.allowClick = false;
	      return;
	    }
	  }
	  if (data.allowTouchCallbacks) {
	    swiper.emit('touchMove', e);
	  }
	  touches.previousX = touches.currentX;
	  touches.previousY = touches.currentY;
	  touches.currentX = pageX;
	  touches.currentY = pageY;
	  const diffX = touches.currentX - touches.startX;
	  const diffY = touches.currentY - touches.startY;
	  if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
	  if (typeof data.isScrolling === 'undefined') {
	    let touchAngle;
	    if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {
	      data.isScrolling = false;
	    } else {
	      // eslint-disable-next-line
	      if (diffX * diffX + diffY * diffY >= 25) {
	        touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
	        data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
	      }
	    }
	  }
	  if (data.isScrolling) {
	    swiper.emit('touchMoveOpposite', e);
	  }
	  if (typeof data.startMoving === 'undefined') {
	    if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
	      data.startMoving = true;
	    }
	  }
	  if (data.isScrolling || e.type === 'touchmove' && data.preventTouchMoveFromPointerMove) {
	    data.isTouched = false;
	    return;
	  }
	  if (!data.startMoving) {
	    return;
	  }
	  swiper.allowClick = false;
	  if (!params.cssMode && e.cancelable) {
	    e.preventDefault();
	  }
	  if (params.touchMoveStopPropagation && !params.nested) {
	    e.stopPropagation();
	  }
	  let diff = swiper.isHorizontal() ? diffX : diffY;
	  let touchesDiff = swiper.isHorizontal() ? touches.currentX - touches.previousX : touches.currentY - touches.previousY;
	  if (params.oneWayMovement) {
	    diff = Math.abs(diff) * (rtl ? 1 : -1);
	    touchesDiff = Math.abs(touchesDiff) * (rtl ? 1 : -1);
	  }
	  touches.diff = diff;
	  diff *= params.touchRatio;
	  if (rtl) {
	    diff = -diff;
	    touchesDiff = -touchesDiff;
	  }
	  const prevTouchesDirection = swiper.touchesDirection;
	  swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
	  swiper.touchesDirection = touchesDiff > 0 ? 'prev' : 'next';
	  const isLoop = swiper.params.loop && !params.cssMode;
	  const allowLoopFix = swiper.touchesDirection === 'next' && swiper.allowSlideNext || swiper.touchesDirection === 'prev' && swiper.allowSlidePrev;
	  if (!data.isMoved) {
	    if (isLoop && allowLoopFix) {
	      swiper.loopFix({
	        direction: swiper.swipeDirection
	      });
	    }
	    data.startTranslate = swiper.getTranslate();
	    swiper.setTransition(0);
	    if (swiper.animating) {
	      const evt = new window.CustomEvent('transitionend', {
	        bubbles: true,
	        cancelable: true,
	        detail: {
	          bySwiperTouchMove: true
	        }
	      });
	      swiper.wrapperEl.dispatchEvent(evt);
	    }
	    data.allowMomentumBounce = false;
	    // Grab Cursor
	    if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
	      swiper.setGrabCursor(true);
	    }
	    swiper.emit('sliderFirstMove', e);
	  }
	  let loopFixed;
	  new Date().getTime();
	  if (params._loopSwapReset !== false && data.isMoved && data.allowThresholdMove && prevTouchesDirection !== swiper.touchesDirection && isLoop && allowLoopFix && Math.abs(diff) >= 1) {
	    Object.assign(touches, {
	      startX: pageX,
	      startY: pageY,
	      currentX: pageX,
	      currentY: pageY,
	      startTranslate: data.currentTranslate
	    });
	    data.loopSwapReset = true;
	    data.startTranslate = data.currentTranslate;
	    return;
	  }
	  swiper.emit('sliderMove', e);
	  data.isMoved = true;
	  data.currentTranslate = diff + data.startTranslate;
	  let disableParentSwiper = true;
	  let resistanceRatio = params.resistanceRatio;
	  if (params.touchReleaseOnEdges) {
	    resistanceRatio = 0;
	  }
	  if (diff > 0) {
	    if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate > (params.centeredSlides ? swiper.minTranslate() - swiper.slidesSizesGrid[swiper.activeIndex + 1] - (params.slidesPerView !== 'auto' && swiper.slides.length - params.slidesPerView >= 2 ? swiper.slidesSizesGrid[swiper.activeIndex + 1] + swiper.params.spaceBetween : 0) - swiper.params.spaceBetween : swiper.minTranslate())) {
	      swiper.loopFix({
	        direction: 'prev',
	        setTranslate: true,
	        activeSlideIndex: 0
	      });
	    }
	    if (data.currentTranslate > swiper.minTranslate()) {
	      disableParentSwiper = false;
	      if (params.resistance) {
	        data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
	      }
	    }
	  } else if (diff < 0) {
	    if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate < (params.centeredSlides ? swiper.maxTranslate() + swiper.slidesSizesGrid[swiper.slidesSizesGrid.length - 1] + swiper.params.spaceBetween + (params.slidesPerView !== 'auto' && swiper.slides.length - params.slidesPerView >= 2 ? swiper.slidesSizesGrid[swiper.slidesSizesGrid.length - 1] + swiper.params.spaceBetween : 0) : swiper.maxTranslate())) {
	      swiper.loopFix({
	        direction: 'next',
	        setTranslate: true,
	        activeSlideIndex: swiper.slides.length - (params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10)))
	      });
	    }
	    if (data.currentTranslate < swiper.maxTranslate()) {
	      disableParentSwiper = false;
	      if (params.resistance) {
	        data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
	      }
	    }
	  }
	  if (disableParentSwiper) {
	    e.preventedByNestedSwiper = true;
	  }

	  // Directions locks
	  if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) {
	    data.currentTranslate = data.startTranslate;
	  }
	  if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) {
	    data.currentTranslate = data.startTranslate;
	  }
	  if (!swiper.allowSlidePrev && !swiper.allowSlideNext) {
	    data.currentTranslate = data.startTranslate;
	  }

	  // Threshold
	  if (params.threshold > 0) {
	    if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
	      if (!data.allowThresholdMove) {
	        data.allowThresholdMove = true;
	        touches.startX = touches.currentX;
	        touches.startY = touches.currentY;
	        data.currentTranslate = data.startTranslate;
	        touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
	        return;
	      }
	    } else {
	      data.currentTranslate = data.startTranslate;
	      return;
	    }
	  }
	  if (!params.followFinger || params.cssMode) return;

	  // Update active index in free mode
	  if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
	    swiper.updateActiveIndex();
	    swiper.updateSlidesClasses();
	  }
	  if (params.freeMode && params.freeMode.enabled && swiper.freeMode) {
	    swiper.freeMode.onTouchMove();
	  }
	  // Update progress
	  swiper.updateProgress(data.currentTranslate);
	  // Update translate
	  swiper.setTranslate(data.currentTranslate);
	}

	function onTouchEnd(event) {
	  const swiper = this;
	  const data = swiper.touchEventsData;
	  let e = event;
	  if (e.originalEvent) e = e.originalEvent;
	  let targetTouch;
	  const isTouchEvent = e.type === 'touchend' || e.type === 'touchcancel';
	  if (!isTouchEvent) {
	    if (data.touchId !== null) return; // return from pointer if we use touch
	    if (e.pointerId !== data.pointerId) return;
	    targetTouch = e;
	  } else {
	    targetTouch = [...e.changedTouches].find(t => t.identifier === data.touchId);
	    if (!targetTouch || targetTouch.identifier !== data.touchId) return;
	  }
	  if (['pointercancel', 'pointerout', 'pointerleave', 'contextmenu'].includes(e.type)) {
	    const proceed = ['pointercancel', 'contextmenu'].includes(e.type) && (swiper.browser.isSafari || swiper.browser.isWebView);
	    if (!proceed) {
	      return;
	    }
	  }
	  data.pointerId = null;
	  data.touchId = null;
	  const {
	    params,
	    touches,
	    rtlTranslate: rtl,
	    slidesGrid,
	    enabled
	  } = swiper;
	  if (!enabled) return;
	  if (!params.simulateTouch && e.pointerType === 'mouse') return;
	  if (data.allowTouchCallbacks) {
	    swiper.emit('touchEnd', e);
	  }
	  data.allowTouchCallbacks = false;
	  if (!data.isTouched) {
	    if (data.isMoved && params.grabCursor) {
	      swiper.setGrabCursor(false);
	    }
	    data.isMoved = false;
	    data.startMoving = false;
	    return;
	  }

	  // Return Grab Cursor
	  if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
	    swiper.setGrabCursor(false);
	  }

	  // Time diff
	  const touchEndTime = now();
	  const timeDiff = touchEndTime - data.touchStartTime;

	  // Tap, doubleTap, Click
	  if (swiper.allowClick) {
	    const pathTree = e.path || e.composedPath && e.composedPath();
	    swiper.updateClickedSlide(pathTree && pathTree[0] || e.target, pathTree);
	    swiper.emit('tap click', e);
	    if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
	      swiper.emit('doubleTap doubleClick', e);
	    }
	  }
	  data.lastClickTime = now();
	  nextTick(() => {
	    if (!swiper.destroyed) swiper.allowClick = true;
	  });
	  if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 && !data.loopSwapReset || data.currentTranslate === data.startTranslate && !data.loopSwapReset) {
	    data.isTouched = false;
	    data.isMoved = false;
	    data.startMoving = false;
	    return;
	  }
	  data.isTouched = false;
	  data.isMoved = false;
	  data.startMoving = false;
	  let currentPos;
	  if (params.followFinger) {
	    currentPos = rtl ? swiper.translate : -swiper.translate;
	  } else {
	    currentPos = -data.currentTranslate;
	  }
	  if (params.cssMode) {
	    return;
	  }
	  if (params.freeMode && params.freeMode.enabled) {
	    swiper.freeMode.onTouchEnd({
	      currentPos
	    });
	    return;
	  }

	  // Find current slide
	  const swipeToLast = currentPos >= -swiper.maxTranslate() && !swiper.params.loop;
	  let stopIndex = 0;
	  let groupSize = swiper.slidesSizesGrid[0];
	  for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
	    const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
	    if (typeof slidesGrid[i + increment] !== 'undefined') {
	      if (swipeToLast || currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
	        stopIndex = i;
	        groupSize = slidesGrid[i + increment] - slidesGrid[i];
	      }
	    } else if (swipeToLast || currentPos >= slidesGrid[i]) {
	      stopIndex = i;
	      groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
	    }
	  }
	  let rewindFirstIndex = null;
	  let rewindLastIndex = null;
	  if (params.rewind) {
	    if (swiper.isBeginning) {
	      rewindLastIndex = params.virtual && params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
	    } else if (swiper.isEnd) {
	      rewindFirstIndex = 0;
	    }
	  }
	  // Find current slide size
	  const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
	  const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
	  if (timeDiff > params.longSwipesMs) {
	    // Long touches
	    if (!params.longSwipes) {
	      swiper.slideTo(swiper.activeIndex);
	      return;
	    }
	    if (swiper.swipeDirection === 'next') {
	      if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment);else swiper.slideTo(stopIndex);
	    }
	    if (swiper.swipeDirection === 'prev') {
	      if (ratio > 1 - params.longSwipesRatio) {
	        swiper.slideTo(stopIndex + increment);
	      } else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) {
	        swiper.slideTo(rewindLastIndex);
	      } else {
	        swiper.slideTo(stopIndex);
	      }
	    }
	  } else {
	    // Short swipes
	    if (!params.shortSwipes) {
	      swiper.slideTo(swiper.activeIndex);
	      return;
	    }
	    const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
	    if (!isNavButtonTarget) {
	      if (swiper.swipeDirection === 'next') {
	        swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
	      }
	      if (swiper.swipeDirection === 'prev') {
	        swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
	      }
	    } else if (e.target === swiper.navigation.nextEl) {
	      swiper.slideTo(stopIndex + increment);
	    } else {
	      swiper.slideTo(stopIndex);
	    }
	  }
	}

	function onResize() {
	  const swiper = this;
	  const {
	    params,
	    el
	  } = swiper;
	  if (el && el.offsetWidth === 0) return;

	  // Breakpoints
	  if (params.breakpoints) {
	    swiper.setBreakpoint();
	  }

	  // Save locks
	  const {
	    allowSlideNext,
	    allowSlidePrev,
	    snapGrid
	  } = swiper;
	  const isVirtual = swiper.virtual && swiper.params.virtual.enabled;

	  // Disable locks on resize
	  swiper.allowSlideNext = true;
	  swiper.allowSlidePrev = true;
	  swiper.updateSize();
	  swiper.updateSlides();
	  swiper.updateSlidesClasses();
	  const isVirtualLoop = isVirtual && params.loop;
	  if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides && !isVirtualLoop) {
	    swiper.slideTo(swiper.slides.length - 1, 0, false, true);
	  } else {
	    if (swiper.params.loop && !isVirtual) {
	      swiper.slideToLoop(swiper.realIndex, 0, false, true);
	    } else {
	      swiper.slideTo(swiper.activeIndex, 0, false, true);
	    }
	  }
	  if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
	    clearTimeout(swiper.autoplay.resizeTimeout);
	    swiper.autoplay.resizeTimeout = setTimeout(() => {
	      if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
	        swiper.autoplay.resume();
	      }
	    }, 500);
	  }
	  // Return locks after resize
	  swiper.allowSlidePrev = allowSlidePrev;
	  swiper.allowSlideNext = allowSlideNext;
	  if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
	    swiper.checkOverflow();
	  }
	}

	function onClick(e) {
	  const swiper = this;
	  if (!swiper.enabled) return;
	  if (!swiper.allowClick) {
	    if (swiper.params.preventClicks) e.preventDefault();
	    if (swiper.params.preventClicksPropagation && swiper.animating) {
	      e.stopPropagation();
	      e.stopImmediatePropagation();
	    }
	  }
	}

	function onScroll() {
	  const swiper = this;
	  const {
	    wrapperEl,
	    rtlTranslate,
	    enabled
	  } = swiper;
	  if (!enabled) return;
	  swiper.previousTranslate = swiper.translate;
	  if (swiper.isHorizontal()) {
	    swiper.translate = -wrapperEl.scrollLeft;
	  } else {
	    swiper.translate = -wrapperEl.scrollTop;
	  }
	  // eslint-disable-next-line
	  if (swiper.translate === 0) swiper.translate = 0;
	  swiper.updateActiveIndex();
	  swiper.updateSlidesClasses();
	  let newProgress;
	  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
	  if (translatesDiff === 0) {
	    newProgress = 0;
	  } else {
	    newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
	  }
	  if (newProgress !== swiper.progress) {
	    swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
	  }
	  swiper.emit('setTranslate', swiper.translate, false);
	}

	function onLoad(e) {
	  const swiper = this;
	  processLazyPreloader(swiper, e.target);
	  if (swiper.params.cssMode || swiper.params.slidesPerView !== 'auto' && !swiper.params.autoHeight) {
	    return;
	  }
	  swiper.update();
	}

	function onDocumentTouchStart() {
	  const swiper = this;
	  if (swiper.documentTouchHandlerProceeded) return;
	  swiper.documentTouchHandlerProceeded = true;
	  if (swiper.params.touchReleaseOnEdges) {
	    swiper.el.style.touchAction = 'auto';
	  }
	}

	const events = (swiper, method) => {
	  const document = getDocument();
	  const {
	    params,
	    el,
	    wrapperEl,
	    device
	  } = swiper;
	  const capture = !!params.nested;
	  const domMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';
	  const swiperMethod = method;
	  if (!el || typeof el === 'string') return;

	  // Touch Events
	  document[domMethod]('touchstart', swiper.onDocumentTouchStart, {
	    passive: false,
	    capture
	  });
	  el[domMethod]('touchstart', swiper.onTouchStart, {
	    passive: false
	  });
	  el[domMethod]('pointerdown', swiper.onTouchStart, {
	    passive: false
	  });
	  document[domMethod]('touchmove', swiper.onTouchMove, {
	    passive: false,
	    capture
	  });
	  document[domMethod]('pointermove', swiper.onTouchMove, {
	    passive: false,
	    capture
	  });
	  document[domMethod]('touchend', swiper.onTouchEnd, {
	    passive: true
	  });
	  document[domMethod]('pointerup', swiper.onTouchEnd, {
	    passive: true
	  });
	  document[domMethod]('pointercancel', swiper.onTouchEnd, {
	    passive: true
	  });
	  document[domMethod]('touchcancel', swiper.onTouchEnd, {
	    passive: true
	  });
	  document[domMethod]('pointerout', swiper.onTouchEnd, {
	    passive: true
	  });
	  document[domMethod]('pointerleave', swiper.onTouchEnd, {
	    passive: true
	  });
	  document[domMethod]('contextmenu', swiper.onTouchEnd, {
	    passive: true
	  });

	  // Prevent Links Clicks
	  if (params.preventClicks || params.preventClicksPropagation) {
	    el[domMethod]('click', swiper.onClick, true);
	  }
	  if (params.cssMode) {
	    wrapperEl[domMethod]('scroll', swiper.onScroll);
	  }

	  // Resize handler
	  if (params.updateOnWindowResize) {
	    swiper[swiperMethod](device.ios || device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', onResize, true);
	  } else {
	    swiper[swiperMethod]('observerUpdate', onResize, true);
	  }

	  // Images loader
	  el[domMethod]('load', swiper.onLoad, {
	    capture: true
	  });
	};
	function attachEvents() {
	  const swiper = this;
	  const {
	    params
	  } = swiper;
	  swiper.onTouchStart = onTouchStart.bind(swiper);
	  swiper.onTouchMove = onTouchMove.bind(swiper);
	  swiper.onTouchEnd = onTouchEnd.bind(swiper);
	  swiper.onDocumentTouchStart = onDocumentTouchStart.bind(swiper);
	  if (params.cssMode) {
	    swiper.onScroll = onScroll.bind(swiper);
	  }
	  swiper.onClick = onClick.bind(swiper);
	  swiper.onLoad = onLoad.bind(swiper);
	  events(swiper, 'on');
	}
	function detachEvents() {
	  const swiper = this;
	  events(swiper, 'off');
	}
	var events$1 = {
	  attachEvents,
	  detachEvents
	};

	const isGridEnabled = (swiper, params) => {
	  return swiper.grid && params.grid && params.grid.rows > 1;
	};
	function setBreakpoint() {
	  const swiper = this;
	  const {
	    realIndex,
	    initialized,
	    params,
	    el
	  } = swiper;
	  const breakpoints = params.breakpoints;
	  if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return;
	  const document = getDocument();

	  // Get breakpoint for window/container width and update parameters
	  const breakpointsBase = params.breakpointsBase === 'window' || !params.breakpointsBase ? params.breakpointsBase : 'container';
	  const breakpointContainer = ['window', 'container'].includes(params.breakpointsBase) || !params.breakpointsBase ? swiper.el : document.querySelector(params.breakpointsBase);
	  const breakpoint = swiper.getBreakpoint(breakpoints, breakpointsBase, breakpointContainer);
	  if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
	  const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;
	  const breakpointParams = breakpointOnlyParams || swiper.originalParams;
	  const wasMultiRow = isGridEnabled(swiper, params);
	  const isMultiRow = isGridEnabled(swiper, breakpointParams);
	  const wasGrabCursor = swiper.params.grabCursor;
	  const isGrabCursor = breakpointParams.grabCursor;
	  const wasEnabled = params.enabled;
	  if (wasMultiRow && !isMultiRow) {
	    el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
	    swiper.emitContainerClasses();
	  } else if (!wasMultiRow && isMultiRow) {
	    el.classList.add(`${params.containerModifierClass}grid`);
	    if (breakpointParams.grid.fill && breakpointParams.grid.fill === 'column' || !breakpointParams.grid.fill && params.grid.fill === 'column') {
	      el.classList.add(`${params.containerModifierClass}grid-column`);
	    }
	    swiper.emitContainerClasses();
	  }
	  if (wasGrabCursor && !isGrabCursor) {
	    swiper.unsetGrabCursor();
	  } else if (!wasGrabCursor && isGrabCursor) {
	    swiper.setGrabCursor();
	  }

	  // Toggle navigation, pagination, scrollbar
	  ['navigation', 'pagination', 'scrollbar'].forEach(prop => {
	    if (typeof breakpointParams[prop] === 'undefined') return;
	    const wasModuleEnabled = params[prop] && params[prop].enabled;
	    const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
	    if (wasModuleEnabled && !isModuleEnabled) {
	      swiper[prop].disable();
	    }
	    if (!wasModuleEnabled && isModuleEnabled) {
	      swiper[prop].enable();
	    }
	  });
	  const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
	  const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
	  const wasLoop = params.loop;
	  if (directionChanged && initialized) {
	    swiper.changeDirection();
	  }
	  extend(swiper.params, breakpointParams);
	  const isEnabled = swiper.params.enabled;
	  const hasLoop = swiper.params.loop;
	  Object.assign(swiper, {
	    allowTouchMove: swiper.params.allowTouchMove,
	    allowSlideNext: swiper.params.allowSlideNext,
	    allowSlidePrev: swiper.params.allowSlidePrev
	  });
	  if (wasEnabled && !isEnabled) {
	    swiper.disable();
	  } else if (!wasEnabled && isEnabled) {
	    swiper.enable();
	  }
	  swiper.currentBreakpoint = breakpoint;
	  swiper.emit('_beforeBreakpoint', breakpointParams);
	  if (initialized) {
	    if (needsReLoop) {
	      swiper.loopDestroy();
	      swiper.loopCreate(realIndex);
	      swiper.updateSlides();
	    } else if (!wasLoop && hasLoop) {
	      swiper.loopCreate(realIndex);
	      swiper.updateSlides();
	    } else if (wasLoop && !hasLoop) {
	      swiper.loopDestroy();
	    }
	  }
	  swiper.emit('breakpoint', breakpointParams);
	}

	function getBreakpoint(breakpoints, base, containerEl) {
	  if (base === void 0) {
	    base = 'window';
	  }
	  if (!breakpoints || base === 'container' && !containerEl) return undefined;
	  let breakpoint = false;
	  const window = getWindow();
	  const currentHeight = base === 'window' ? window.innerHeight : containerEl.clientHeight;
	  const points = Object.keys(breakpoints).map(point => {
	    if (typeof point === 'string' && point.indexOf('@') === 0) {
	      const minRatio = parseFloat(point.substr(1));
	      const value = currentHeight * minRatio;
	      return {
	        value,
	        point
	      };
	    }
	    return {
	      value: point,
	      point
	    };
	  });
	  points.sort((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10));
	  for (let i = 0; i < points.length; i += 1) {
	    const {
	      point,
	      value
	    } = points[i];
	    if (base === 'window') {
	      if (window.matchMedia(`(min-width: ${value}px)`).matches) {
	        breakpoint = point;
	      }
	    } else if (value <= containerEl.clientWidth) {
	      breakpoint = point;
	    }
	  }
	  return breakpoint || 'max';
	}

	var breakpoints = {
	  setBreakpoint,
	  getBreakpoint
	};

	function prepareClasses(entries, prefix) {
	  const resultClasses = [];
	  entries.forEach(item => {
	    if (typeof item === 'object') {
	      Object.keys(item).forEach(classNames => {
	        if (item[classNames]) {
	          resultClasses.push(prefix + classNames);
	        }
	      });
	    } else if (typeof item === 'string') {
	      resultClasses.push(prefix + item);
	    }
	  });
	  return resultClasses;
	}
	function addClasses() {
	  const swiper = this;
	  const {
	    classNames,
	    params,
	    rtl,
	    el,
	    device
	  } = swiper;
	  // prettier-ignore
	  const suffixes = prepareClasses(['initialized', params.direction, {
	    'free-mode': swiper.params.freeMode && params.freeMode.enabled
	  }, {
	    'autoheight': params.autoHeight
	  }, {
	    'rtl': rtl
	  }, {
	    'grid': params.grid && params.grid.rows > 1
	  }, {
	    'grid-column': params.grid && params.grid.rows > 1 && params.grid.fill === 'column'
	  }, {
	    'android': device.android
	  }, {
	    'ios': device.ios
	  }, {
	    'css-mode': params.cssMode
	  }, {
	    'centered': params.cssMode && params.centeredSlides
	  }, {
	    'watch-progress': params.watchSlidesProgress
	  }], params.containerModifierClass);
	  classNames.push(...suffixes);
	  el.classList.add(...classNames);
	  swiper.emitContainerClasses();
	}

	function removeClasses() {
	  const swiper = this;
	  const {
	    el,
	    classNames
	  } = swiper;
	  if (!el || typeof el === 'string') return;
	  el.classList.remove(...classNames);
	  swiper.emitContainerClasses();
	}

	var classes = {
	  addClasses,
	  removeClasses
	};

	function checkOverflow() {
	  const swiper = this;
	  const {
	    isLocked: wasLocked,
	    params
	  } = swiper;
	  const {
	    slidesOffsetBefore
	  } = params;
	  if (slidesOffsetBefore) {
	    const lastSlideIndex = swiper.slides.length - 1;
	    const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
	    swiper.isLocked = swiper.size > lastSlideRightEdge;
	  } else {
	    swiper.isLocked = swiper.snapGrid.length === 1;
	  }
	  if (params.allowSlideNext === true) {
	    swiper.allowSlideNext = !swiper.isLocked;
	  }
	  if (params.allowSlidePrev === true) {
	    swiper.allowSlidePrev = !swiper.isLocked;
	  }
	  if (wasLocked && wasLocked !== swiper.isLocked) {
	    swiper.isEnd = false;
	  }
	  if (wasLocked !== swiper.isLocked) {
	    swiper.emit(swiper.isLocked ? 'lock' : 'unlock');
	  }
	}
	var checkOverflow$1 = {
	  checkOverflow
	};

	var defaults = {
	  init: true,
	  direction: 'horizontal',
	  oneWayMovement: false,
	  swiperElementNodeName: 'SWIPER-CONTAINER',
	  touchEventsTarget: 'wrapper',
	  initialSlide: 0,
	  speed: 300,
	  cssMode: false,
	  updateOnWindowResize: true,
	  resizeObserver: true,
	  nested: false,
	  createElements: false,
	  eventsPrefix: 'swiper',
	  enabled: true,
	  focusableElements: 'input, select, option, textarea, button, video, label',
	  // Overrides
	  width: null,
	  height: null,
	  //
	  preventInteractionOnTransition: false,
	  // ssr
	  userAgent: null,
	  url: null,
	  // To support iOS's swipe-to-go-back gesture (when being used in-app).
	  edgeSwipeDetection: false,
	  edgeSwipeThreshold: 20,
	  // Autoheight
	  autoHeight: false,
	  // Set wrapper width
	  setWrapperSize: false,
	  // Virtual Translate
	  virtualTranslate: false,
	  // Effects
	  effect: 'slide',
	  // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'

	  // Breakpoints
	  breakpoints: undefined,
	  breakpointsBase: 'window',
	  // Slides grid
	  spaceBetween: 0,
	  slidesPerView: 1,
	  slidesPerGroup: 1,
	  slidesPerGroupSkip: 0,
	  slidesPerGroupAuto: false,
	  centeredSlides: false,
	  centeredSlidesBounds: false,
	  slidesOffsetBefore: 0,
	  // in px
	  slidesOffsetAfter: 0,
	  // in px
	  normalizeSlideIndex: true,
	  centerInsufficientSlides: false,
	  // Disable swiper and hide navigation when container not overflow
	  watchOverflow: true,
	  // Round length
	  roundLengths: false,
	  // Touches
	  touchRatio: 1,
	  touchAngle: 45,
	  simulateTouch: true,
	  shortSwipes: true,
	  longSwipes: true,
	  longSwipesRatio: 0.5,
	  longSwipesMs: 300,
	  followFinger: true,
	  allowTouchMove: true,
	  threshold: 5,
	  touchMoveStopPropagation: false,
	  touchStartPreventDefault: true,
	  touchStartForcePreventDefault: false,
	  touchReleaseOnEdges: false,
	  // Unique Navigation Elements
	  uniqueNavElements: true,
	  // Resistance
	  resistance: true,
	  resistanceRatio: 0.85,
	  // Progress
	  watchSlidesProgress: false,
	  // Cursor
	  grabCursor: false,
	  // Clicks
	  preventClicks: true,
	  preventClicksPropagation: true,
	  slideToClickedSlide: false,
	  // loop
	  loop: false,
	  loopAddBlankSlides: true,
	  loopAdditionalSlides: 0,
	  loopPreventsSliding: true,
	  // rewind
	  rewind: false,
	  // Swiping/no swiping
	  allowSlidePrev: true,
	  allowSlideNext: true,
	  swipeHandler: null,
	  // '.swipe-handler',
	  noSwiping: true,
	  noSwipingClass: 'swiper-no-swiping',
	  noSwipingSelector: null,
	  // Passive Listeners
	  passiveListeners: true,
	  maxBackfaceHiddenSlides: 10,
	  // NS
	  containerModifierClass: 'swiper-',
	  // NEW
	  slideClass: 'swiper-slide',
	  slideBlankClass: 'swiper-slide-blank',
	  slideActiveClass: 'swiper-slide-active',
	  slideVisibleClass: 'swiper-slide-visible',
	  slideFullyVisibleClass: 'swiper-slide-fully-visible',
	  slideNextClass: 'swiper-slide-next',
	  slidePrevClass: 'swiper-slide-prev',
	  wrapperClass: 'swiper-wrapper',
	  lazyPreloaderClass: 'swiper-lazy-preloader',
	  lazyPreloadPrevNext: 0,
	  // Callbacks
	  runCallbacksOnInit: true,
	  // Internals
	  _emitClasses: false
	};

	function moduleExtendParams(params, allModulesParams) {
	  return function extendParams(obj) {
	    if (obj === void 0) {
	      obj = {};
	    }
	    const moduleParamName = Object.keys(obj)[0];
	    const moduleParams = obj[moduleParamName];
	    if (typeof moduleParams !== 'object' || moduleParams === null) {
	      extend(allModulesParams, obj);
	      return;
	    }
	    if (params[moduleParamName] === true) {
	      params[moduleParamName] = {
	        enabled: true
	      };
	    }
	    if (moduleParamName === 'navigation' && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].prevEl && !params[moduleParamName].nextEl) {
	      params[moduleParamName].auto = true;
	    }
	    if (['pagination', 'scrollbar'].indexOf(moduleParamName) >= 0 && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].el) {
	      params[moduleParamName].auto = true;
	    }
	    if (!(moduleParamName in params && 'enabled' in moduleParams)) {
	      extend(allModulesParams, obj);
	      return;
	    }
	    if (typeof params[moduleParamName] === 'object' && !('enabled' in params[moduleParamName])) {
	      params[moduleParamName].enabled = true;
	    }
	    if (!params[moduleParamName]) params[moduleParamName] = {
	      enabled: false
	    };
	    extend(allModulesParams, obj);
	  };
	}

	/* eslint no-param-reassign: "off" */
	const prototypes = {
	  eventsEmitter,
	  update,
	  translate,
	  transition,
	  slide,
	  loop,
	  grabCursor,
	  events: events$1,
	  breakpoints,
	  checkOverflow: checkOverflow$1,
	  classes
	};
	const extendedDefaults = {};
	class Swiper {
	  constructor() {
	    let el;
	    let params;
	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	    if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === 'Object') {
	      params = args[0];
	    } else {
	      [el, params] = args;
	    }
	    if (!params) params = {};
	    params = extend({}, params);
	    if (el && !params.el) params.el = el;
	    const document = getDocument();
	    if (params.el && typeof params.el === 'string' && document.querySelectorAll(params.el).length > 1) {
	      const swipers = [];
	      document.querySelectorAll(params.el).forEach(containerEl => {
	        const newParams = extend({}, params, {
	          el: containerEl
	        });
	        swipers.push(new Swiper(newParams));
	      });
	      // eslint-disable-next-line no-constructor-return
	      return swipers;
	    }

	    // Swiper Instance
	    const swiper = this;
	    swiper.__swiper__ = true;
	    swiper.support = getSupport();
	    swiper.device = getDevice({
	      userAgent: params.userAgent
	    });
	    swiper.browser = getBrowser();
	    swiper.eventsListeners = {};
	    swiper.eventsAnyListeners = [];
	    swiper.modules = [...swiper.__modules__];
	    if (params.modules && Array.isArray(params.modules)) {
	      swiper.modules.push(...params.modules);
	    }
	    const allModulesParams = {};
	    swiper.modules.forEach(mod => {
	      mod({
	        params,
	        swiper,
	        extendParams: moduleExtendParams(params, allModulesParams),
	        on: swiper.on.bind(swiper),
	        once: swiper.once.bind(swiper),
	        off: swiper.off.bind(swiper),
	        emit: swiper.emit.bind(swiper)
	      });
	    });

	    // Extend defaults with modules params
	    const swiperParams = extend({}, defaults, allModulesParams);

	    // Extend defaults with passed params
	    swiper.params = extend({}, swiperParams, extendedDefaults, params);
	    swiper.originalParams = extend({}, swiper.params);
	    swiper.passedParams = extend({}, params);

	    // add event listeners
	    if (swiper.params && swiper.params.on) {
	      Object.keys(swiper.params.on).forEach(eventName => {
	        swiper.on(eventName, swiper.params.on[eventName]);
	      });
	    }
	    if (swiper.params && swiper.params.onAny) {
	      swiper.onAny(swiper.params.onAny);
	    }

	    // Extend Swiper
	    Object.assign(swiper, {
	      enabled: swiper.params.enabled,
	      el,
	      // Classes
	      classNames: [],
	      // Slides
	      slides: [],
	      slidesGrid: [],
	      snapGrid: [],
	      slidesSizesGrid: [],
	      // isDirection
	      isHorizontal() {
	        return swiper.params.direction === 'horizontal';
	      },
	      isVertical() {
	        return swiper.params.direction === 'vertical';
	      },
	      // Indexes
	      activeIndex: 0,
	      realIndex: 0,
	      //
	      isBeginning: true,
	      isEnd: false,
	      // Props
	      translate: 0,
	      previousTranslate: 0,
	      progress: 0,
	      velocity: 0,
	      animating: false,
	      cssOverflowAdjustment() {
	        // Returns 0 unless `translate` is > 2**23
	        // Should be subtracted from css values to prevent overflow
	        return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
	      },
	      // Locks
	      allowSlideNext: swiper.params.allowSlideNext,
	      allowSlidePrev: swiper.params.allowSlidePrev,
	      // Touch Events
	      touchEventsData: {
	        isTouched: undefined,
	        isMoved: undefined,
	        allowTouchCallbacks: undefined,
	        touchStartTime: undefined,
	        isScrolling: undefined,
	        currentTranslate: undefined,
	        startTranslate: undefined,
	        allowThresholdMove: undefined,
	        // Form elements to match
	        focusableElements: swiper.params.focusableElements,
	        // Last click time
	        lastClickTime: 0,
	        clickTimeout: undefined,
	        // Velocities
	        velocities: [],
	        allowMomentumBounce: undefined,
	        startMoving: undefined,
	        pointerId: null,
	        touchId: null
	      },
	      // Clicks
	      allowClick: true,
	      // Touches
	      allowTouchMove: swiper.params.allowTouchMove,
	      touches: {
	        startX: 0,
	        startY: 0,
	        currentX: 0,
	        currentY: 0,
	        diff: 0
	      },
	      // Images
	      imagesToLoad: [],
	      imagesLoaded: 0
	    });
	    swiper.emit('_swiper');

	    // Init
	    if (swiper.params.init) {
	      swiper.init();
	    }

	    // Return app instance
	    // eslint-disable-next-line no-constructor-return
	    return swiper;
	  }
	  getDirectionLabel(property) {
	    if (this.isHorizontal()) {
	      return property;
	    }
	    // prettier-ignore
	    return {
	      'width': 'height',
	      'margin-top': 'margin-left',
	      'margin-bottom ': 'margin-right',
	      'margin-left': 'margin-top',
	      'margin-right': 'margin-bottom',
	      'padding-left': 'padding-top',
	      'padding-right': 'padding-bottom',
	      'marginRight': 'marginBottom'
	    }[property];
	  }
	  getSlideIndex(slideEl) {
	    const {
	      slidesEl,
	      params
	    } = this;
	    const slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
	    const firstSlideIndex = elementIndex(slides[0]);
	    return elementIndex(slideEl) - firstSlideIndex;
	  }
	  getSlideIndexByData(index) {
	    return this.getSlideIndex(this.slides.find(slideEl => slideEl.getAttribute('data-swiper-slide-index') * 1 === index));
	  }
	  recalcSlides() {
	    const swiper = this;
	    const {
	      slidesEl,
	      params
	    } = swiper;
	    swiper.slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
	  }
	  enable() {
	    const swiper = this;
	    if (swiper.enabled) return;
	    swiper.enabled = true;
	    if (swiper.params.grabCursor) {
	      swiper.setGrabCursor();
	    }
	    swiper.emit('enable');
	  }
	  disable() {
	    const swiper = this;
	    if (!swiper.enabled) return;
	    swiper.enabled = false;
	    if (swiper.params.grabCursor) {
	      swiper.unsetGrabCursor();
	    }
	    swiper.emit('disable');
	  }
	  setProgress(progress, speed) {
	    const swiper = this;
	    progress = Math.min(Math.max(progress, 0), 1);
	    const min = swiper.minTranslate();
	    const max = swiper.maxTranslate();
	    const current = (max - min) * progress + min;
	    swiper.translateTo(current, typeof speed === 'undefined' ? 0 : speed);
	    swiper.updateActiveIndex();
	    swiper.updateSlidesClasses();
	  }
	  emitContainerClasses() {
	    const swiper = this;
	    if (!swiper.params._emitClasses || !swiper.el) return;
	    const cls = swiper.el.className.split(' ').filter(className => {
	      return className.indexOf('swiper') === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
	    });
	    swiper.emit('_containerClasses', cls.join(' '));
	  }
	  getSlideClasses(slideEl) {
	    const swiper = this;
	    if (swiper.destroyed) return '';
	    return slideEl.className.split(' ').filter(className => {
	      return className.indexOf('swiper-slide') === 0 || className.indexOf(swiper.params.slideClass) === 0;
	    }).join(' ');
	  }
	  emitSlidesClasses() {
	    const swiper = this;
	    if (!swiper.params._emitClasses || !swiper.el) return;
	    const updates = [];
	    swiper.slides.forEach(slideEl => {
	      const classNames = swiper.getSlideClasses(slideEl);
	      updates.push({
	        slideEl,
	        classNames
	      });
	      swiper.emit('_slideClass', slideEl, classNames);
	    });
	    swiper.emit('_slideClasses', updates);
	  }
	  slidesPerViewDynamic(view, exact) {
	    if (view === void 0) {
	      view = 'current';
	    }
	    if (exact === void 0) {
	      exact = false;
	    }
	    const swiper = this;
	    const {
	      params,
	      slides,
	      slidesGrid,
	      slidesSizesGrid,
	      size: swiperSize,
	      activeIndex
	    } = swiper;
	    let spv = 1;
	    if (typeof params.slidesPerView === 'number') return params.slidesPerView;
	    if (params.centeredSlides) {
	      let slideSize = slides[activeIndex] ? Math.ceil(slides[activeIndex].swiperSlideSize) : 0;
	      let breakLoop;
	      for (let i = activeIndex + 1; i < slides.length; i += 1) {
	        if (slides[i] && !breakLoop) {
	          slideSize += Math.ceil(slides[i].swiperSlideSize);
	          spv += 1;
	          if (slideSize > swiperSize) breakLoop = true;
	        }
	      }
	      for (let i = activeIndex - 1; i >= 0; i -= 1) {
	        if (slides[i] && !breakLoop) {
	          slideSize += slides[i].swiperSlideSize;
	          spv += 1;
	          if (slideSize > swiperSize) breakLoop = true;
	        }
	      }
	    } else {
	      // eslint-disable-next-line
	      if (view === 'current') {
	        for (let i = activeIndex + 1; i < slides.length; i += 1) {
	          const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
	          if (slideInView) {
	            spv += 1;
	          }
	        }
	      } else {
	        // previous
	        for (let i = activeIndex - 1; i >= 0; i -= 1) {
	          const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
	          if (slideInView) {
	            spv += 1;
	          }
	        }
	      }
	    }
	    return spv;
	  }
	  update() {
	    const swiper = this;
	    if (!swiper || swiper.destroyed) return;
	    const {
	      snapGrid,
	      params
	    } = swiper;
	    // Breakpoints
	    if (params.breakpoints) {
	      swiper.setBreakpoint();
	    }
	    [...swiper.el.querySelectorAll('[loading="lazy"]')].forEach(imageEl => {
	      if (imageEl.complete) {
	        processLazyPreloader(swiper, imageEl);
	      }
	    });
	    swiper.updateSize();
	    swiper.updateSlides();
	    swiper.updateProgress();
	    swiper.updateSlidesClasses();
	    function setTranslate() {
	      const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
	      const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
	      swiper.setTranslate(newTranslate);
	      swiper.updateActiveIndex();
	      swiper.updateSlidesClasses();
	    }
	    let translated;
	    if (params.freeMode && params.freeMode.enabled && !params.cssMode) {
	      setTranslate();
	      if (params.autoHeight) {
	        swiper.updateAutoHeight();
	      }
	    } else {
	      if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !params.centeredSlides) {
	        const slides = swiper.virtual && params.virtual.enabled ? swiper.virtual.slides : swiper.slides;
	        translated = swiper.slideTo(slides.length - 1, 0, false, true);
	      } else {
	        translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
	      }
	      if (!translated) {
	        setTranslate();
	      }
	    }
	    if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
	      swiper.checkOverflow();
	    }
	    swiper.emit('update');
	  }
	  changeDirection(newDirection, needUpdate) {
	    if (needUpdate === void 0) {
	      needUpdate = true;
	    }
	    const swiper = this;
	    const currentDirection = swiper.params.direction;
	    if (!newDirection) {
	      // eslint-disable-next-line
	      newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';
	    }
	    if (newDirection === currentDirection || newDirection !== 'horizontal' && newDirection !== 'vertical') {
	      return swiper;
	    }
	    swiper.el.classList.remove(`${swiper.params.containerModifierClass}${currentDirection}`);
	    swiper.el.classList.add(`${swiper.params.containerModifierClass}${newDirection}`);
	    swiper.emitContainerClasses();
	    swiper.params.direction = newDirection;
	    swiper.slides.forEach(slideEl => {
	      if (newDirection === 'vertical') {
	        slideEl.style.width = '';
	      } else {
	        slideEl.style.height = '';
	      }
	    });
	    swiper.emit('changeDirection');
	    if (needUpdate) swiper.update();
	    return swiper;
	  }
	  changeLanguageDirection(direction) {
	    const swiper = this;
	    if (swiper.rtl && direction === 'rtl' || !swiper.rtl && direction === 'ltr') return;
	    swiper.rtl = direction === 'rtl';
	    swiper.rtlTranslate = swiper.params.direction === 'horizontal' && swiper.rtl;
	    if (swiper.rtl) {
	      swiper.el.classList.add(`${swiper.params.containerModifierClass}rtl`);
	      swiper.el.dir = 'rtl';
	    } else {
	      swiper.el.classList.remove(`${swiper.params.containerModifierClass}rtl`);
	      swiper.el.dir = 'ltr';
	    }
	    swiper.update();
	  }
	  mount(element) {
	    const swiper = this;
	    if (swiper.mounted) return true;

	    // Find el
	    let el = element || swiper.params.el;
	    if (typeof el === 'string') {
	      el = document.querySelector(el);
	    }
	    if (!el) {
	      return false;
	    }
	    el.swiper = swiper;
	    if (el.parentNode && el.parentNode.host && el.parentNode.host.nodeName === swiper.params.swiperElementNodeName.toUpperCase()) {
	      swiper.isElement = true;
	    }
	    const getWrapperSelector = () => {
	      return `.${(swiper.params.wrapperClass || '').trim().split(' ').join('.')}`;
	    };
	    const getWrapper = () => {
	      if (el && el.shadowRoot && el.shadowRoot.querySelector) {
	        const res = el.shadowRoot.querySelector(getWrapperSelector());
	        // Children needs to return slot items
	        return res;
	      }
	      return elementChildren(el, getWrapperSelector())[0];
	    };
	    // Find Wrapper
	    let wrapperEl = getWrapper();
	    if (!wrapperEl && swiper.params.createElements) {
	      wrapperEl = createElement('div', swiper.params.wrapperClass);
	      el.append(wrapperEl);
	      elementChildren(el, `.${swiper.params.slideClass}`).forEach(slideEl => {
	        wrapperEl.append(slideEl);
	      });
	    }
	    Object.assign(swiper, {
	      el,
	      wrapperEl,
	      slidesEl: swiper.isElement && !el.parentNode.host.slideSlots ? el.parentNode.host : wrapperEl,
	      hostEl: swiper.isElement ? el.parentNode.host : el,
	      mounted: true,
	      // RTL
	      rtl: el.dir.toLowerCase() === 'rtl' || elementStyle(el, 'direction') === 'rtl',
	      rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || elementStyle(el, 'direction') === 'rtl'),
	      wrongRTL: elementStyle(wrapperEl, 'display') === '-webkit-box'
	    });
	    return true;
	  }
	  init(el) {
	    const swiper = this;
	    if (swiper.initialized) return swiper;
	    const mounted = swiper.mount(el);
	    if (mounted === false) return swiper;
	    swiper.emit('beforeInit');

	    // Set breakpoint
	    if (swiper.params.breakpoints) {
	      swiper.setBreakpoint();
	    }

	    // Add Classes
	    swiper.addClasses();

	    // Update size
	    swiper.updateSize();

	    // Update slides
	    swiper.updateSlides();
	    if (swiper.params.watchOverflow) {
	      swiper.checkOverflow();
	    }

	    // Set Grab Cursor
	    if (swiper.params.grabCursor && swiper.enabled) {
	      swiper.setGrabCursor();
	    }

	    // Slide To Initial Slide
	    if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
	      swiper.slideTo(swiper.params.initialSlide + swiper.virtual.slidesBefore, 0, swiper.params.runCallbacksOnInit, false, true);
	    } else {
	      swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
	    }

	    // Create loop
	    if (swiper.params.loop) {
	      swiper.loopCreate();
	    }

	    // Attach events
	    swiper.attachEvents();
	    const lazyElements = [...swiper.el.querySelectorAll('[loading="lazy"]')];
	    if (swiper.isElement) {
	      lazyElements.push(...swiper.hostEl.querySelectorAll('[loading="lazy"]'));
	    }
	    lazyElements.forEach(imageEl => {
	      if (imageEl.complete) {
	        processLazyPreloader(swiper, imageEl);
	      } else {
	        imageEl.addEventListener('load', e => {
	          processLazyPreloader(swiper, e.target);
	        });
	      }
	    });
	    preload(swiper);

	    // Init Flag
	    swiper.initialized = true;
	    preload(swiper);

	    // Emit
	    swiper.emit('init');
	    swiper.emit('afterInit');
	    return swiper;
	  }
	  destroy(deleteInstance, cleanStyles) {
	    if (deleteInstance === void 0) {
	      deleteInstance = true;
	    }
	    if (cleanStyles === void 0) {
	      cleanStyles = true;
	    }
	    const swiper = this;
	    const {
	      params,
	      el,
	      wrapperEl,
	      slides
	    } = swiper;
	    if (typeof swiper.params === 'undefined' || swiper.destroyed) {
	      return null;
	    }
	    swiper.emit('beforeDestroy');

	    // Init Flag
	    swiper.initialized = false;

	    // Detach events
	    swiper.detachEvents();

	    // Destroy loop
	    if (params.loop) {
	      swiper.loopDestroy();
	    }

	    // Cleanup styles
	    if (cleanStyles) {
	      swiper.removeClasses();
	      if (el && typeof el !== 'string') {
	        el.removeAttribute('style');
	      }
	      if (wrapperEl) {
	        wrapperEl.removeAttribute('style');
	      }
	      if (slides && slides.length) {
	        slides.forEach(slideEl => {
	          slideEl.classList.remove(params.slideVisibleClass, params.slideFullyVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
	          slideEl.removeAttribute('style');
	          slideEl.removeAttribute('data-swiper-slide-index');
	        });
	      }
	    }
	    swiper.emit('destroy');

	    // Detach emitter events
	    Object.keys(swiper.eventsListeners).forEach(eventName => {
	      swiper.off(eventName);
	    });
	    if (deleteInstance !== false) {
	      if (swiper.el && typeof swiper.el !== 'string') {
	        swiper.el.swiper = null;
	      }
	      deleteProps(swiper);
	    }
	    swiper.destroyed = true;
	    return null;
	  }
	  static extendDefaults(newDefaults) {
	    extend(extendedDefaults, newDefaults);
	  }
	  static get extendedDefaults() {
	    return extendedDefaults;
	  }
	  static get defaults() {
	    return defaults;
	  }
	  static installModule(mod) {
	    if (!Swiper.prototype.__modules__) Swiper.prototype.__modules__ = [];
	    const modules = Swiper.prototype.__modules__;
	    if (typeof mod === 'function' && modules.indexOf(mod) < 0) {
	      modules.push(mod);
	    }
	  }
	  static use(module) {
	    if (Array.isArray(module)) {
	      module.forEach(m => Swiper.installModule(m));
	      return Swiper;
	    }
	    Swiper.installModule(module);
	    return Swiper;
	  }
	}
	Object.keys(prototypes).forEach(prototypeGroup => {
	  Object.keys(prototypes[prototypeGroup]).forEach(protoMethod => {
	    Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
	  });
	});
	Swiper.use([Resize, Observer]);

	function createElementIfNotDefined(swiper, originalParams, params, checkProps) {
	  if (swiper.params.createElements) {
	    Object.keys(checkProps).forEach(key => {
	      if (!params[key] && params.auto === true) {
	        let element = elementChildren(swiper.el, `.${checkProps[key]}`)[0];
	        if (!element) {
	          element = createElement('div', checkProps[key]);
	          element.className = checkProps[key];
	          swiper.el.append(element);
	        }
	        params[key] = element;
	        originalParams[key] = element;
	      }
	    });
	  }
	  return params;
	}

	function Navigation(_ref) {
	  let {
	    swiper,
	    extendParams,
	    on,
	    emit
	  } = _ref;
	  extendParams({
	    navigation: {
	      nextEl: null,
	      prevEl: null,
	      hideOnClick: false,
	      disabledClass: 'swiper-button-disabled',
	      hiddenClass: 'swiper-button-hidden',
	      lockClass: 'swiper-button-lock',
	      navigationDisabledClass: 'swiper-navigation-disabled'
	    }
	  });
	  swiper.navigation = {
	    nextEl: null,
	    prevEl: null
	  };
	  function getEl(el) {
	    let res;
	    if (el && typeof el === 'string' && swiper.isElement) {
	      res = swiper.el.querySelector(el) || swiper.hostEl.querySelector(el);
	      if (res) return res;
	    }
	    if (el) {
	      if (typeof el === 'string') res = [...document.querySelectorAll(el)];
	      if (swiper.params.uniqueNavElements && typeof el === 'string' && res && res.length > 1 && swiper.el.querySelectorAll(el).length === 1) {
	        res = swiper.el.querySelector(el);
	      } else if (res && res.length === 1) {
	        res = res[0];
	      }
	    }
	    if (el && !res) return el;
	    // if (Array.isArray(res) && res.length === 1) res = res[0];
	    return res;
	  }
	  function toggleEl(el, disabled) {
	    const params = swiper.params.navigation;
	    el = makeElementsArray(el);
	    el.forEach(subEl => {
	      if (subEl) {
	        subEl.classList[disabled ? 'add' : 'remove'](...params.disabledClass.split(' '));
	        if (subEl.tagName === 'BUTTON') subEl.disabled = disabled;
	        if (swiper.params.watchOverflow && swiper.enabled) {
	          subEl.classList[swiper.isLocked ? 'add' : 'remove'](params.lockClass);
	        }
	      }
	    });
	  }
	  function update() {
	    // Update Navigation Buttons
	    const {
	      nextEl,
	      prevEl
	    } = swiper.navigation;
	    if (swiper.params.loop) {
	      toggleEl(prevEl, false);
	      toggleEl(nextEl, false);
	      return;
	    }
	    toggleEl(prevEl, swiper.isBeginning && !swiper.params.rewind);
	    toggleEl(nextEl, swiper.isEnd && !swiper.params.rewind);
	  }
	  function onPrevClick(e) {
	    e.preventDefault();
	    if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;
	    swiper.slidePrev();
	    emit('navigationPrev');
	  }
	  function onNextClick(e) {
	    e.preventDefault();
	    if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
	    swiper.slideNext();
	    emit('navigationNext');
	  }
	  function init() {
	    const params = swiper.params.navigation;
	    swiper.params.navigation = createElementIfNotDefined(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
	      nextEl: 'swiper-button-next',
	      prevEl: 'swiper-button-prev'
	    });
	    if (!(params.nextEl || params.prevEl)) return;
	    let nextEl = getEl(params.nextEl);
	    let prevEl = getEl(params.prevEl);
	    Object.assign(swiper.navigation, {
	      nextEl,
	      prevEl
	    });
	    nextEl = makeElementsArray(nextEl);
	    prevEl = makeElementsArray(prevEl);
	    const initButton = (el, dir) => {
	      if (el) {
	        el.addEventListener('click', dir === 'next' ? onNextClick : onPrevClick);
	      }
	      if (!swiper.enabled && el) {
	        el.classList.add(...params.lockClass.split(' '));
	      }
	    };
	    nextEl.forEach(el => initButton(el, 'next'));
	    prevEl.forEach(el => initButton(el, 'prev'));
	  }
	  function destroy() {
	    let {
	      nextEl,
	      prevEl
	    } = swiper.navigation;
	    nextEl = makeElementsArray(nextEl);
	    prevEl = makeElementsArray(prevEl);
	    const destroyButton = (el, dir) => {
	      el.removeEventListener('click', dir === 'next' ? onNextClick : onPrevClick);
	      el.classList.remove(...swiper.params.navigation.disabledClass.split(' '));
	    };
	    nextEl.forEach(el => destroyButton(el, 'next'));
	    prevEl.forEach(el => destroyButton(el, 'prev'));
	  }
	  on('init', () => {
	    if (swiper.params.navigation.enabled === false) {
	      // eslint-disable-next-line
	      disable();
	    } else {
	      init();
	      update();
	    }
	  });
	  on('toEdge fromEdge lock unlock', () => {
	    update();
	  });
	  on('destroy', () => {
	    destroy();
	  });
	  on('enable disable', () => {
	    let {
	      nextEl,
	      prevEl
	    } = swiper.navigation;
	    nextEl = makeElementsArray(nextEl);
	    prevEl = makeElementsArray(prevEl);
	    if (swiper.enabled) {
	      update();
	      return;
	    }
	    [...nextEl, ...prevEl].filter(el => !!el).forEach(el => el.classList.add(swiper.params.navigation.lockClass));
	  });
	  on('click', (_s, e) => {
	    let {
	      nextEl,
	      prevEl
	    } = swiper.navigation;
	    nextEl = makeElementsArray(nextEl);
	    prevEl = makeElementsArray(prevEl);
	    const targetEl = e.target;
	    let targetIsButton = prevEl.includes(targetEl) || nextEl.includes(targetEl);
	    if (swiper.isElement && !targetIsButton) {
	      const path = e.path || e.composedPath && e.composedPath();
	      if (path) {
	        targetIsButton = path.find(pathEl => nextEl.includes(pathEl) || prevEl.includes(pathEl));
	      }
	    }
	    if (swiper.params.navigation.hideOnClick && !targetIsButton) {
	      if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
	      let isHidden;
	      if (nextEl.length) {
	        isHidden = nextEl[0].classList.contains(swiper.params.navigation.hiddenClass);
	      } else if (prevEl.length) {
	        isHidden = prevEl[0].classList.contains(swiper.params.navigation.hiddenClass);
	      }
	      if (isHidden === true) {
	        emit('navigationShow');
	      } else {
	        emit('navigationHide');
	      }
	      [...nextEl, ...prevEl].filter(el => !!el).forEach(el => el.classList.toggle(swiper.params.navigation.hiddenClass));
	    }
	  });
	  const enable = () => {
	    swiper.el.classList.remove(...swiper.params.navigation.navigationDisabledClass.split(' '));
	    init();
	    update();
	  };
	  const disable = () => {
	    swiper.el.classList.add(...swiper.params.navigation.navigationDisabledClass.split(' '));
	    destroy();
	  };
	  Object.assign(swiper.navigation, {
	    enable,
	    disable,
	    update,
	    init,
	    destroy
	  });
	}

	function classesToSelector(classes) {
	  if (classes === void 0) {
	    classes = '';
	  }
	  return `.${classes.trim().replace(/([\.:!+\/])/g, '\\$1') // eslint-disable-line
  .replace(/ /g, '.')}`;
	}

	function Pagination(_ref) {
	  let {
	    swiper,
	    extendParams,
	    on,
	    emit
	  } = _ref;
	  const pfx = 'swiper-pagination';
	  extendParams({
	    pagination: {
	      el: null,
	      bulletElement: 'span',
	      clickable: false,
	      hideOnClick: false,
	      renderBullet: null,
	      renderProgressbar: null,
	      renderFraction: null,
	      renderCustom: null,
	      progressbarOpposite: false,
	      type: 'bullets',
	      // 'bullets' or 'progressbar' or 'fraction' or 'custom'
	      dynamicBullets: false,
	      dynamicMainBullets: 1,
	      formatFractionCurrent: number => number,
	      formatFractionTotal: number => number,
	      bulletClass: `${pfx}-bullet`,
	      bulletActiveClass: `${pfx}-bullet-active`,
	      modifierClass: `${pfx}-`,
	      currentClass: `${pfx}-current`,
	      totalClass: `${pfx}-total`,
	      hiddenClass: `${pfx}-hidden`,
	      progressbarFillClass: `${pfx}-progressbar-fill`,
	      progressbarOppositeClass: `${pfx}-progressbar-opposite`,
	      clickableClass: `${pfx}-clickable`,
	      lockClass: `${pfx}-lock`,
	      horizontalClass: `${pfx}-horizontal`,
	      verticalClass: `${pfx}-vertical`,
	      paginationDisabledClass: `${pfx}-disabled`
	    }
	  });
	  swiper.pagination = {
	    el: null,
	    bullets: []
	  };
	  let bulletSize;
	  let dynamicBulletIndex = 0;
	  function isPaginationDisabled() {
	    return !swiper.params.pagination.el || !swiper.pagination.el || Array.isArray(swiper.pagination.el) && swiper.pagination.el.length === 0;
	  }
	  function setSideBullets(bulletEl, position) {
	    const {
	      bulletActiveClass
	    } = swiper.params.pagination;
	    if (!bulletEl) return;
	    bulletEl = bulletEl[`${position === 'prev' ? 'previous' : 'next'}ElementSibling`];
	    if (bulletEl) {
	      bulletEl.classList.add(`${bulletActiveClass}-${position}`);
	      bulletEl = bulletEl[`${position === 'prev' ? 'previous' : 'next'}ElementSibling`];
	      if (bulletEl) {
	        bulletEl.classList.add(`${bulletActiveClass}-${position}-${position}`);
	      }
	    }
	  }
	  function getMoveDirection(prevIndex, nextIndex, length) {
	    prevIndex = prevIndex % length;
	    nextIndex = nextIndex % length;
	    if (nextIndex === prevIndex + 1) {
	      return 'next';
	    } else if (nextIndex === prevIndex - 1) {
	      return 'previous';
	    }
	    return;
	  }
	  function onBulletClick(e) {
	    const bulletEl = e.target.closest(classesToSelector(swiper.params.pagination.bulletClass));
	    if (!bulletEl) {
	      return;
	    }
	    e.preventDefault();
	    const index = elementIndex(bulletEl) * swiper.params.slidesPerGroup;
	    if (swiper.params.loop) {
	      if (swiper.realIndex === index) return;
	      const moveDirection = getMoveDirection(swiper.realIndex, index, swiper.slides.length);
	      if (moveDirection === 'next') {
	        swiper.slideNext();
	      } else if (moveDirection === 'previous') {
	        swiper.slidePrev();
	      } else {
	        swiper.slideToLoop(index);
	      }
	    } else {
	      swiper.slideTo(index);
	    }
	  }
	  function update() {
	    // Render || Update Pagination bullets/items
	    const rtl = swiper.rtl;
	    const params = swiper.params.pagination;
	    if (isPaginationDisabled()) return;
	    let el = swiper.pagination.el;
	    el = makeElementsArray(el);
	    // Current/Total
	    let current;
	    let previousIndex;
	    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
	    const total = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
	    if (swiper.params.loop) {
	      previousIndex = swiper.previousRealIndex || 0;
	      current = swiper.params.slidesPerGroup > 1 ? Math.floor(swiper.realIndex / swiper.params.slidesPerGroup) : swiper.realIndex;
	    } else if (typeof swiper.snapIndex !== 'undefined') {
	      current = swiper.snapIndex;
	      previousIndex = swiper.previousSnapIndex;
	    } else {
	      previousIndex = swiper.previousIndex || 0;
	      current = swiper.activeIndex || 0;
	    }
	    // Types
	    if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
	      const bullets = swiper.pagination.bullets;
	      let firstIndex;
	      let lastIndex;
	      let midIndex;
	      if (params.dynamicBullets) {
	        bulletSize = elementOuterSize(bullets[0], swiper.isHorizontal() ? 'width' : 'height', true);
	        el.forEach(subEl => {
	          subEl.style[swiper.isHorizontal() ? 'width' : 'height'] = `${bulletSize * (params.dynamicMainBullets + 4)}px`;
	        });
	        if (params.dynamicMainBullets > 1 && previousIndex !== undefined) {
	          dynamicBulletIndex += current - (previousIndex || 0);
	          if (dynamicBulletIndex > params.dynamicMainBullets - 1) {
	            dynamicBulletIndex = params.dynamicMainBullets - 1;
	          } else if (dynamicBulletIndex < 0) {
	            dynamicBulletIndex = 0;
	          }
	        }
	        firstIndex = Math.max(current - dynamicBulletIndex, 0);
	        lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
	        midIndex = (lastIndex + firstIndex) / 2;
	      }
	      bullets.forEach(bulletEl => {
	        const classesToRemove = [...['', '-next', '-next-next', '-prev', '-prev-prev', '-main'].map(suffix => `${params.bulletActiveClass}${suffix}`)].map(s => typeof s === 'string' && s.includes(' ') ? s.split(' ') : s).flat();
	        bulletEl.classList.remove(...classesToRemove);
	      });
	      if (el.length > 1) {
	        bullets.forEach(bullet => {
	          const bulletIndex = elementIndex(bullet);
	          if (bulletIndex === current) {
	            bullet.classList.add(...params.bulletActiveClass.split(' '));
	          } else if (swiper.isElement) {
	            bullet.setAttribute('part', 'bullet');
	          }
	          if (params.dynamicBullets) {
	            if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
	              bullet.classList.add(...`${params.bulletActiveClass}-main`.split(' '));
	            }
	            if (bulletIndex === firstIndex) {
	              setSideBullets(bullet, 'prev');
	            }
	            if (bulletIndex === lastIndex) {
	              setSideBullets(bullet, 'next');
	            }
	          }
	        });
	      } else {
	        const bullet = bullets[current];
	        if (bullet) {
	          bullet.classList.add(...params.bulletActiveClass.split(' '));
	        }
	        if (swiper.isElement) {
	          bullets.forEach((bulletEl, bulletIndex) => {
	            bulletEl.setAttribute('part', bulletIndex === current ? 'bullet-active' : 'bullet');
	          });
	        }
	        if (params.dynamicBullets) {
	          const firstDisplayedBullet = bullets[firstIndex];
	          const lastDisplayedBullet = bullets[lastIndex];
	          for (let i = firstIndex; i <= lastIndex; i += 1) {
	            if (bullets[i]) {
	              bullets[i].classList.add(...`${params.bulletActiveClass}-main`.split(' '));
	            }
	          }
	          setSideBullets(firstDisplayedBullet, 'prev');
	          setSideBullets(lastDisplayedBullet, 'next');
	        }
	      }
	      if (params.dynamicBullets) {
	        const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
	        const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
	        const offsetProp = rtl ? 'right' : 'left';
	        bullets.forEach(bullet => {
	          bullet.style[swiper.isHorizontal() ? offsetProp : 'top'] = `${bulletsOffset}px`;
	        });
	      }
	    }
	    el.forEach((subEl, subElIndex) => {
	      if (params.type === 'fraction') {
	        subEl.querySelectorAll(classesToSelector(params.currentClass)).forEach(fractionEl => {
	          fractionEl.textContent = params.formatFractionCurrent(current + 1);
	        });
	        subEl.querySelectorAll(classesToSelector(params.totalClass)).forEach(totalEl => {
	          totalEl.textContent = params.formatFractionTotal(total);
	        });
	      }
	      if (params.type === 'progressbar') {
	        let progressbarDirection;
	        if (params.progressbarOpposite) {
	          progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';
	        } else {
	          progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';
	        }
	        const scale = (current + 1) / total;
	        let scaleX = 1;
	        let scaleY = 1;
	        if (progressbarDirection === 'horizontal') {
	          scaleX = scale;
	        } else {
	          scaleY = scale;
	        }
	        subEl.querySelectorAll(classesToSelector(params.progressbarFillClass)).forEach(progressEl => {
	          progressEl.style.transform = `translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`;
	          progressEl.style.transitionDuration = `${swiper.params.speed}ms`;
	        });
	      }
	      if (params.type === 'custom' && params.renderCustom) {
	        subEl.innerHTML = params.renderCustom(swiper, current + 1, total);
	        if (subElIndex === 0) emit('paginationRender', subEl);
	      } else {
	        if (subElIndex === 0) emit('paginationRender', subEl);
	        emit('paginationUpdate', subEl);
	      }
	      if (swiper.params.watchOverflow && swiper.enabled) {
	        subEl.classList[swiper.isLocked ? 'add' : 'remove'](params.lockClass);
	      }
	    });
	  }
	  function render() {
	    // Render Container
	    const params = swiper.params.pagination;
	    if (isPaginationDisabled()) return;
	    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.grid && swiper.params.grid.rows > 1 ? swiper.slides.length / Math.ceil(swiper.params.grid.rows) : swiper.slides.length;
	    let el = swiper.pagination.el;
	    el = makeElementsArray(el);
	    let paginationHTML = '';
	    if (params.type === 'bullets') {
	      let numberOfBullets = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
	      if (swiper.params.freeMode && swiper.params.freeMode.enabled && numberOfBullets > slidesLength) {
	        numberOfBullets = slidesLength;
	      }
	      for (let i = 0; i < numberOfBullets; i += 1) {
	        if (params.renderBullet) {
	          paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
	        } else {
	          // prettier-ignore
	          paginationHTML += `<${params.bulletElement} ${swiper.isElement ? 'part="bullet"' : ''} class="${params.bulletClass}"></${params.bulletElement}>`;
	        }
	      }
	    }
	    if (params.type === 'fraction') {
	      if (params.renderFraction) {
	        paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
	      } else {
	        paginationHTML = `<span class="${params.currentClass}"></span>` + ' / ' + `<span class="${params.totalClass}"></span>`;
	      }
	    }
	    if (params.type === 'progressbar') {
	      if (params.renderProgressbar) {
	        paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
	      } else {
	        paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
	      }
	    }
	    swiper.pagination.bullets = [];
	    el.forEach(subEl => {
	      if (params.type !== 'custom') {
	        subEl.innerHTML = paginationHTML || '';
	      }
	      if (params.type === 'bullets') {
	        swiper.pagination.bullets.push(...subEl.querySelectorAll(classesToSelector(params.bulletClass)));
	      }
	    });
	    if (params.type !== 'custom') {
	      emit('paginationRender', el[0]);
	    }
	  }
	  function init() {
	    swiper.params.pagination = createElementIfNotDefined(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
	      el: 'swiper-pagination'
	    });
	    const params = swiper.params.pagination;
	    if (!params.el) return;
	    let el;
	    if (typeof params.el === 'string' && swiper.isElement) {
	      el = swiper.el.querySelector(params.el);
	    }
	    if (!el && typeof params.el === 'string') {
	      el = [...document.querySelectorAll(params.el)];
	    }
	    if (!el) {
	      el = params.el;
	    }
	    if (!el || el.length === 0) return;
	    if (swiper.params.uniqueNavElements && typeof params.el === 'string' && Array.isArray(el) && el.length > 1) {
	      el = [...swiper.el.querySelectorAll(params.el)];
	      // check if it belongs to another nested Swiper
	      if (el.length > 1) {
	        el = el.find(subEl => {
	          if (elementParents(subEl, '.swiper')[0] !== swiper.el) return false;
	          return true;
	        });
	      }
	    }
	    if (Array.isArray(el) && el.length === 1) el = el[0];
	    Object.assign(swiper.pagination, {
	      el
	    });
	    el = makeElementsArray(el);
	    el.forEach(subEl => {
	      if (params.type === 'bullets' && params.clickable) {
	        subEl.classList.add(...(params.clickableClass || '').split(' '));
	      }
	      subEl.classList.add(params.modifierClass + params.type);
	      subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
	      if (params.type === 'bullets' && params.dynamicBullets) {
	        subEl.classList.add(`${params.modifierClass}${params.type}-dynamic`);
	        dynamicBulletIndex = 0;
	        if (params.dynamicMainBullets < 1) {
	          params.dynamicMainBullets = 1;
	        }
	      }
	      if (params.type === 'progressbar' && params.progressbarOpposite) {
	        subEl.classList.add(params.progressbarOppositeClass);
	      }
	      if (params.clickable) {
	        subEl.addEventListener('click', onBulletClick);
	      }
	      if (!swiper.enabled) {
	        subEl.classList.add(params.lockClass);
	      }
	    });
	  }
	  function destroy() {
	    const params = swiper.params.pagination;
	    if (isPaginationDisabled()) return;
	    let el = swiper.pagination.el;
	    if (el) {
	      el = makeElementsArray(el);
	      el.forEach(subEl => {
	        subEl.classList.remove(params.hiddenClass);
	        subEl.classList.remove(params.modifierClass + params.type);
	        subEl.classList.remove(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
	        if (params.clickable) {
	          subEl.classList.remove(...(params.clickableClass || '').split(' '));
	          subEl.removeEventListener('click', onBulletClick);
	        }
	      });
	    }
	    if (swiper.pagination.bullets) swiper.pagination.bullets.forEach(subEl => subEl.classList.remove(...params.bulletActiveClass.split(' ')));
	  }
	  on('changeDirection', () => {
	    if (!swiper.pagination || !swiper.pagination.el) return;
	    const params = swiper.params.pagination;
	    let {
	      el
	    } = swiper.pagination;
	    el = makeElementsArray(el);
	    el.forEach(subEl => {
	      subEl.classList.remove(params.horizontalClass, params.verticalClass);
	      subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
	    });
	  });
	  on('init', () => {
	    if (swiper.params.pagination.enabled === false) {
	      // eslint-disable-next-line
	      disable();
	    } else {
	      init();
	      render();
	      update();
	    }
	  });
	  on('activeIndexChange', () => {
	    if (typeof swiper.snapIndex === 'undefined') {
	      update();
	    }
	  });
	  on('snapIndexChange', () => {
	    update();
	  });
	  on('snapGridLengthChange', () => {
	    render();
	    update();
	  });
	  on('destroy', () => {
	    destroy();
	  });
	  on('enable disable', () => {
	    let {
	      el
	    } = swiper.pagination;
	    if (el) {
	      el = makeElementsArray(el);
	      el.forEach(subEl => subEl.classList[swiper.enabled ? 'remove' : 'add'](swiper.params.pagination.lockClass));
	    }
	  });
	  on('lock unlock', () => {
	    update();
	  });
	  on('click', (_s, e) => {
	    const targetEl = e.target;
	    const el = makeElementsArray(swiper.pagination.el);
	    if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && el && el.length > 0 && !targetEl.classList.contains(swiper.params.pagination.bulletClass)) {
	      if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;
	      const isHidden = el[0].classList.contains(swiper.params.pagination.hiddenClass);
	      if (isHidden === true) {
	        emit('paginationShow');
	      } else {
	        emit('paginationHide');
	      }
	      el.forEach(subEl => subEl.classList.toggle(swiper.params.pagination.hiddenClass));
	    }
	  });
	  const enable = () => {
	    swiper.el.classList.remove(swiper.params.pagination.paginationDisabledClass);
	    let {
	      el
	    } = swiper.pagination;
	    if (el) {
	      el = makeElementsArray(el);
	      el.forEach(subEl => subEl.classList.remove(swiper.params.pagination.paginationDisabledClass));
	    }
	    init();
	    render();
	    update();
	  };
	  const disable = () => {
	    swiper.el.classList.add(swiper.params.pagination.paginationDisabledClass);
	    let {
	      el
	    } = swiper.pagination;
	    if (el) {
	      el = makeElementsArray(el);
	      el.forEach(subEl => subEl.classList.add(swiper.params.pagination.paginationDisabledClass));
	    }
	    destroy();
	  };
	  Object.assign(swiper.pagination, {
	    enable,
	    disable,
	    render,
	    update,
	    init,
	    destroy
	  });
	}

	$('a.open-modal').click(function () {
	  $(this).modal({
	    fadeDuration: 250
	  });
	  $('.swiper').each(function () {
	    new Swiper($(this).get(0), {
	      modules: [Navigation, Pagination],
	      autoHeight: true,
	      slidesPerView: 1,
	      navigation: {
	        nextEl: '.swiper-button-next',
	        prevEl: '.swiper-button-prev'
	      }
	    });
	  });
	  return false;
	}); // Hack for replace the modal after the action on close

	$('.modal').on($.modal.AFTER_CLOSE, function (event, modal) {
	  $(this).insertAfter($(modal.$anchor));
	});
	new InteractiveBoard({
	  activateRandomShape: {
	    enabled: true,
	    time: 400,
	    duration: 3000
	  },
	  shape: {
	    width: 15,
	    height: 15,
	    margin: 1,
	    background: '#3980da'
	  },
	  colors: ['#494953']
	}).init();

})));
