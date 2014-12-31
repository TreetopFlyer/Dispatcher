var Dispatcher = {};
Dispatcher.GetInternalDispatcher = function(inObj)
{
	return inObj._Dispatcher;
};
Dispatcher.SetInternalDispatcher = function(inObj)
{
	inObj._Dispatcher = {};
	return inObj._Dispatcher;
};
Dispatcher.Create = function(inObj)
{
	var obj = Dispatcher.SetInternalDispatcher(inObj);
};
Dispatcher.Listen = function(inObj, inType, inHandler)
{
	var dispatcher = Dispatcher.GetInternalDispatcher(inObj);
	var type = dispatcher[inType];
	if(type === undefined)
		dispatcher[inType] = [];
		
	type.push(inHandler);	
};
Dispatcher.Unlisten = function(inObj, inType, inHandler)
{
	var dispatcher = Dispatcher.GetInternalDispatcher(inObj);
	var type = dispatcher[inType];
	if(type === undefined)
		return;
		
	var i;
	for(i=0; i<type.length; i++)
	{
		if(type[i] == inHandler)
		{
			type.splice(i, 1);
			return;
		}
	}
};
Dispatcher.Dispatch = function(inObj, inType, inEvent)
{
	var dispatcher = Dispatcher.GetInternalDispatcher(inObj);
	var type = dispatcher[inType];
	if(type === undefined)
		return;
		
	var i;
	for(i=0; i<type.length; i++)
	{
		type[i](inEvent);
	}
};
