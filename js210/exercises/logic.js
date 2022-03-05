//are we talking about what these statements return? or what they evaluate to?

(false && undefined); //false
(false || undefined); //undefined
((false && undefined) || (false || undefined)); //false || undefined => undefined
((false || undefined) || (false && undefined)); //undefined || false => false
((false && undefined) && (false || undefined)); //false && undefined => false
((false || undefined) && (false && undefined)); //undefined && false => undefined
('a' || (false && undefined) || ''); //'a' || false || '' => 'a'
((false && undefined) || 'a' || ''); // false || 'a' || '' => 'a'
('a' && (false || undefined) && ''); //undefined
((false || undefined) && 'a' && ''); // undefined