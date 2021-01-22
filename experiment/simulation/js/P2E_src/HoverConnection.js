var HoverConnection = draw2d.Connection.extend({

    init: function ( sourcePort, targetPort) {
        var self = this;
        this._super({
            router: new draw2d.layout.connection.InteractiveManhattanConnectionRouter(),
            radius: 3,
            source: sourcePort,
            target: targetPort,
            color: "#00a8f0",
			stroke: 1.35,
			//sourceDecorator: new draw2d.decoration.connection.ArrowDecorator(0,10),
			//targetDecorator: new draw2d.decoration.connection.ArrowDecorator(0,10),
        });

   /*     this.on("dragEnter", function (emitter, event) {
            self.attr({
                outlineColor: "#303030",
                outlineStroke: 2,
                color: "#00a8f0"
            });
        });
        this.on("dragLeave", function (emitter, event) {
            self.attr({
                outlineColor: "#303030",
                outlineStroke: 0,
                color: "#000000"
            });
        });*/
    },

    /**
     * required to receive dragEnter/dragLeave request.
     * This figure ignores drag/drop events if it is not a valid target
     * for the draggedFigure
     *
     * @param draggedFigure
     * @returns {HoverConnection}
     */
    delegateTarget: function(draggedFigure)
    {
        return this;
    }
});
